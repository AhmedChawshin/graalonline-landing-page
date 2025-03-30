// pages/download.js
"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  ListItem,
  UnorderedList,
  AccordionIcon,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

export default function Download() {
 
  const rulesPages = [
    {
      title: "Introduction",
      url: "https://www.graalonline.com/accounts/rules.php?page=1",
      content: (
        <>
          <Text fontWeight="bold">Introduction</Text>
          <Text mt={2}>
            These pages contain the policies under which users may participate in GraalOnline. The goal of these policies is to provide an enjoyable experience for the majority of the users.
          </Text>
          <Text mt={2}>
            These policies will undoubtedly NOT suit everyone, but this is impossible. Because GraalOnline is a multiplayer game, there can sometimes be a conflict between an individual user's idea of entertainment and that of the majority of the players. To improve gameplay experience for as many people as possible, the majority will be given the greatest weight.
          </Text>
          <Text mt={2}>
            Please read these policies carefully so you understand the rules under which you can play GraalOnline and interact with the other players.
          </Text>
          <Text fontWeight="bold" mt={4}>General</Text>
          <Text mt={2}>
            GraalOnline is presented on an AS-IS basis. Usage of the GraalOnline product indicates acceptance of this, and any risk that may imply. GraalOnline can only promise to make a reasonable effort to fix a software problem or to return service as quickly as possible (except in cases where the service interrupt is not related to the GraalOnline product itself). Only in cases of massive, unintentional account reset, GraalOnline will make reasonable efforts to restore any loss of player attributes, gralats, tools, etc. Otherwise, screenshots and individual witness are not acceptable proof.
          </Text>
          <Text fontWeight="bold" mt={4}>Keep It Legal</Text>
          <Text mt={2}>
            No illegal activities are allowed in GraalOnline. You may not use Chat or Forums to publish, post, distribute or disseminate defamatory, infringing, obscene or other unlawful material or information, specifically, but not limited to, child pornography, bestiality or incest. Also, players may not promote the use or distribution of illegal drugs.
          </Text>
          <Text mt={2}>
            Players may not use GraalOnline to distribute urls to external sites which promote illegal activities and violate the code of conduct.
          </Text>
          <Text mt={2}>
            Players may not upload files or post messages that contain photos, music, software or other material protected by intellectual property laws, rights of privacy or publicity or any other applicable law unless they own or control the rights thereto or have received all the necessary consents. GraalOnline is not responsible for any use of anything you say or post.
          </Text>
          <Text mt={2} fontWeight="bold">
            IMPORTANT:{" "}
            <Text as="span" fontWeight="normal">
              Players risk immediate ban if they build, host or even promote sites and/or web content for facilitating cheating, threats of cheating and any type of hacking content.
            </Text>
          </Text>
          <Text fontWeight="bold" mt={4}>Privacy</Text>
          <Text mt={2}>
            GraalOnline policy will respect each individual player's privacy to communicate unless there is a reasonable concern that such conversations relate to bug abuse, disruptive behavior, or other illegal activities. It must be made clear that all actions and conversations within GraalOnline are subject to monitoring. Should a player or players be suspected of illegal or abusive activity, GraalOnline reserves the right to use administration tools to monitor individuals' communications via chats and other private messages.
          </Text>
          <Text mt={2}>
            GraalOnline staff and personnel will never single out individual personal information when communicating to other players or outside parties. GraalOnline expects GraalOnline players to abide by the same respect for personal privacy. Personal information - age, address, personal email, phone numbers, etc. - should never be exploited, communicated between players. Any violations will be strictly punished.
          </Text>
          <Text fontWeight="bold" mt={4}>Character Names</Text>
          <Text mt={2}>
            Generally, it is up to the player to decide the name for his or her character while playing GraalOnline. However, some character names will be considered abusive behaviour: for example, names indicating other specific player characters, the players themselves, GraalOnline staff, or any real-life personal information will not be accepted. It is also unacceptable to use profanity, racially or sexually explicit words or generally threatening wording as a player's character name. "Kill_XXXX" is an example of an unacceptable name. Judgment of what is and is not disruptive is entirely at the discretion of GraalOnline.
          </Text>
        </>
      ),
    },
    {  
      title: "Chat And Forum",
      url: "https://www.graalonline.com/accounts/rules.php?page=1",
      content: (
        <>
          <Text fontWeight="bold">Chat and Forum</Text>
          <Text mt={2}>
            Discussion through onscreen chat, GraalOnline chat, and discussion forums is a part of the game. However, GraalOnline must not be used to promote competing products or services. Individuals who actively promote other competing products or services within GraalOnline may be locked out.
          </Text>
          <Text mt={2}>
            Another abuse of chat and forum privileges includes using abusive language (cursing or threatening language), racial attacks or comments, or sexually explicit comments. This applies to direct communication with players, mass messages via GraalOnline chat, or discussion board content.
          </Text>
          <Text mt={2}>
            The GraalOnline Communications Forum (Message Boards) is intended for discussions related to GraalOnline, including gameplay, ideas, and experiences. Constructive complaints and healthy criticism that suggest improvements are welcome. However, flame wars, personal attacks, and unfounded criticism will be removed, and offenders may be banned. GraalOnline staff reserves the right to lock out such abusive players.
          </Text>
          <Text mt={2}>
            Players are prohibited from promoting sexually explicit content, racism, or vulgarity online. This includes sharing URLs to sites containing profanity, nudity, or other violations of the GraalOnline Rules of Conduct.
          </Text>
          <Text mt={2}>
            Players who promote cheating, hacking, or any content subversive to gameplay risk immediate ban. GraalOnline has zero tolerance for such activities.
          </Text>
          <Text fontWeight="bold" mt={4}>Bug Abuse, Hacks, and Trainers</Text>
          <Text mt={2}>
            Any attempt to gain an unfair advantage through undocumented features or by manipulating the game's datastream is strictly prohibited. This includes memory edits, trainers, anti-idle macros, bots, or other hacks. Such actions disrupt game balance, create unfair advantages, and harm the overall player experience. GraalOnline enforces a zero-tolerance policy against these activities.
          </Text>
          <Text mt={2}>
            Bugs should always be reported. If a player observes someone abusing a bug or discussing plans to do so and fails to report it, they may face the same penalties as the abuser. Players should report bugs via the Graal forum, Support Center (GraalDesk), or email at bugs@graalonline.com.
          </Text>
          <Text mt={2}>
            GraalOnline reserves the right to confiscate any rewards obtained through bug abuse. Failure to cooperate in disclosing the extent of the abuse or dishonesty regarding ill-gotten gains is grounds for immediate lock-out.
          </Text>
          <Text fontWeight="bold" mt={4}>Bug Reporting</Text>
          <Text mt={2}>
            Since GraalOnline constantly introduces new features, levels, and content, occasional bugs are expected. Fortunately, many issues can be fixed on the fly without requiring downloads or patches.
          </Text>
          <Text mt={2}>
            Players should report bugs via the Graal forum, Support Center (GraalDesk), or email at bugs@graalonline.com, following the guidelines provided on the Graal website. Complaints about other players, staff, or personal grievances should not be included in bug reports. Unacceptable submissions include statements like:
          </Text>
          <UnorderedList mt={2}>
            <ListItem>"Player X killed me because he is a jerk..."</ListItem>
            <ListItem>"I don't like this level. It's stupid..."</ListItem>
          </UnorderedList>
          <Text mt={2}>Proper reports should provide a clear and concise description of the issue:</Text>
          <UnorderedList mt={2}>
            <ListItem>What you were doing before and after the issue occurred</ListItem>
            <ListItem>The level you were in (Press F5 to check the loaded level)</ListItem>
            <ListItem>If an item was lost, the exact state before and after the event</ListItem>
            <ListItem>System details (software version, PC specs, video card, connection type, etc.)</ListItem>
          </UnorderedList>
        </>
      )
    },
    { 
      title: "Game Staff", 
      url: "https://www.graalonline.com/accounts/rules.php?page=3",
      content: (
        <>
          <Text fontWeight="bold">Game Staff</Text>
          <Text mt={2}>
            The staff of GraalOnline, from Administrators to FAQ team to LAT team to Police, are often online to help players who have genuine problems with game play. Players must realise that complaints for issues related to general gameplay detract the Staff's ability to help others in genuine need.
          </Text>
          <Text mt={2}>
            Because GraalOnline is available for users in across the world and through many time zones, Staff members may not always be online or available in real-time to help with issues. In such instances, subscribing players are to use the Graal Forum to report their problems to the appropriate staff. GraalOnline Staff will make every effort to respond as quickly as possible.
          </Text>
          <Text fontWeight="bold" mt={4}>Game Content Updates</Text>
          <Text mt={2}>
            GraalOnline reserves the right to make modifications to any and all game content and rules at any time, without notice. GraalOnline has the responsibility to preserve the balance of the game for the majority of the players. Therefore, GraalOnline will routinely add new content, rules, modify existing rules, and even go back and change new content that did not function as expected. These changes can impact your character in a variety of ways. If you feel that the change unfairly penalizes your character, or your character type, given the requirements of balance, challenge, and the general good of the game, then you may make your views known to GraalOnline via GraalOnline Forum. It should be understood, however, that GraalOnline maintains a longer range view which may be in conflict with short-term and character-specific interests, but GraalOnline will always attempt to make the best decision for the overall good of the game.
          </Text>
          <Text fontWeight="bold" mt={4}>Delays / Slowdowns</Text>
          <Text mt={2}>
            GraalOnline Server and Backend is designed to provide optimal network efficiency. Our servers are designed NOT to disadvantage players with slow connections. We also make efforts to ensure network slowdowns are not a result of GraalOnline Server-side components. However, some network delay is a normal consequence of playing a game with hundreds or thousands of simultaneously connections over the Internet. Delays are typically only a few seconds, but may occasionally be longer. Additionally, some delays may affect only one player, because he or she is having problems with a local network node. GraalOnline reserves the right of final judgment as to the verification of any slowdown-related claims.
          </Text>
          <Text fontWeight="bold" mt={4}>Competitive Events</Text>
          <Text mt={2}>
            While there are a wide variety of events and quests found in GraalOnline worlds, some events pit player versus player, or teams of players versus other teams. All players must agree that there are elements of combat and competitive events in GraalOnline. Through either their experience or their accumulated player attributes and weapons, some players will have competitive advantages over others. This is part of normal gameplay. It is not acceptable, however, for such advantaged players to repeatedly prey upon weaker players or 'newbies'. Such 'stalking' of weak players or newbies may be in violation of GraalOnline policy.
          </Text>
          <Text mt={2}>
            This does NOT give player who are victims in combat the right to complain to Police each time they are killed. There are many "grey areas" in terms of defining what is acceptable competition, and what is abusive behaviour. GraalOnline will almost always stay out of player conflicts. However, when player activities create a disruptive influence on GraalOnline in general, the participants will be warned. GraalOnline reserves the right to determine which behaviours are considered abusive.
          </Text>
        </>
      )
    },
    { 
      title: "Quests and Special Events", 
      url: "https://www.graalonline.com/accounts/rules.php?page=4",
      content: (
        <>
          <Text fontWeight="bold">Quests and Special Events</Text>
          <Text mt={2}>
            The running of events and quests can sometimes accommodate only a few players at a time. To allow as many players as possible to enjoy it, GraalOnline may run the same quest more than once. Because of this, if you participate in a quest, please do not discuss the details of the puzzles with other players, because this can decrease their own enjoyment of it when their turn comes around. Also, please do not broadcast puzzle solutions or other spoilers over general means of communication, such as the ESP network, or the public Message Board topics.
          </Text>
          <Text mt={2}>
            Event and Quest participants who are being disruptive may be removed from the quest. Examples of disruptive behavior are: Not responding to Event Manager commands, criticizing the event/quest or the people involved or actively preventing other players from progressing.
          </Text>
          <Text fontWeight="bold" mt={4}>Quest/Events: Giving Away Spoilers</Text>
          <Text mt={2}>
            Also, there will always be players who have participated in an event/quest before, and therefore already know tricks, shortcuts or hidden functions. Generally, GraalOnline encourages players to communicate with each other. Many quests are designed for multiple players who need to communicate in order to accomplish the quest. Some quests, however, are designed to let participating players discover hidden objects. In these cases, experienced players should not communicate this sensitive information or knowledge to others. This will ruin the challenge of the event and create unfair advantages for certain players. However, communicating where a hidden quest starts or how, during a quest, players can avoid 'baddies' by taking an alternative route ARE NOT necessarily detrimental to the quest. Because there are many 'grey areas' in the completion of events and quests, if a player is NOT SURE if communicating tricks, shortcuts or hidden functions will be harmful to gameplay, it is better to be silent. Interpretation of good and bad communications is the sole discretion of the GraalOnline staff.
          </Text>
          <Text mt={2}>
            For the case when quests include 'secret' information, knowledge of which will spoil the participant's experience, players who want to start an event or quest should also not solicit 'spoilers' from other players via Mass Messages. Both Players spoilers and players looking for spoilers may be banned from events. Determination of what is and is not disruptive behavior, and/or banning or removal of a event/quest participant, is entirely at the discretion of the Event Master running the event/quest.
          </Text>
          <Text fontWeight="bold" mt={4}>Quests/Events: Participant Limits</Text>
          <Text mt={2}>
            Some quests have a limited capacity. GraalOnline makes no guarantee that everyone who shows up for a quest will be able to participate. Most quests will be run again at a later date, but GraalOnline makes no guarantee of the frequency of these quests, or that any particular player will be guaranteed the right to participate in any of them.
          </Text>
          <Text mt={2}>
            GraalOnline is not required to give warning that an event/quest will be run. Some are announced ahead of time, while others are run spontaneously.
          </Text>
          <Text fontWeight="bold" mt={4}>Quests/Events: Prizes</Text>
          <Text mt={2}>
            Awards are frequently given out at the end of quests and other events. There is no guarantee, however, that a player's participation in an event/quest will guarantee an award. Even though a player may have contributed to the solution of a puzzle, or roleplayed well, his or her actions at those times may not be monitored. GraalOnline is not required to monitor the behavior of all quest participants.
          </Text>
          <Text fontWeight="bold" mt={4}>Score Lists</Text>
          <Text mt={2}>
            GraalOnline is the sole judge of the accuracy of any high score lists and other event score listings. An announcement by GraalOnline as to the winners of an event, is final.
          </Text>
        </>
      )
    },
    { 
      title: "Exchanging Items & 'Scamming'", 
      url: "https://www.graalonline.com/accounts/rules.php?page=5",
      content: (
        <>
          <Text fontWeight="bold">Exchanging Items & 'Scamming'</Text>
          <Text mt={2}>
            Character-owned items, such as tools, houses, and bomy pets, may be auctioned or traded within Graal's auction or trading features. If, due to bugs in the system, there are discrepancies between the buyer/seller terms and the actual result, GraalOnline will make all reasonable attempts to rectify the situation.
          </Text>
          <Text mt={2}>
            Any exchange of materials outside GraalOnline secured exchange locations, falls under the term 'caveat emptor', or 'buyer beware.' In other words, GraalOnline will not be responsible for rectifying broken promises, incomplete trades, etc. in such a setting. If trading outside Graal 'sanctioned' trading locations, trade only with players you can trust.
          </Text>
          <Text mt={2}>
            This 'caveat emptor' approach does not mean Scamming is legal, only that it is difficult to prove. If Graal Police witness a scam directly they may punish the offending player. The best way to avoid being scammed is to only trade within secure trading facilities in Graal.
          </Text>
          <Text fontWeight="bold" mt={4}>Loss of Items</Text>
          <Text mt={2}>
            There are many items that players accumulate during regular gameplay, through quests, through sparring and events. In rare cases, these items can be inexplicably lost. Often, GraalOnline staff will have a record of these items and can trace the reason for the loss. If it is clear that the items was lost through neither the fault of the player or gameplay, or if the loss of the item creates imbalances in player power or gameplay, GraalOnline staff will try to replace the item. In cases where it is not directly evident that the items existed, or that the item wasn't lost through game play or a bug, GraalOnline staff will not replace or repair the items. The decision to replace items is the sole discretion of GraalOnline staff.
          </Text>
          <Text mt={2}>
            Because GraalOnline content evolves so quickly and because normal MMP gameplay can introduce MANY different and unpredictable elements, items should never be trusted to ALWAYS behave in a perfectly predictable manner.
          </Text>
          <Text mt={2}>
            In very rare instances, an item may have to be confiscated if it is seriously in error. Certain GraalOnline staff members are authorized to remove faulty items. In some cases, they can replace it with another item if there is one that provides similar benefits/powers of the one removed). Again, this can take place at GraalOnline's sole discretion.
          </Text>
          <Text fontWeight="bold" mt={4}>Repair / Replacement</Text>
          <Text mt={2}>
            Should it appear that your character or its tools/items has changed unexpectedly, subscribers may inform us in the Graal forum for bug reporting or by speaking to the appropriate Staff directly. GraalOnline staff will attempt to investigate the problem, and may, at its sole discretion, authorize adjustments to your character or inventory. Some Staff members are empowered to make many on-the-spot decisions about replacement, but some situations will require approval from GraalOnline management.
          </Text>
          <Text mt={2}>
            In many instances, GraalOnline's only recourse in determining the cause of a problem is to verify that the programming/script involved is reliable. If specific game mechanics function correctly, and repeated tests under similar circumstances as the reported problem yield correct results, then we must rule that what the user saw is attributed to some type of communication problem or a misunderstanding of the output.
          </Text>
        </>
      )
    },
    { 
      title: "Policy Violation", 
      url: "https://www.graalonline.com/accounts/rules.php?page=6",
      content: (
        <>
          <Text fontWeight="bold">Policy Violations</Text>
          <Text mt={2}>
            Anyone found to be in violation of the policies described in this document, at the sole discretion of GraalOnline, will be subject to the following:
          </Text>
          <UnorderedList mt={2}>
            <ListItem><Text fontWeight="bold">First violation:</Text> The user will receive a warning describing the breach of policy GraalOnline believes they have committed, either onscreen or via Email.</ListItem>
            <ListItem><Text fontWeight="bold">Second violation:</Text> If possible, the player will be temporarily locked out of the area of gameplay related to the abuse. For example, if a player is using abusive language to others in the Forum, s/he will be prevented from using the forum. If a player is disruptive in events, s/he will be prevented from competing in events.</ListItem>
            <ListItem><Text fontWeight="bold">Third violation:</Text> The user will be locked out of GraalOnline for a period of up to one month, and will be notified via Email.</ListItem>
            <ListItem><Text fontWeight="bold">Fourth violation:</Text> The user will be locked out of GraalOnline permanently without refund.</ListItem>
          </UnorderedList>
          <Text mt={2}>
            In certain circumstances, such as extremely abusive behavior, a user may be locked out without warning or notice of any kind. However, GraalOnline will follow up with an Email explaining why this step was taken.
          </Text>
          <Text fontWeight="bold" mt={4}>Miscellaneous</Text>
          <Text mt={2}>
            Additional policies from time to time may become necessary, such as unique policies for a quest. It is also GraalOnline policy that if anyone is locked out of one GraalOnline product, for any reason, GraalOnline may choose to lock that user's accounts out of ALL GraalOnline products, on all services. This includes current and future GraalOnline products. If a user is discovered to be playing on an account which is registered to a fraudulent or incorrect name, address, or billing method, that may also be grounds for immediate lockout.
          </Text>
        </>
      )
    },
  ];
  const rulesPagesEra = [
    {
      title: "General Rules",
      url: "http://www.graalonline.com/docs/conduct.php",
      content: (
        <>
          <Text fontWeight="bold">General Rules</Text>
          <Text mt={2}>
            GraalOnline Era generally follows the same conduct rules as the GraalOnline.com product.
          </Text>
          <Text mt={2}>
            To simplify and clarify specific activities for GraalOnline Era, please read through this entire document and abide by these rules. While playing GraalOnline Era, you are prohibited from doing any of the following:
          </Text>
          <Text fontWeight="bold" mt={4}>Vulgarity</Text>
          <Text mt={2}>
            This includes any attempt to use an alternate spelling of a swear word or phrase to avoid the swear filter, using abbreviations of a swear word or phrase, or using any word or phrase as an obscene or derogatory term. Excessive vulgarity of any kind is not tolerated.
          </Text>         
          <Text fontWeight="bold" mt={4}>Harassment</Text>
          <Text mt={2}>
            This includes bullying others, threatening, stalking, using abusive language, sexual advances, spamming private messages, hate speech, spamming long strings of characters in public chat or any other actions that disturb another player's gameplay experience.
          </Text>         
          <Text fontWeight="bold" mt={4}>Racism</Text>
          <Text mt={2}>
            Do not judge, insult, use racial slang, or any racist language towards others based on ethnic groups, cultural differences, or otherwise.
          </Text>          
          <Text fontWeight="bold" mt={4}>Staff Impersonation</Text>
          <Text mt={2}>
            Attempting to impersonate any current or retired GraalOnline Staff member such as having their nickname that includes an official staff tag such as "NICKNAME(Player Relations)", or writing in your status, in public chat, or in Private Messaging claiming to be staff. You will be warned, and your nickname/status reset as a result.
          </Text>         
          <Text fontWeight="bold" mt={4}>USD Transactions</Text>
          <Text mt={2}>
            Any attempt to buy, sell, trade, share, receive, or give away items or accounts in-game for any type of real money currency or gift card codes and vice versa.
          </Text>        
          <Text fontWeight="bold" mt={4}>Hacking</Text>
          <Text mt={2}>
            Attempting to alter game files, illegal purchases, or using tools (macros, changing movement speed, etc) to gain an advantage.
          </Text>         
          <Text fontWeight="bold" mt={4}>Abusing Glitches/Bugs</Text>
          <Text mt={2}>
            Exploiting or taking advantage of glitches that are not part of normal gameplay (lag glitching, glitching into otherwise inaccessible areas, etc). Bugs within GraalOnline Era should be reported to GraalOnline Era Staff.
          </Text>      
          <Text fontWeight="bold" mt={4}>Boosting</Text>
          <Text mt={2}>
            <Text fontWeight="bold">Spar Stats:</Text> Asking other players to partake in spar matches and purposely lose with the intent on excessively increasing your spar wins.
          </Text>
          <Text mt={2}>
            <Text fontWeight="bold">Player Kills:</Text> Killing other players, or your alternate accounts continually to gain kills unfairly.
          </Text>    
          <Text fontWeight="bold" mt={4}>Additional Prohibitions</Text>
          <Text mt={2}>You are also prohibited from:</Text>
          <UnorderedList>
            <ListItem>Asking other players for accounts or any personal information (emails, passwords, or other personal/identifying details).</ListItem>
            <ListItem>Advertising websites or services which offer "free gralats", "free items", "free iTunes" or other GraalOnline Era-related scams.</ListItem>
            <ListItem>Attempting or offering to duplicate items.</ListItem>
            <ListItem>Trading in-game items from GraalOnline Era for items in other MMO games (cross-server trading).</ListItem>
            <ListItem>Attempting to steal other player accounts, or deceive someone into giving out their account information.</ListItem>
            <ListItem>Engaging in or promoting suggestive or explicit sexual conduct, illegal drugs, or alcoholism.</ListItem>
            <ListItem>Abusing the report system with pointless text. Excessive abuse of the report system will result in a warning.</ListItem>
            <ListItem>Continuously spamming messages to GraalOnline Era Staff with rude or pointless text.</ListItem>
            <ListItem>Engaging in or promoting religious, political, or cultural hate speech.</ListItem>
          </UnorderedList>
        </>
      )},{
        title: "Warning and Jailing Rules",
        url: "http://era-go.com/forum/showthread.php?Jailing-Rules",
        content: (
          <>
            <Text fontWeight="bold">Warning and Jailing Rules</Text>
            <Text mt={2}>
              For additional information, please see: 
              <Link href="http://era-go.com/forum/showthread.php?Jailing-Rules" isExternal>
                Jailing Rules
              </Link>
            </Text>
            <Text mt={2}>
              You may receive a warning for violating any of the GraalOnline Era rules. If you are warned, it will be recorded permanently on your account. According to the warning and jailing rules, receiving three warnings in a specific category will result in a 3-hour jail sentence. Each additional warning in the same category will increase the jail time by 1 hour.
            </Text>
            <Text mt={2}>
              Certain categories, such as USDing or hacking, are considered major violations and result in instant and longer jail times without notice. In extreme cases, this may lead to an account reset or a ban from all GraalOnline servers.
            </Text>
            <Text mt={2}>
              Be advised that GraalOnline Era Staff only warns players based on evidence or direct observations of rule violations, especially when investigating player reports. If you engage in or promote prohibited activity with a reported player, you may also receive a warning. When reporting a player, cease all communications with them and allow a Player Relations Team admin to handle the situation.
            </Text>
            <Text fontWeight="bold" mt={4}>Jail System</Text>
            <Text mt={2}>
              The jail system operates based on your IP address. If you are connected to WiFi with others (family, friends) and one of them is jailed, you will also be jailed. 
            </Text>
            <Text mt={2}>
              For example, Snake plays on his Android phone and follows the rules, but his brother Python, who plays on Facebook, is being vulgar and gets warned three times. Since they share a WiFi connection, both Snake and Python will be jailed.
            </Text>
            <Text mt={2} fontWeight="bold">
              Note: Being jailed due to shared WiFi will not affect your jail history.
            </Text>
          </>
        ),
      },
      {
        title: "Reporting Glitches and Offensive Behavior",
        url: "http://era-go.com/forum/showthread.php?Glitches-and-Offensive-Behavior",
        content: (
          <>
            <Text fontWeight="bold">Reporting Glitches</Text>
            <Text mt={2}>
              As a player, you are responsible for reporting any glitches and bugs you find to GraalOnline Era Staff. Please report glitches here:{" "} 
              <Link href="http://support.toonslab.com/" isExternal>
                Glitches & Bugs
              </Link>
            </Text>
            <Text mt={2}>
              Do not abuse any glitches or bugs you find. Reporting a glitch and seeing no immediate action taken does not mean you are allowed to continue abusing it. Allow a staff member to verify and correct the issue.
            </Text>
            <Text fontWeight="bold" mt={4}>Reporting Offensive Behavior</Text>
            <Text mt={2}>
              GraalOnline Era Staff's Player Relations Team strives to provide a safe and enjoyable experience for all players. To report a player violating these rules, go to their Profile `{'>'}`  More Actions `{'>'}` Report. Select the appropriate category (e.g., "offensive language" for vulgarity, "offensive name" for inappropriate nicknames) and provide a descriptive reason. A Player Relations Team admin will investigate the report as soon as possible.
            </Text>
            <Text mt={2}>
              Common reports that GraalOnline Era Staff will NOT take action on:
            </Text>
            <UnorderedList mt={2}>
              <ListItem>Trade scams: In-game item scamming is legal, except in cases of harassment, exploiting bugs, or attempting to "duplicate" items.</ListItem>
              <ListItem>Players not leaving a trade table, pizza table, etc.</ListItem>
              <ListItem>Players picking up shells, trash, mushrooms, etc.</ListItem>
              <ListItem>Players digging for shells in the same spot as you.</ListItem>
              <ListItem>Roleplaying drama.</ListItem>
              <ListItem>Using the word "noob." This is not considered vulgarity unless it involves excessive harassment.</ListItem>
              <ListItem>Being killed by another player (combat is part of the game).</ListItem>
            </UnorderedList>
            <Text mt={2}>
              If a player is harassing you via Private Messaging, you can block them by going to their Profile {'>'}  More Actions {'>'}  Report and Block PM.
            </Text>
            <Text mt={2}>
              If you find a player severely violating these rules (e.g., account selling, attempting to steal account information, hacking) and a Player Relations Team admin is not available, you may use the support system.

            </Text>
            <Text mt={2}>
              Please include screenshots or video proof when reporting severe rule violations.
            </Text>
          </>
        ),
      },      
      {
        title: "Account Rules, Guidelines and Safety",
        url: "http://support.toonslab.com/",
        content: (
          <>
            <Text fontWeight="bold">Account Rules, Guidelines and Safety</Text>
            <Text mt={2}>
              When you create an account on GraalOnline Era, it is entirely your responsibility to maintain its security and privacy. You may share your account at YOUR OWN RISK. Graal staff will not assist you in regaining access to your account if you give it away. You are not allowed to sell, buy, or trade accounts under any circumstances for any reason. If you are found to be doing any of these actions, your account will be jailed without notice and, in extreme cases, may be reset or banned from GraalOnline servers.
            </Text>
            <Text mt={2}>
              Never give out or ask for personal account information for any reason, including emails, Graal IDs, and passwords.
            </Text>
            <Text mt={2}>
              Accounts on GraalOnline Era are identified with an email address to allow a player to use their account on any device. For better security of your GraalOnline Era account, GraalOnline Era Staff recommends the following:
            </Text>
            <UnorderedList>
              <ListItem>Secure your email account using your email provider's security settings, such as text or voice call code options for authorization.</ListItem>
              <ListItem>Be careful who or where you share your email address and Graal ID outside of GraalOnline Era, such as Facebook, Twitter, etc. Keep your personal account information private at all times.</ListItem>
              <ListItem>Do not share email accounts with another person. Ensure you alone have full authorization.</ListItem>
              <ListItem>Revoke access in Identify options in-game to allow only the devices you currently have access to.</ListItem>
            </UnorderedList>
            <Text mt={2}>
              You are solely responsible for the safety and security of your GraalOnline Era account. If you are a victim of account theft and are found to have knowingly shared your account information with another player, GraalOnline Era Staff may not be able to assist you in retrieving your account. Ensure that your emails and passwords are safely stored.
            </Text>
            <Text mt={2}>
              For account issues, please use any ONE of the following solutions to contact Staff:
            </Text>
            <UnorderedList>
              <ListItem>
                <Link href="http://support.toonslab.com/" isExternal>
                  Submit a ticket via Toonslab Support
                </Link>
              </ListItem>
              <ListItem>Email: <Link href="mailto:era@graalonline.com">era@graalonline.com</Link></ListItem>
            </UnorderedList>
          </>
        ),
      }
  ];
    return (
    <MotionBox
      minH="100vh"
      color="white"
      px={{ base: 4, md: 8 }}
      py={12}
      position="relative"
      overflow="hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <VStack spacing={8} maxW="800px" mx="auto" textAlign="left" align="start">
        {/* Header */}
        <MotionHeading
          as="h1"
          size="xl"
          textAlign="center"
          fontWeight="bold"
          textShadow="0 2px 4px rgba(0, 0, 0, 0.2)"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          GraalOnline Rules
        </MotionHeading>

        {/* Rules Section */}
        <Box w="full">
          <Accordion allowMultiple>
            {rulesPages.map((rule, index) => (
              <AccordionItem key={index} border="none" mb={2}>
                <AccordionButton
                  bg="gray.900"
                  _hover={{
                    bg: "gray.800",
                  }}
                  borderRadius="md"
                  p={4}
                  transition="all 0.3s ease"
                  _expanded={{ bg: "gray.800", borderBottomRadius: 0 }}
                  border="1px solid"
                  borderColor="gray.700"
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize="md" fontWeight="medium" color="gray.100">
                      {rule.title}
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                  bg="gray.900"
                  borderRadius="md"
                  mt={-1}
                  p={4}
                  borderTop="1px solid"
                  borderColor="gray.700"
                  borderBottom="1px solid"
                  borderBottomColor="gray.700"
                >
                  <Box fontSize="sm" color="gray.300">
                    {rule.content}
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
          <Text fontSize="xs" color="gray.400" mt={2}>
            Last Updated: January 01, 2003
          </Text>
        </Box>
      </VStack>

      <VStack spacing={8} maxW="800px" mx="auto" textAlign="left" align="start">
        {/* Header */}
        <MotionHeading
          as="h1"
          size="xl"
          mt={10}
          textAlign="center"
          fontWeight="bold"
          textShadow="0 2px 4px rgba(0, 0, 0, 0.2)"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          GraalOnline Era Rules
        </MotionHeading>
        {/* Rules Section */}
        <Box w="full">
          <Accordion allowMultiple>
            {rulesPagesEra.map((rule, index) => (
              <AccordionItem key={index} border="none" mb={2}>
                <AccordionButton
                  bg="gray.900"
                  _hover={{
                    bg: "gray.800",
                  }}
                  borderRadius="md"
                  p={4}
                  transition="all 0.3s ease"
                  _expanded={{ bg: "gray.800", borderBottomRadius: 0 }}
                  border="1px solid"
                  borderColor="gray.700"
                >
                  <Box flex="1" textAlign="left">
                    <Text fontSize="md" fontWeight="medium" color="gray.100">
                      {rule.title}
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel
                  bg="gray.900"
                  borderRadius="md"
                  mt={-1}
                  p={4}
                  borderTop="1px solid"
                  borderColor="gray.700"
                  borderBottom="1px solid"
                  borderBottomColor="gray.700"
                >
                  <Box fontSize="sm" color="gray.300">
                    {rule.content}
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
          <Text fontSize="xs" color="gray.400" mt={2}>
            Last Updated: October 21, 2015 - These rules and guidelines are subject to change and are to be checked regularly for revisions.
          </Text>
        </Box>       
      </VStack>
    </MotionBox>
  );
}