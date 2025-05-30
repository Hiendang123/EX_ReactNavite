import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const SumNumber = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState<number | null>(null);

  const handleSum = () => {
    setSum(number1 + number2);
  };
  return (
    <View className="w-full">
      <TextInput
        placeholder="Nhập số A"
        keyboardType="numeric"
        className="border border-black w-full h-12 px-4 mb-2"
        value={number1.toString()}
        onChangeText={(text) => setNumber1(Number(text))}
      />
      <TextInput
        placeholder="Nhập số B"
        keyboardType="numeric"
        className="border border-black w-full h-12 px-4 mb-2"
        value={number2.toString()}
        onChangeText={(text) => setNumber2(Number(text))}
      />

      <Button title="Tính tổng" onPress={handleSum} />

      {sum !== null && (
        <Text className="text-blue-500 text-lg mt-4">Tổng: {sum}</Text>
      )}
    </View>
  );
};

export default SumNumber;
