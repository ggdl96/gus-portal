import React, { useState } from "react";

import styles from "./styles";
import TitleWithAvatar from "../../title-with-avatar/title-with-avatar";
import { View, Text } from "react-native";
import { BannerTop } from "@/models/banner-top";

type Props = {
  data: BannerTop;
};

const FeaturedBannerContent = ({ data }: Props) => {
  const dataParsed = { ...data, customId: data.id };

  const [loading, setLoading] = useState(false);

  const handlePressWatch = (): void => {
    setLoading(true);
  };

  const redirectToPreviewAction = (scrollToBottom?: boolean) => () => {};

  const _handleOnPressCreator = function (id: string): void {};
  const displayPremiumContentBlock = true;

  const textMainButton = () => {
    let text = "Buy For";

    if (dataParsed?.isOwned) {
      text ="some text";
    }

    return text;
  };

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "flex-end",
        height: "100%",
        width: "100%",
        padding: 10,
      }}
    >
      <TitleWithAvatar
        title={dataParsed.owner.name}
        id={data.id}
        src={{ uri: dataParsed.owner.image }}
        style={styles.titleWithAvatar}
      />
      <Text
        numberOfLines={3}
        ellipsizeMode="tail"
        style={{
          fontWeight: "400",
          textAlign: "center",
          color: "#f7f6f2",
          textTransform: "uppercase",
        }}
      >
        {dataParsed.title}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></View>
      {displayPremiumContentBlock ? null : null}
    </View>
  );
};

export default FeaturedBannerContent;
