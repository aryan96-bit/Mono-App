import { View, Text, StyleSheet } from "react-native";

export default function ProfileInfo() {
  return (

    <View style={styles.container}>

      <Text style={styles.name}>
        Enjelin Morgeana
      </Text>

      <Text style={styles.username}>
        @enjelin_morgeana
      </Text>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    marginTop: 70,
    alignItems: "center",
  },

  name: {
    fontSize: 34,
    fontWeight: "700",
    color: "#292B2D",
  },

  username: {
    marginTop: 6,
    fontSize: 16,
    color: "#438883",
    fontWeight: "600",
  },

});