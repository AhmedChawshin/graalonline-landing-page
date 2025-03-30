import { Box, HStack, Icon, Link, Text, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { InfoIcon } from '@chakra-ui/icons';

export default function UploadRules({ game }) {
  const { t } = useTranslation();

  const renderRules = () => {
    switch (game) {
      case 'era':
      case 'classic': // 'era' and 'classic' share the same rules
        return (
          <VStack align="start" spacing={3} fontSize="sm" color="gray.300">
            <Text>
              • <strong>{t('upload.rule1', { defaultValue: 'Only upload graphics you own the rights to.' })}</strong>
            </Text>
            <Text>
              • <strong>{t('upload.rule2', { defaultValue: 'Make sure uploads are free from errors such as:' })}</strong>{' '}
              {t('upload.rule2Detail', {
                defaultValue:
                  'Visible backgrounds, solid black/white (as those colors are transparent in the game), JPEG noise/visual artefacts, incorrect size/dimensions, incorrect frame positioning - check it against the templates! Heads and bodies must be solid and cannot be see-through.',
              })}
            </Text>
            <Text>
              • <strong>{t('upload.rule3', { defaultValue: 'Do not upload things that are not appropriate for the game’s audience such as:' })}</strong>{' '}
              {t('upload.rule3Detail', { defaultValue: 'Personal pictures/selfies, sexual content, drugs, vulgarity, guns.' })}
            </Text>
            <Text>
              • <strong>{t('upload.rule4', { defaultValue: 'Designs must meet game standards and the following things are not allowed:' })}</strong>{' '}
              {t('upload.rule4Detail', {
                defaultValue:
                  'Anything that gives players an unintended gameplay advantage, any player uploads that can act as a replacement for hats or accessories, head designs must at least have eyes if they lack other facial features, bodies must have two working arms and legs, rapidly flashing animations.',
              })}
            </Text>
          </VStack>
        );

      case 'olwest':
        return (
          <>
            <Text fontSize="sm" color="gray.300" mb={4}>
              {t('upload.rulesIntro', {
                defaultValue: 'If you’d like to know more about our upload rules, we thoroughly explain them ',
              })}
              <Link
                href="https://docs.google.com/document/d/1wqa3O6gsO_zY_BK04ETiiRkbOmHR-0dBm_ZHiSm54i8/edit"
                isExternal
                color="brand.500"
              >
                {t('upload.rulesLink', { defaultValue: 'in this form' })}
              </Link>
              {t('upload.rulesIntro2', { defaultValue: ' which contains visual guidelines your upload has to adhere to.' })}
            </Text>
            <Text fontSize="sm" color="gray.300" mb={4}>
              {t('upload.rulesEnsure', {
                defaultValue: 'Moreover, ensure that your upload complies with these rules, otherwise, you may find that your graphics are disapproved:',
              })}
            </Text>
            <VStack align="start" spacing={3} fontSize="sm" color="gray.300">
              <Text>
                • <strong>{t('upload.rule1', { defaultValue: 'You may not upload any graphics that are obscene, indecent, or controversial in nature.' })}</strong>{' '}
                {t('upload.rule1Detail', { defaultValue: 'Any such material will result in a loss of uploading privileges and may lead to further punishment.' })}
              </Text>
              <Text>
                • <strong>{t('upload.rule2', { defaultValue: 'Do not use pure black or white in your graphics.' })}</strong>{' '}
                {t('upload.rule2Detail', {
                  defaultValue:
                    'These two colors are used for transparency in-game and will not be visible on any images that are uploaded. They’re often represented as (0, 0, 0) and (255, 255, 255) in RGB format or #000000 and #FFFFFF in hex format. Even a single pixel throughout any of the frames or the entire graphic can corrupt the image so please ensure your graphic doesn’t contain them before submitting it.',
                })}
              </Text>
              <Text>
                • <strong>{t('upload.rule3', { defaultValue: 'Respect copyrights and only upload graphics that you have made yourself or that you are authorized to use.' })}</strong>{' '}
                {t('upload.rule3Detail', {
                  defaultValue:
                    'Any concepts that are taken from television shows, video games, or any other forms of media will not be accepted. Works that are inspired by such material are only accepted under some circumstances. It is therefore encouraged that you design original ideas for your graphics to avoid any issues that may arise.',
                })}
              </Text>
              <Text>
                • <strong>{t('upload.rule4', { defaultValue: 'Minor accessories are allowed, but no graphics should act in substitute of a hat.' })}</strong>{' '}
                {t('upload.rule4Detail', {
                  defaultValue:
                    'If accessories are added to files, such as heads, then they need to be integrated into the design itself. All masks that cover the entire face or hats that are just stuck on top of a head will be denied.',
                })}
              </Text>
              <Text>
                • <strong>{t('upload.rule5', { defaultValue: 'Ensure that all visual effects that are applied to your graphics are appropriate.' })}</strong>{' '}
                {t('upload.rule5Detail', {
                  defaultValue:
                    'All heads and bodies should make proper use of the dimensions provided. In this regard, small or invisible graphics are not allowed. No images are allowed to use rapid flashing or color-changing effects.',
                })}
              </Text>
              <Text>
                • <strong>{t('upload.rule6', { defaultValue: 'Heads which are not allowed:' })}</strong>{' '}
                {t('upload.rule6Detail', {
                  defaultValue: 'meme heads, flashing heads, real life heads, heads with glasses, heads with leaves on them (qualify as a hat), full/half masks on the head.',
                })}
              </Text>
              <Text>
                • <strong>{t('upload.rule7', { defaultValue: 'Bodies which are not allowed:' })}</strong>{' '}
                {t('upload.rule7Detail', {
                  defaultValue:
                    'Bodies without arms and/or legs such as blob bodies, ghost bodies, and mermaid bodies. Bodies that have different designs on each sprite/frame. Animated bodies. Bodies with weapons attached to them.',
                })}
              </Text>
            </VStack>
          </>
        );

      case 'zone':
        return (
          <VStack align="start" spacing={3} fontSize="sm" color="gray.300">
            <Text>
              • {t('upload.rule1', { defaultValue: 'Heads: please don’t upload heads which include hats (and no sunglasses and bandanas).' })}
            </Text>
            <Text>
              • {t('upload.rule2', { defaultValue: 'Only upload graphics which you have made yourself or got the ok from the maker of the graphic.' })}
            </Text>
            <Text>
              • {t('upload.rule3', { defaultValue: 'Visual Effects: No invisible, hard to see or half transparent images.' })}
            </Text>
            <Text>
              • {t('upload.rule4', { defaultValue: 'Approval: Final Approval at staff discretion.' })}
            </Text>
            <Text>
              • {t('upload.rule5', { defaultValue: 'Upload Limits: there is a limit on uploads per player, please make sure your files are ok and don’t resubmit the same file again.' })}
            </Text>
            <Text>
              • {t('upload.rule6', { defaultValue: 'Public Shields: these shield types can not be refunded.' })}
            </Text>
          </VStack>
        );

      default:
        return (
          <Text fontSize="sm" color="gray.300">
            {t('upload.noRules', { defaultValue: 'No specific rules defined for this game.' })}
          </Text>
        );
    }
  };

  return (
    <Box
      bg="rgba(255, 255, 255, 0.05)"
      backdropFilter="blur(10px)"
      p={6}
      borderRadius="lg"
      boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
      border="1px solid rgba(255, 255, 255, 0.1)"
      mt={6}
    >
      <HStack spacing={2} mb={4}>
        <Icon as={InfoIcon} color="brand.500" />
        <Text fontSize="lg" fontWeight="bold" color="white">
          {t('upload.rulesTitle', { defaultValue: 'Upload Rules' })}
        </Text>
      </HStack>
      {renderRules()}
    </Box>
  );
}