// import Login from "@/components/Login";
// import ScrollViewPage from "@/components/ScrollViewPage";
// import FlatListPage from "@/components/FlatListPage";
// import ExFlatlist from "@/components/ExFlatlist";
// import TodoList from "@/components/TodoList";
// import MaxMinNumber from "@/components/MaxMinNumber";
// import SumNumber from "@/components/SumNumber";
import MyDrawer from "@/components/MyDrawer";
// import SectionListEx from "@/components/SectionListEx";
import screen1 from "@/screens/screen1";
import screen2 from "@/screens/screen2";
import { RootStackParamList } from "@/types/NavigationEx";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <View className="flex-1 justify-center">
      {/* <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Screen1" component={screen1} />
        <Stack.Screen name="Screen2" component={screen2} />
      </Stack.Navigator> */}
      <MyDrawer />
    </View>
  );
}

// <View className="flex-1">
{
  /* <Image
        source={{
          uri: "https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/hinh-nen-dien-thoai-phong-canh/hinh-nen-dien-thoai-phong-canh-3d/hinh-nen-dien-thoai-phong-canh-3d-dep.jpg?1667276654678",
        }}
        className="w-40 h-40 rounded-full mb-4"
      /> */
}
{
  /* <Login /> */
}
{
  /* <MaxMinNumber /> */
}
{
  /* <SumNumber /> */
}
{
  /* <ScrollViewPage /> */
}
{
  /* <FlatListPage /> */
}
{
  /* <ExFlatlist /> */
}
{
  /* <TodoList /> */
}
{
  /* <MyDrawer /> */
}
{
  /* <SectionListEx /> */
}
{
  /* </View> */
}
