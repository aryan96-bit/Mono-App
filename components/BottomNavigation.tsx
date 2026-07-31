import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function BottomNavigation() {

  return (

    <View style={styles.container}>

      <Ionicons
        name="home-outline"
        size={30}
        color="#B8B8B8"
      />

      <Ionicons
        name="stats-chart-outline"
        size={30}
        color="#B8B8B8"
      />

      <Ionicons
        name="wallet-outline"
        size={30}
        color="#B8B8B8"
      />

      <Ionicons
        name="person"
        size={30}
        color="#438883"
      />

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    height: 80,

    borderTopWidth: 1,
    borderTopColor: "#ECECEC",

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

  },

});