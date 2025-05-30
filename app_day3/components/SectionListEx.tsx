import React from "react";
import { SectionList, Text, View } from "react-native";

const ListData = [
  {
    id: "1",
    title: "Thịt",
    data: [
      { id: "1-1", name: "Gà" },
      { id: "1-2", name: "Zịt" },
      { id: "1-3", name: "Heo" },
    ],
  },
  {
    id: "2",
    title: "Rau",
    data: [
      { id: "2-1", name: "Rau cải" },
      { id: "2-2", name: "Rau Nhiếp" },
      { id: "2-3", name: "Ra Xà Lách" },
    ],
  },
  {
    id: "3",
    title: "Gia Vị",
    data: [
      { id: "3-1", name: "Xả" },
      { id: "3-2", name: "Ớt" },
      { id: "3-3", name: "Dầu" },
    ],
  },
];

const SectionListEx = () => {
  return (
    <View className="flex-1 p-4 mt-6">
      <SectionList
        sections={ListData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="p-2">
            <Text>{item.name}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View className="bg-gray-200 p-2 mb-2 rounded">
            <Text className="font-bold">{title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SectionListEx;
