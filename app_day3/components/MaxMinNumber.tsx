import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const MaxMinNumber = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [sum, setSum] = useState<number | null>(null);

  const handlMax = () => {
    setSum(Math.max(number1, number2, number3));
  };

  const handlMin = () => {
    setSum(Math.min(number1, number2, number3));
  };

  return (
    <View className="w-full ">
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

      <TextInput
        placeholder="Nhập số C"
        keyboardType="numeric"
        className="border border-black w-full h-12 px-4 mb-2"
        value={number3.toString()}
        onChangeText={(text) => setNumber3(Number(text))}
      />

      <Text className="p-5">
        <Button title="Tìm số lớn nhất" onPress={handlMax} />
        <Button title="Tìm số nhỏ nhất" onPress={handlMin} />
      </Text>

      {sum !== null && (
        <Text className="text-blue-500 text-lg mt-4">Tổng: {sum}</Text>
      )}
    </View>
  );
};

export default MaxMinNumber;
