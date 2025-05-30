import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  DrawerLayoutAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const MyDrawer = () => {
  const drawer = React.useRef<DrawerLayoutAndroid>(null);
  const navigationView = () => (
    <View style={styles.drawerContainer}>
      <Text style={styles.drawerText}>Item 1</Text>
      <Text style={styles.drawerText}>Item 2</Text>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => drawer.current?.closeDrawer()}
      >
        <Text style={styles.closeButtonText}>Close Drawer</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerPosition="left"
      drawerWidth={300}
      renderNavigationView={navigationView}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => drawer.current?.openDrawer()}>
          <Ionicons name="menu" size={32} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Header</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.mainText}>Content</Text>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FF6600",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginTop: 24,
  },
  headerText: {
    fontSize: 20,
    marginLeft: 16,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    marginTop: 24,
  },
  drawerText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    padding: 10,
    backgroundColor: "#FF6600",
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    color: "black",
    backgroundColor: "#FF6600",
  },
});

export default MyDrawer;
