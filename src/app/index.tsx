import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function PhoneInputScreen() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Image Background with Back Button */}
      <ImageBackground
        source={require("@/assets/images/header-bg.png")}
        style={styles.headerBanner}
        resizeMode="cover"
      >
        {/* <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity> */}
      </ImageBackground>

      {/* Raised Content Box */}
      <View style={styles.content}>
        <Text style={styles.title}>Welcome To BOB Finance</Text>

        <Text style={styles.subtitle}>
          Please enter your mobile number to login into your account or start
          your registration process
        </Text>

        <View style={styles.phoneInputContainer}>
          <View style={styles.countryCode}>
            <Text style={styles.flag}>🇱🇧</Text>
            <Text style={styles.countryCodeText}>+961</Text>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Enter your phone"
            placeholderTextColor="#666"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <TouchableOpacity style={styles.helpLink}>
          <Text style={styles.helpText}>
            Having trouble getting in?{" "}
            <Text style={styles.goldText}>Get Help</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => router.push("/otp")}
        >
          <Ionicons name="chevron-forward" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212" },

  headerBanner: {
    width: "100%",
    height: 220, // Reduced height slightly to accommodate negative margin
    backgroundColor: "#000000",
    justifyContent: "flex-start",
  },

  backButton: {
    marginTop: 45,
    marginLeft: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
  },

  content: {
    flex: 1,
    padding: 24,
    justifyContent: "flex-start", // Shifts items toward top instead of dead center
    marginTop: -30, // Pulls the welcome content up over the header image
    backgroundColor: "#121212",
    borderTopLeftRadius: 24, // Optional rounded top sheet effect
    borderTopRightRadius: 24,
  },

  title: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    color: "#888",
    fontSize: 13,
    textAlign: "center",
    marginBottom: 28,
  },

  phoneInputContainer: {
    flexDirection: "row",
    backgroundColor: "#1E1E1E",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#333",
    marginBottom: 20,
  },

  countryCode: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRightWidth: 1,
    borderColor: "#333",
  },

  flag: { marginRight: 5 },

  countryCodeText: { color: "#FFF" },

  input: { flex: 1, padding: 12, color: "#FFF" },

  helpLink: { alignItems: "center", marginBottom: 30 },

  helpText: { color: "#888", fontSize: 13 },

  goldText: { color: "#FFCC00", textDecorationLine: "underline" },

  nextButton: {
    backgroundColor: "#FFCC00",
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
});
