// @flow

import React, { useCallback } from "react";
import { Trans } from "react-i18next";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import getWindowDimensions from "../../../logic/getWindowDimensions";
import sell from "../../../images/banners/vote.png";
import LText from "../../LText";
import colors from "../../../colors";

const Vote = () => {
  const slideWidth = getWindowDimensions().width - 32;

  const onClick = useCallback(
    () => {}, // TODO Add implementation when Sell reaches LLM
    [],
  );

  return (
    <TouchableOpacity onPress={onClick}>
      <View style={[styles.wrapper, { width: slideWidth }]}>
        <Image
          style={styles.illustration}
          source={sell}
          width={120}
          height={100}
        />
        <View>
          <LText semiBold secondary style={styles.label}>
            <Trans i18nKey={`carousel.banners.vote.title`} />
          </LText>
          <LText primary style={styles.description}>
            <Trans i18nKey={`carousel.banners.vote.description`} />
          </LText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  illustration: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  wrapper: {
    width: "100%",
    height: "100%",
    padding: 16,
    paddingBottom: 0,
    position: "relative",
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    marginBottom: 16,
  },
  label: {
    textTransform: "uppercase",
    letterSpacing: 1,
    opacity: 0.5,
    color: colors.darkBlue,
    fontSize: 10,
    lineHeight: 15,
    marginRight: 100,
  },
  description: {
    color: colors.darkBlue,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 8,
    marginBottom: 16,
    marginRight: 100,
  },
  layer: {
    position: "absolute",
  },
});

export default Vote;
