import React from 'react';
import {Image, ImageStyle, StyleSheet, View, ViewStyle} from 'react-native';

interface Props {
  imageUrl: string;
  externalStyle?: ViewStyle;
  externalImageStyle?: ImageStyle;
}

const UserAvatar: React.FC<Props> = props => {
  const {imageUrl, externalStyle, externalImageStyle} = props;
  return (
    <View style={[externalStyle]}>
      <Image
        source={{uri: imageUrl}}
        style={[styles.img, externalImageStyle]}
        resizeMode={'cover'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 40,
    width: 40,
    borderRadius: 25,
  },
});

export default UserAvatar;
