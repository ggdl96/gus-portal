import InfoContainer from '@/components/new-components/info-container/info-container';
import { Modal, Pressable, View } from 'react-native';
import BannerTitle from '@/components/new-components/banner-title';
import BannerDescription from '@/components/new-components/banner-description';
import { ExternalLink } from '@/components/ExternalLink';

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
      <Pressable
        className="w-full flex flex-row justify-center items-center flex-1"
        style={{
          backgroundColor: '#000000cc',
        }}
        onPress={toggleVisibility}>
        <View className="w-full md:w-1/2 flex">
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
                <ExternalLink href={githubProfile} children={githubProfile} />
              </View>
              <BannerDescription title="LinkedIn: " />
              <View className="pb-2">
                <ExternalLink href={linkedInProfile} children={linkedInProfile} />
              </View>
              <BannerDescription title="Email: " />
              <View className="pb-2">
                <BannerDescription title="gustavogdeluca96@gmail.com" />
              </View>
            </View>
          </InfoContainer>
        </View>
      </Pressable>
    </Modal>
  );
}
