import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Payment = () => {
  return (
    <View style={styles.container}>
      <Text>Payment</Text>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
