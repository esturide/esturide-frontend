import React from 'react';
import {
  BannerAd,
  BannerAdSize,
  TestIds
} from 'react-native-google-mobile-ads';
import { View, StyleSheet } from 'react-native';

const BottomAd = () => {
  return (
    <View style={styles.adBanner}>
      <BannerAd
        unitId={TestIds.BANNER}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  adBanner: {
    position: 'absolute',
    bottom: 0
  }
});

export default BottomAd;
