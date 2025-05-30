import { RootStackParamList } from "@/types/NavigationEx";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";

type Screen2Props = {
  route: RouteProp<RootStackParamList, "Screen2">;
  navigation: NativeStackNavigationProp<RootStackParamList, "Screen2">;
};

const Screen2 = ({ route, navigation }: Screen2Props) => {
  const { name } = route.params;

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl mb-6">Welcome, {name}!</Text>
      <Text className="mb-1"></Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Screen2;
