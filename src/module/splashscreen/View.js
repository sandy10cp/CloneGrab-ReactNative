import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('BottomTabs');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LEMONILO</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3e3e3',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 35,
  },
});
