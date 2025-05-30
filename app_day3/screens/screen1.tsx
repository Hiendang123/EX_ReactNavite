import { RootStackParamList } from "@/types/NavigationEx";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

type Screen1Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Screen1">;
};

const Screen1 = ({ navigation }: Screen1Props) => {
  const [name, setName] = useState<string>("");

  const handleSubmit = () => {
    if (name.trim()) {
      navigation.navigate("Screen2", { name });
    } else {
      alert("Please enter a valid name");
    }
  };

  return (
    <View className="flex-1 items-center justify-center p-4 w-full">
      <Text className="text-2xl">Enter your name</Text>
      <TextInput
        className="border border-gray-300 p-2 mt-4 mb-8 w-full rounded"
        placeholder="Your Name"
        onChangeText={setName}
        value={name}
      />
      <Text className="mb-1"></Text>
      <Button title="Next" onPress={handleSubmit} />
    </View>
  );
};

export default Screen1;
