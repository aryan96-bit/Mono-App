import { View, Text, StyleSheet, Pressable } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { Image } from "expo-image";

const menuItems = [

  {
    title: "Account info",
    icon: <Ionicons name="person" size={28} color="#666" />,
  },

  {
    title: "Personal profile",
    icon: <MaterialIcons name="people-alt" size={28} color="#666" />,
  },

  {
    title: "Message center",
    icon: (
      <MaterialCommunityIcons
        name="email-variant"
        size={28}
        color="#666"
      />
    ),
  },

  {
    title: "Login and security",
    icon: <MaterialIcons name="security" size={28} color="#666" />,
  },

  {
    title: "Data and privacy",
    icon: <MaterialIcons name="lock" size={28} color="#666" />,
  },

];

export default function MenuList() {

  return (

    <View style={styles.container}>

      <Pressable style={styles.inviteRow}>

        <View style={styles.circle}>

          <Image
            source={require("@/assets/png/diamond.png")}
            style={{
              width: 33,
              height: 27,
            }}
          />

        </View>

        <Text style={styles.inviteText}>
          Invite Friends
        </Text>

      </Pressable>

      <View style={styles.divider} />

      {menuItems.map((item) => (

        <Pressable
          key={item.title}
          style={styles.menuItem}
        >

          {item.icon}

          <Text style={styles.menuText}>
            {item.title}
          </Text>

        </Pressable>

      ))}

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 32,
  },

  inviteRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },

  circle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#F0F6F5",

    justifyContent: "center",
    alignItems: "center",
  },

  inviteText: {
    marginLeft: 18,
    fontSize: 18,
    fontWeight: "500",
  },

  divider: {
    height: 1,
    backgroundColor: "#ECECEC",
    marginBottom: 12,
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
  },

  menuText: {
    marginLeft: 18,
    fontSize: 18,
    color: "#292B2D",
  },

});