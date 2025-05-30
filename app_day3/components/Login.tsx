import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginAlert = () => {
    if (email === "" || password === "") {
      alert("Vui lòng nhập đầy đủ thông tin");
    } else {
      alert("Đăng nhập thành công");
    }
  };

  const handleCancel = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <View className="w-full">
      <Text className="text-xl font-bold pb-2">LOGIN</Text>
      <Text className="pb-2">Email</Text>
      <TextInput
        placeholder="Enter your email"
        className="border p-2"
        value={email}
        onChangeText={setEmail}
      />
      <Text className="pb-2 pt-3">Password</Text>
      <TextInput
        placeholder="Enter your password"
        className="border p-2"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={LoginAlert}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonCancel}
          onPress={() => handleCancel()}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    gap: 10,
  },
  button: {
    backgroundColor: "#1E90FF",
    paddingVertical: 8,
    paddingHorizontal: 2,
    borderRadius: 8,
    width: 80,
    marginTop: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonCancel: {
    backgroundColor: "#FF0000",
    paddingVertical: 8,
    paddingHorizontal: 2,
    borderRadius: 8,
    width: 80,
    marginTop: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default Login;
