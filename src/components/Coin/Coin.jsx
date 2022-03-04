import React from 'react'
import { Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles"

const Coin = ({ marketCoin}) => {
  const { image, name, current_price, market_cap_rank, price_chance_percentage_24h, symbol, market_cap } = marketCoin
  return (
    <View style={styles.coinContainer}>
        <Image
          source={{ uri: image }}
          style={{
            height: 30,
            width: 30,
            marginRight: 10,
            alignSelf: "center",
          }}
        />
        <View>
          <Text style={styles.title}>{name}</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.rankContainer}>
              <Text style={styles.rank}>1</Text>
            </View>
            <Text style={styles.text}>BTC</Text>
            <AntDesign
              name="caretdown"
              size={12}
              color="white"
              style={{ alignSelf: "center", marginRight: 5 }}
            />
            <Text style={styles.text}>0.63%</Text>
          </View>
        </View>
        <View style={{ marginLeft: "auto" }}>
          <Text style={styles.title}>56265.09</Text>
          <Text style={styles.text}>MCap 1.076 T</Text>
        </View>
      </View>
  )
}

export default Coin