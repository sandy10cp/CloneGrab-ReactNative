import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Color from '../../config/Color';

const width = Dimensions.get('screen').width;

const MenuItem = (props) => {
  const {title, image, onPress} = props;
  return (
    <TouchableOpacity style={styles.menuItem} onPress={() => onPress(title)}>
      <View style={styles.contentImage}>
        <Image source={image} style={{width: 40, height: 40}} />
      </View>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  menuItem: {
    width: width / 4 - 14,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  contentImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.main.green30,
    marginBottom: 5,
  },
});
