import { Pressable, Text, View, StyleSheet} from "react-native";
import { Image } from "expo-image";
import Background from "@/assets/svg/bg_onboarding.svg";
import { Button } from "@/components/buttons";
import { LinearGradient } from "expo-linear-gradient";

const styles = StyleSheet.create({
  logo: {
    position: "absolute",
    top: 100,
    left: 0,
    right: 0,
    bottom: 0
  }
})

export default function Index() {
  return (
    <View>
      <View>
           <Background />
          <Image
              source={require("@/assets/svg/image_man.png")}
              style={styles.logo}
          />

      </View>
      <View>
        <Button title="Get Started" type="primary" > </Button>
      </View>
        
    </View>
  );
}