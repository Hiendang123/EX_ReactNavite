import React from "react";
import { Text, View } from "react-native";

interface MyProfileProps {
  name: string;
  address?: string;
}

const MyProfile = (props: MyProfileProps) => {
  return (
    <View className="mb-3">
      <Text className="text-red-500">Hello: {props.name}</Text>
      <Text className="text-red-500">Address: {props.address}</Text>
    </View>
  );
};

export default MyProfile;
