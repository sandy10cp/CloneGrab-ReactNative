import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// Config / Component
import Color from '../../config/Color';
import MenuItem from '../../components/MenuItem';
import DiscountItem from '../../components/DiscountItem';

// Library
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// Styles
import styles from './styles';

const dataDiscount = [
  {
    id: 1,
    image: require('../../assets/image3.jpg'),
    title: 'Saatnya coba menu baru & bebsain lidahmu',
    until: '04 Apr',
  },
  {
    id: 2,
    image: require('../../assets/image4.jpg'),
    title: 'Berburu menu idole, yuk',
    until: '14 Mar',
  },
  {
    id: 3,
    image: require('../../assets/image1.jpg'),
    title: 'Belanja di supermarket diskon s.d 40%',
    until: '31 Mar',
  },
  {
    id: 4,
    image: require('../../assets/image5.jpg'),
    title: 'Pakai kartu debit/kredit diskon s.d 50rb',
    until: '30 Jun',
  },
  {
    id: 5,
    image: require('../../assets/image2.jpeg'),
    title: 'Panggil GrabAssistant, ada diskon',
    until: '31 Mar',
  },
  {
    id: 6,
    image: require('../../assets/image6.jpg'),
    title: 'Kirim paket Sameday cepat 6 jam murah 8rb',
    until: '30 Mar',
  },
];

const Dashboard = () => {
  const [payload, setPayload] = useState({});

  const onChangeText = (val, type) => {
    const newPayload = {...payload};
    newPayload[type] = val;
    setPayload(newPayload);
  };

  const onPressItem = (val) => {
    alert(`Press ${val}`);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.inputIcon}>
            <Ionicons name="md-scan-sharp" color="gray" size={26} />
          </View>
          <View style={styles.contentInput}>
            <TextInput
              placeholder="Offers, food, and place to go"
              style={styles.inputSearch}
              onChangeText={text => onChangeText(text, 'search')}
              value={payload?.search}
            />
          </View>
        </View>
        <View style={styles.contentOvoPoint}>
          <View style={[styles.ovoPoint, {borderRightColor: Color.main.gray05, borderRightWidth: 1}]}>
            <View style={styles.circle}>
              <Text style={styles.textOvo}>OVO</Text>
            </View>
            <View style={styles.contentRp}>
              <Text style={styles.textRp}>RP</Text>
            </View>
            <Text style={styles.textAmount}>200.000</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              color={Color.main.gray05}
              size={25}
            />
          </View>
          <View style={styles.ovoPoint}>
            <View style={styles.circle}>
              <Image
                source={require('../../assets/crown.png')}
                style={{width: 15, height: 15}}
              />
            </View>
            <Text style={styles.textAmount}>12,000 Points</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              color={Color.main.gray05}
              size={25}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.contentWallet} onPress={()=> alert('Top Up')}>
          <View style={styles.wallet}>
            <Ionicons name="wallet-outline" color="gray" size={26} />
            <View style={styles.badgePlus}>
              <Text style={styles.textPlus}>+</Text>
            </View>
            <Text style={styles.textTopup}>Top Up</Text>
            <View style={styles.dot} />
            <Text>Wallet</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.contentMenu}>
          <MenuItem
            title="Food"
            image={require('../../assets/food.png')}
            onPress={(val) => onPressItem(val)}
          />
          <MenuItem
            title="Mart"
            image={require('../../assets/mart.png')}
            onPress={(val) => onPressItem(val)}
          />
          <MenuItem
            title="Express"
            image={require('../../assets/express.png')}
            onPress={(val) => onPressItem(val)}
          />
          <MenuItem
            title="Packages"
            image={require('../../assets/packages.png')}
            onPress={(val) => onPressItem(val)}
          />
          <MenuItem
            title="Car"
            image={require('../../assets/car.png')}
            onPress={(val) => onPressItem(val)}
          />
          <MenuItem
            title="Bike"
            image={require('../../assets/bike.png')}
            onPress={(val) => onPressItem(val)}
          />
          <MenuItem
            title="Insurance"
            image={require('../../assets/insurance.png')}
            onPress={(val) => onPressItem(val)}
          />
          <MenuItem
            title="More"
            image={require('../../assets/more-options.png')}
            onPress={(val) => onPressItem(val)}
          />
        </View>
        <View style={styles.contentDiscount}>
          {dataDiscount.map((item) => {
            return (
              <DiscountItem
                key={item.id}
                title={item.title}
                image={item.image}
                until={item.until}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;
