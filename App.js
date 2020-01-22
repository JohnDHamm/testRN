import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Constants from "expo-constants"
import SimpleFlatList from "./components/SimpleFlatList/SimpleFlatList"
import GridList from "./components/GridList/GridList"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <GridList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bada55',
    // marginTop: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
  },
});
