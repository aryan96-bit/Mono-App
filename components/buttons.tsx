import { LinearGradient } from "expo-linear-gradient";
import { Pressable, PressableProps, StyleSheet, Text, ViewStyle } from "react-native";

type Props = PressableProps & {
    title: string
    type: 'primary' | 'secondary' | 'outline' | 'danger' | 'disabled'
}

const buttonStyles: Record<Props['type'], ViewStyle> = {
    primary: {},
    secondary: {
        backgroundColor: 'green',
    },
    outline: {
        borderWidth: 1,
        borderColor: 'blue',
    },
    danger: {
        backgroundColor: 'red',
    },
    disabled: {
        backgroundColor: 'gray',
    },
} as const

const styles = StyleSheet.create({
  common: {
  width: "100%",
  height: 64,
  borderRadius: 40,
  borderWidth: 1,
  paddingHorizontal: 20,
  paddingVertical: 10,
  justifyContent: "center",
  alignItems: "center",
},

  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
})

export function Button({ title, type = "primary", ...props }: Props) {
    if (type === "primary") {
        return (
            <Pressable {...props}>
                <LinearGradient
                    colors={["#69AEA9", "#3F8782"]}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={styles.common}
                >
                    <Text style={styles.text}>{title}</Text>
                </LinearGradient>
            </Pressable>
        );
    }

    return (
        <Pressable
            style={[styles.common, buttonStyles[type]]}
            {...props}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}