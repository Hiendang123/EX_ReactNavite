import React from "react";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";

const Data = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
  { id: 4, name: "Bob Brown" },
  { id: 5, name: "Charlie Davis" },
  { id: 6, name: "Diana Prince" },
  { id: 7, name: "Ethan Hunt" },
  { id: 8, name: "Fiona Apple" },
  { id: 9, name: "George Clooney" },
  { id: 10, name: "Hannah Montana" },
];

interface ItemProps {
  item: {
    id: number;
    name: string;
  };
  onPress?: () => void;
}

const Item = (props: ItemProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View className="w-full mt-4 bg-blue-500 rounded-lg p-4">
        <Text className="text-white text-center">
          {props.item.id} - {props.item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const handleOnPress = () => {
  Alert.alert("Item Pressed", "You pressed an item!");
};

const FlatListPage = () => {
  return (
    <FlatList
      data={Data}
      renderItem={({ item }) => <Item item={item} onPress={handleOnPress} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default FlatListPage;
