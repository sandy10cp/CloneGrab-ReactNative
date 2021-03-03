import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

// Config / Component
import Color from '../../config/Color';

// Library
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('screen').width;

const DiscountItem = (props) => {
  const {title, image, until} = props;
  return (
    <View style={styles.itemDiscount}>
      <View style={styles.contentImageDiscount}>
        <Image
          source={image}
          style={styles.imageDiscount}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.contentTitleDiscount}>
        <Text style={styles.textDiscount}>{title}</Text>
      </View>
      <View style={styles.contentUntil}>
        <MaterialIcons
          name="calendar-blank"
          color={Color.main.gray05}
          size={15}
        />
        <Text style={styles.textUntil}>Until {until}</Text>
      </View>
    </View>
  );
};

export default DiscountItem;

const styles = StyleSheet.create({
  itemDiscount: {
    width: width / 2 - 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 7,
    borderRadius: 5,
  },
  contentImageDiscount: {
    width: '100%',
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageDiscount: {
    width: '100%',
    height: 140,
    borderRadius: 5,
  },
  contentTitleDiscount: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 5,
    width: '100%',
  },
  textDiscount: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  contentUntil: {
    paddingHorizontal: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 5,
    flexDirection: 'row',
  },
  textUntil: {
    marginLeft: 5,
    fontSize: 12,
    color: Color.main.gray05,
  },
});
