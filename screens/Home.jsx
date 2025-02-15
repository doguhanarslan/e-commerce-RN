import { StyleSheet, Text, View,TouchableOpacity,ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { Ionicons,Fontisto } from "@expo/vector-icons";
import { Welcome } from "../components";
import Carousel from "../components/home/Carousel";
import Heading from "../components/home/Heading";
import ProductRow from "../components/products/ProductRow";
import { useNavigation } from '@react-navigation/native';
const Home = (navigation) => {
  navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="list-outline" size={28} />
          <Text style={styles.locationText}>Bershka</Text>
          <View style={{alignItems:'flex-end'}}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('ShoppingList')}>
              <Fontisto name="shopping-bag" size={28}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Carousel />
        <Heading />
        <ProductRow/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
