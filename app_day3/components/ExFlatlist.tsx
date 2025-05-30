import React from "react";
import { FlatList, Image, Text, View } from "react-native";

const Music = [
  {
    name: "Sơn Tùng MTP",
    email: "sontung@gmail.com",
    position: "Ca sĩ",
    image: require("../assets/images/son_tung.jpg"),
  },
  {
    name: "Đức Phúc",
    email: "ducphuc@gmail.com",
    position: "Ca sĩ",
    image: require("../assets/images/duc_phuc.jpg"),
  },
  {
    name: "Dương Domic",
    email: "duong@gmail.com",
    position: "Ca sĩ",
    image: require("../assets/images/duong_domic.jpg"),
  },
  {
    name: "Quang Anh Ryder",
    email: "ryder@gmail.com",
    position: "Ca sĩ",
    image: require("../assets/images/ryder.jpg"),
  },
  {
    name: "Hiếu Thứ Hai",
    email: "hieu@gmail.com",
    position: "Ca sĩ",
    image: require("../assets/images/hieu_thu_2.jpg"),
  },
  {
    name: "G-Dragon",
    email: "dragon@gmail.com",
    position: "Rapper",
    image: require("../assets/images/gdragon.jpg"),
  },
  {
    name: "Jack 97",
    email: "jack@gmail.com",
    position: "Ca sĩ",
    image: require("../assets/images/jack_97.jpg"),
  },
  {
    name: "Alan Walker",
    email: "alan@gmail.com",
    position: "DJ",
    image: require("../assets/images/alan.jpg"),
  },
  {
    name: "Trấn Thành",
    email: "tranthanh@gmail.com",
    position: "MC",
    image: require("../assets/images/tran_thanh.jpg"),
  },
  {
    name: "Trường Giang",
    email: "truonggiang@gmail.com",
    position: "MC",
    image: require("../assets/images/truong_giang.jpg"),
  },
];

type MusicType = {
  name: string;
  email: string;
  position: string;
  image: any;
};

const renderMusicItem = ({ item }: { item: MusicType }) => {
  return (
    <View className="w-full mt-4 bg-gray-500 rounded-lg p-4 flex-row items-center border">
      <Image
        source={item.image}
        className="w-20 h-20 rounded-full"
        resizeMode="cover"
      />
      <View className="ml-4 flex-1">
        <Text className="text-white font-bold">{item.name}</Text>
        <Text className="text-white">{item.email}</Text>
        <Text className="text-white">{item.position}</Text>
      </View>
    </View>
  );
};

const ExFlatlist = () => {
  return (
    <FlatList
      data={Music}
      renderItem={renderMusicItem}
      keyExtractor={(item) => item.name}
    />
  );
};

export default ExFlatlist;
