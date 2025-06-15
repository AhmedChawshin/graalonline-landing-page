import axios from "axios";
import { parseStringPromise } from "xml2js";

let cached = null;
let lastFetched = 0;
const CACHE_TTL = 1000 * 60 * 15;

export async function GET() {
  if (cached && Date.now() - lastFetched < CACHE_TTL) {
    return Response.json(cached);
  }

  try {
    const rss = await axios.get(
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCgepWt075N5ObYPHNy_Ic2w"
    );
    const parsed = await parseStringPromise(rss.data);

    const videos = parsed.feed.entry
      .slice(0, 6) // ✅ Limit to first 6 videos
      .map((entry) => ({
        id: entry["yt:videoId"][0],
        title: entry.title[0],
        url: entry.link[0].$.href,
        thumbnail: entry["media:group"][0]["media:thumbnail"][0].$.url,
        publishedAt: entry.published[0],
      }));

    cached = videos;
    lastFetched = Date.now();
    return Response.json(videos);
  } catch (e) {
    console.error("YouTube RSS fetch failed:", e.message);
    return new Response(
      JSON.stringify({ error: "Failed to load videos" }),
      { status: 500 }
    );
  }
}
