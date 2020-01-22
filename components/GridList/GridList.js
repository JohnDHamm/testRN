import React from "react"
import { StyleSheet, View, Text, FlatList, Dimensions } from "react-native"

const DATA = [
  {
    text: "one"
  },
  {
    text: "two"
  },
  {
    text: "three"
  },
  {
    text: "four"
  }
]

const Item = ({item}) => {
  return (
    <View style={styles.item}>
        <Text>{item.text}</Text>
    </View>
  )
}

const GridList = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({item}) => <Item item={item} />}
      keyExtractor={item => item.text}
      numColumns={3}
      horizontal={false}
    />
  )
}

const screenWidth = Dimensions.get('window').width;
const horizGap = 15;
const itemWidth = (screenWidth - (6 * horizGap)) / 3;

const styles = StyleSheet.create({
  item: {
    width: itemWidth,
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: horizGap,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#000"
  }
});

export default GridList;
