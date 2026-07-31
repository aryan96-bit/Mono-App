import { View, StyleSheet, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import Background from "@/assets/svg/profile_bg.svg";
import Circles from "@/assets/svg/profile_bg_design.svg";
import { router } from "expo-router";

export default function ProfileHeader() {
  return (
    <View style={styles.header}>
      <Background
        width="100%"
        height="100%"
        style={StyleSheet.absoluteFillObject}
      />

      <Circles
        style={styles.circles}
      />

      <View style={styles.topRow}>

        <Pressable onPress={() => router.back()}>
          <Ionicons
            name="chevron-back"
            size={28}
            color="white"
          />
        </Pressable>

        <Text style={styles.title}>
          Profile
        </Text>

        <Pressable style={styles.bellButton}>
          <Ionicons
            name="notifications-outline"
            size={22}
            color="white"
          />
        </Pressable>

      </View>

      <View style={styles.avatarContainer}>
        <Image
          source={require("@/assets/png/profile_image.png")}
          style={styles.avatar}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  header: {
    height: 287,
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
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },

  bellButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.08)",

    justifyContent: "center",
    alignItems: "center",
  },

  avatarContainer: {
    position: "absolute",
    bottom: -60,
    left: 0,
    right: 0,

    alignItems: "center",
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

});