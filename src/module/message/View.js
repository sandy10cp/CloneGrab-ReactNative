import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Message = () => {
  return (
    <View style={styles.container}>
      <Text>Message</Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
