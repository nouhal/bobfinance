import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function OTPVerificationScreen() {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleNext = () => {
    // No OTP validation required for the assessment
    router.push("/user-info");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>

        <View style={styles.progressBar}>
          <View style={[styles.progress, { width: "50%" }]} />
        </View>

        <Text style={styles.stepText}>1/2</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons name="checkmark-circle" size={48} color="#FFCC00" />
        </View>

        <Text style={styles.title}>Enter Verification Code</Text>

        <Text style={styles.subtitle}>
          We've sent a one-time password (OTP) to your mobile number{" "}
          <Text style={styles.boldText}>+961 76 819 729</Text>. Enter it below
          to verify your account.
        </Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={[styles.otpBox, digit ? styles.otpBoxFilled : null]}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(value) => handleOtpChange(value, index)}
            />
          ))}
        </View>

        <Text style={styles.timerText}>
          You can resend the code in <Text style={styles.whiteText}>00:56</Text>
        </Text>

        <TouchableOpacity>
          <Text style={styles.resendText}>Resend Code</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Ionicons name="chevron-forward" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },

  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: "#333",
    marginHorizontal: 15,
    borderRadius: 2,
  },

  progress: {
    height: "100%",
    backgroundColor: "#FFCC00",
  },

  stepText: {
    color: "#888",
    fontSize: 12,
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  iconContainer: {
    marginBottom: 20,
  },

  title: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    color: "#888",
    fontSize: 13,
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 10,
  },

  boldText: {
    color: "#FFF",
    fontWeight: "bold",
  },

  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 30,
  },

  otpBox: {
    width: 45,
    height: 50,
    borderRadius: 8,
    backgroundColor: "#1E1E1E",
    color: "#FFF",
    textAlign: "center",
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#333",
  },

  otpBoxFilled: {
    borderColor: "#FFCC00",
  },

  timerText: {
    color: "#888",
    fontSize: 12,
    marginBottom: 8,
  },

  whiteText: {
    color: "#FFF",
  },

  resendText: {
    color: "#FFCC00",
    fontSize: 12,
    textDecorationLine: "underline",
    marginBottom: 40,
  },

  nextButton: {
    backgroundColor: "#FFCC00",
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
