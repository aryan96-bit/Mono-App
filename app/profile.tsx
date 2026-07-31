import { View, Text, StyleSheet, Pressable} from "react-native"; 
import { Stack } from "expo-router";

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Background from "@/assets/svg/profile_bg.svg"; 
import Circles from "@/assets/svg/profile_bg_design.svg"

import { Image } from "expo-image";
import { router } from "expo-router";

export default function Profile() {
    return(
        <>
            <Stack.Screen
            options= {{ 
                headerShown: false, 
            }}
            />

            <View style={styles.container}>
                
                <View style={styles.header}>
                    
                    <Background/>

                    <Circles
                        style={styles.circles}
                    />
                    
                    <View style={styles.topRow}>

                        <Pressable
                            onPress={() => router.back()}
                        >
                            <Ionicons
                                name="chevron-back"
                                size={28}
                                color="white"
                            />
                        </Pressable>
 
                        <View style={styles.topRowCenter}>
                            <Text style={styles.headerTitle}>
                                Profile</Text>
                        </View>

                        <View style={{backgroundColor: "#FFFFFF0F"}}>
                            <Pressable>
                            <Ionicons
                                name="notifications-outline"
                                size={24}
                                color="white"
                            />
                        </Pressable>
                        </View>

                    </View>

                <View style={styles.avatarContainer}> 
                    <Image
                        source={require("@/assets/png/profile_image.png")}
                        style={styles.avatar}
                        contentFit="cover"
                    />
                </View>
                </View>

                <View style={styles.profile}>
                    <Text style={styles.name}>
                       Enjelin Morgeana
                    </Text>

                    <Text style={styles.username}>
                        @enjelin_morgeana
                    </Text>
                </View>

                <View style={styles.menu}>
                    
                   <Pressable style={styles.menuItem}>
                        <Ionicons
                        name="person"
                        size={24}
                        color="#666666"
                        />

                        <Text style={styles.menuText}>
                        Account info
                        </Text>
                    </Pressable>

                    <Pressable style={styles.menuItem}>
                        <MaterialIcons
                        name="people-alt"
                        size={24}
                        color="#666666"
                        />

                        <Text style={styles.menuText}>
                        Personal profile
                        </Text>
                    </Pressable>

                    <Pressable style={styles.menuItem}>
                        <MaterialCommunityIcons
                        name="email-variant"
                        size={24}
                        color="#666666"
                        />

                        <Text style={styles.menuText}>
                        Message center
                        </Text>
                    </Pressable>

                    <Pressable style={styles.menuItem}>
                        <MaterialIcons
                        name="security"
                        size={24}
                        color="#666666"
                        />

                        <Text style={styles.menuText}>
                        Login and security
                        </Text>
                    </Pressable>

                    <Pressable style={styles.menuItem}>
                        <MaterialIcons
                        name="lock"
                        size={24}
                        color="#666666"
                        />

                        <Text style={styles.menuText}>
                        Data and privacy
                        </Text>
                    </Pressable>

                </View>

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
                        color="#408782"
                    />
                </View>

            </View>
        </>
    );
}

const styles =  StyleSheet.create({

    container: {
        flex: 1, 
    },

    header: {
        height: 287, 
        width: 414,
    },

    circles: {
        position: "absolute",
        top: 0,
        left: 0,
    },

    topRow: {
        position: "absolute",
        top: 65,
        left: 24,
        right: 24,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    topRowLeft: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "flex-start",
    },

    topRowCenter: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
    },

    topRowRight: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "flex-end",
    },

    headerTitle: {
        color: "white",
        fontSize: 20,
        fontWeight: "600",
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

    profile: {
        marginTop: 70,
        alignItems: "center",
        paddingHorizontal: 24,
    },

    name: {
        fontSize: 22,
        fontWeight: "700",
    },

    username: {
        marginTop: 5,
        color: "#438883",
        fontSize: 14,
        fontWeight: 600,
    },

    menu: {
        flex: 1,
        marginTop: 30,
        paddingHorizontal: 24,
        gap: 18,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
    },

    menuItem: {
        flexDirection: "row",
        alignItems: "center",
    },

    menuText: {
        flex: 1,
        marginLeft: 16,
        fontSize: 17,
    },

    bottomNav: {
        height: 80,

        borderTopWidth: 1,
        borderTopColor: "#eee",

        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },

})