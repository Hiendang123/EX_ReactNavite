import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ScrollViewPage() {
  return (
    <ScrollView
      pagingEnabled={true}
      horizontal={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.page}>
        <Text className="text-center">Page 1</Text>
      </View>
      <View style={styles.page}>
        <Text className="text-center">Page 2</Text>
      </View>
      <View style={styles.page}>
        <Text className="text-center">Page 3</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    width: 300,
    height: 300,
    justifyContent: "center",
    backgroundColor: "lightblue",
    borderWidth: 1,
    marginBottom: 10,
  },
});
