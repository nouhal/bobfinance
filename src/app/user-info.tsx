import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type DropdownProps = {
  label: string;
  value: string;
  options: string[];
  onSelect: (value: string) => void;
};

const CustomInput = ({
  label,
  value,
  onChangeText,
}: {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}) => (
  <View style={styles.inputGroup}>
    <Text style={styles.label}>{label}</Text>

    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="#666"
    />
  </View>
);

const CustomDropdown = ({ label, value, options, onSelect }: DropdownProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>

      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setVisible(true)}
      >
        <Text style={styles.dropdownText}>{value}</Text>

        <Ionicons name="chevron-down" size={16} color="#888" />
      </TouchableOpacity>

      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setVisible(false)}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{label}</Text>

            {options.map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.option}
                onPress={() => {
                  onSelect(option);
                  setVisible(false);
                }}
              >
                <Text
                  style={[
                    styles.optionText,
                    option === value && styles.selectedOption,
                  ]}
                >
                  {option}
                </Text>

                {option === value && (
                  <Ionicons name="checkmark" size={18} color="#FFCC00" />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default function UserInfoScreen() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");

  const [idNumber, setIdNumber] = useState("");

  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");

  const [spouseName, setSpouseName] = useState("");
  const [registryNumber, setRegistryNumber] = useState("");
  const [locality, setLocality] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [district, setDistrict] = useState("");
  const [bloodType, setBloodType] = useState("");

  const handleContinue = () => {
    // Later we can send this information to your backend/API.
    console.log({
      firstName,
      lastName,
      fatherName,
      motherName,
      placeOfBirth,
      idNumber,
      gender,
      maritalStatus,
      spouseName,
      registryNumber,
      locality,
      governorate,
      district,
      bloodType,
    });

    // Example:
    // router.push("/home");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>

        <View style={styles.progressBar}>
          <View style={[styles.progress, { width: "100%" }]} />
        </View>

        <Text style={styles.stepText}>2/2</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Top information */}
        <View style={styles.topInfo}>
          <Ionicons name="information-circle" size={40} color="#FFCC00" />

          <Text style={styles.title}>Verify Your Information</Text>

          <Text style={styles.subtitle}>
            Take a moment to verify your information and update any necessary
            fields
          </Text>
        </View>

        {/* Front Of ID */}
        <Text style={styles.sectionHeader}>Front Of ID</Text>

        <CustomInput
          label="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />

        <CustomInput
          label="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />

        <CustomInput
          label="Father's Name"
          value={fatherName}
          onChangeText={setFatherName}
        />

        <CustomInput
          label="Mother's First and Last Name"
          value={motherName}
          onChangeText={setMotherName}
        />

        <CustomDropdown
          label="Place of Birth"
          value={placeOfBirth}
          options={["Lebanon", "Beirut", "Tripoli", "Sidon", "Zahle", "Baabda"]}
          onSelect={setPlaceOfBirth}
        />

        {/* ID Details */}
        <Text style={styles.sectionHeader}>Verify Your ID Details</Text>

        <CustomInput
          label="ID Number"
          value={idNumber}
          onChangeText={setIdNumber}
        />

        {/* Back Of ID */}
        <Text style={styles.sectionHeader}>Back Of ID</Text>

        <CustomDropdown
          label="Gender"
          value={gender}
          options={["Female", "Male"]}
          onSelect={setGender}
        />

        <CustomDropdown
          label="Marital Status"
          value={maritalStatus}
          options={["Single", "Married", "Divorced", "Widowed"]}
          onSelect={setMaritalStatus}
        />

        <CustomInput
          label="Spouse First and Last Name"
          value={spouseName}
          onChangeText={setSpouseName}
        />

        <CustomInput
          label="Registry Number"
          value={registryNumber}
          onChangeText={setRegistryNumber}
        />

        <CustomInput
          label="Locality / Village"
          value={locality}
          onChangeText={setLocality}
        />

        <CustomInput
          label="Governorate"
          value={governorate}
          onChangeText={setGovernorate}
        />

        <CustomInput
          label="District"
          value={district}
          onChangeText={setDistrict}
        />

        <CustomInput
          label="Blood Type"
          value={bloodType}
          onChangeText={setBloodType}
        />

        {/* Continue */}
        <TouchableOpacity style={styles.submitButton} onPress={handleContinue}>
          <Text style={styles.submitButtonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 10,
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
    borderRadius: 2,
  },

  stepText: {
    color: "#888",
    fontSize: 12,
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },

  topInfo: {
    alignItems: "center",
    marginBottom: 20,
  },

  title: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    textAlign: "center",
  },

  subtitle: {
    color: "#888",
    fontSize: 12,
    textAlign: "center",
    lineHeight: 18,
  },

  sectionHeader: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
  },

  inputGroup: {
    marginBottom: 12,
  },

  label: {
    color: "#888",
    fontSize: 11,
    marginBottom: 4,
  },

  input: {
    backgroundColor: "#1E1E1E",
    borderRadius: 6,
    color: "#FFF",
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 13,
    borderWidth: 1,
    borderColor: "#2A2A2A",
  },

  dropdown: {
    backgroundColor: "#1E1E1E",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2A2A2A",
  },

  dropdownText: {
    color: "#FFF",
    fontSize: 13,
  },

  submitButton: {
    backgroundColor: "#FFCC00",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },

  submitButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 15,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    paddingHorizontal: 30,
  },

  modalContainer: {
    backgroundColor: "#1E1E1E",
    borderRadius: 12,
    padding: 20,
  },

  modalTitle: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 15,
  },

  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#2A2A2A",
  },

  optionText: {
    color: "#FFF",
    fontSize: 14,
  },

  selectedOption: {
    color: "#FFCC00",
    fontWeight: "bold",
  },
});
