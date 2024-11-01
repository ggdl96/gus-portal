import InfoContainer from '@/components/new-components/info-container/info-container';
import { Modal, Pressable, View } from 'react-native';
import BannerTitle from '@/components/new-components/banner-title';
import BannerDescription from '@/components/new-components/banner-description';
import { ExternalLink } from '@/components/ExternalLink';
import colors from '@/styles/colors';
import { Ionicons } from '@expo/vector-icons';

export default function ContactModal({
  visible,
  toggleVisibility,
}: {
  visible: boolean;
  toggleVisibility: () => void;
}) {
  const linkedInProfile = 'https://www.linkedin.com/in/gustavo-gabriel-de-luca-58aa0012b';
  const githubProfile = 'https://github.com/ggdl96';

  return (
    <Modal transparent visible={visible}>
      <View
        className="w-full flex flex-row justify-center items-center flex-1"
        style={{
          backgroundColor: '#000000cc',
        }}>
        <View className="w-full md:w-1/2 flex">
          <View className="flex flex-row justify-end w-full pb-2">
            <Pressable onPress={toggleVisibility}>
              <Ionicons name="close-outline" color={colors.contrastSecondary[800]} size={22} />
            </Pressable>
          </View>
          <InfoContainer title="Contact">
            <View className="flex flex-row w-full p-4 justify-center">
              <BannerTitle title={'Info'} />
            </View>
            <View className="w-full flex">
              <View className="pb-2">
                <BannerDescription title="Gustavo Gabriel De Luca, software developer" />
              </View>
              <View className="pb-2">
                <BannerDescription title="Github: " />
                <View className="flex flex-row">
                  <ExternalLink href={githubProfile} children={githubProfile} />
                </View>
              </View>
              <BannerDescription title="LinkedIn: " />
              <View className="pb-2">
                <View className="flex flex-row">
                  <ExternalLink href={linkedInProfile} children={linkedInProfile} />
                </View>
              </View>
              <BannerDescription title="Email: " />
              <View className="pb-2">
                <BannerDescription title="gustavogdeluca96@gmail.com" />
              </View>
            </View>
          </InfoContainer>
        </View>
      </View>
    </Modal>
  );
}
