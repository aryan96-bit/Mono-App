import { View, Text, StyleSheet, Pressable } from "react-native";
import { Stack, router } from "expo-router";
import { Image } from "expo-image";

import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import Background from "@/assets/svg/profile_bg.svg";
import Circles from "@/assets/svg/profile_bg_design.svg";

const menuItems = [
  {
    title: "Account info",
    icon: <Ionicons name="person" size={24} color="#666666" />,
  },
  {
    title: "Personal profile",
    icon: <MaterialIcons name="people-alt" size={24} color="#666666" />,
  },
  {
    title: "Message center",
    icon: (
      <MaterialCommunityIcons
        name="email-variant"
        size={24}
        color="#666666"
      />
    ),
  },
  {
    title: "Login and security",
    icon: <MaterialIcons name="security" size={24} color="#666666" />,
  },
  {
    title: "Data and privacy",
    icon: <MaterialIcons name="lock" size={24} color="#666666" />,
  },
];

export default function Profile() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <Background width="100%" height="100%" />

          <Circles style={styles.circles} />

          {/* Top Row */}
          <View style={styles.topRow}>
            <Pressable onPress={() => router.back()}>
              <Ionicons
                name="chevron-back"
                size={28}
                color="white"
              />
            </Pressable>

            <Text style={styles.headerTitle}>Profile</Text>

            <Pressable style={styles.notificationButton}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color="white"
              />
            </Pressable>
          </View>

          {/* Avatar */}
          <View style={styles.avatarContainer}>
            <Image
              source={require("@/assets/png/profile_image.png")}
              style={styles.avatar}
              contentFit="cover"
            />
          </View>
        </View>

        {/* Name */}
        <View style={styles.profile}>
          <Text style={styles.name}>
            Enjelin Morgeana
          </Text>

          <Text style={styles.username}>
            @enjelin_morgeana
          </Text>
        </View>

        {/* Menu */}
        <View style={styles.menu}>
          {/* Invite Friends */}
          <Pressable style={styles.inviteContainer}>
            <View style={styles.diamondCircle}>
              <Image
                source={require("@/assets/png/diamond_color.png")}
                style={styles.diamond}
              />
            </View>

            <Text style={styles.inviteText}>
              Invite Friends
            </Text>
          </Pressable>

          <View style={styles.divider} />

          {/* Menu Items */}
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

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <Ionicons
            name="home-outline"
            size={28}
            color="#AAAAAA"
          />

          <Ionicons
            name="cellular-outline"
            size={28}
            color="#AAAAAA"
          />

          <Ionicons
            name="wallet-outline"
            size={28}
            color="#AAAAAA"
          />

          <Ionicons
            name="person"
            size={28}
            color="#438883"
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    height: 287,
    width: "100%",
  },

  circles: {
    position: "absolute",
    top: 0,
    left: 0,
  },

  topRow: {
    position: "absolute",
    top: 60,
    left: 24,
    right: 24,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "600",
  },

  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.08)",

    justifyContent: "center",
    alignItems: "center",
  },

  avatarContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -60,

    alignItems: "center",
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  profile: {
    marginTop: 70,
    alignItems: "center",
  },

  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222222",
  },

  username: {
    marginTop: 6,
    fontSize: 15,
    color: "#438883",
    fontWeight: "600",
  },

  menu: {
    flex: 1,
    marginTop: 35,
    paddingHorizontal: 24,
  },

  inviteContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  diamondCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,

    backgroundColor: "#F0F6F5",

    justifyContent: "center",
    alignItems: "center",
  },

  diamond: {
    width: 33,
    height: 27,
  },

  inviteText: {
    marginLeft: 18,
    fontSize: 18,
    fontWeight: "500",
    color: "#000",
  },

  divider: {
    height: 1,
    backgroundColor: "#EEEEEE",
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
    color: "#222222",
  },

  bottomNav: {
    height: 80,

    borderTopWidth: 1,
    borderTopColor: "#EEEEEE",

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});