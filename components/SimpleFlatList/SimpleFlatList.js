import React from "react"
import { StyleSheet, View, Text, FlatList } from "react-native"

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

const SimpleFlatList = () => {
    return (
        <FlatList
            data={DATA}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={item => item.text}
        />
    )
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#fff',
      padding: 20,
      marginVertical: 5,
      marginHorizontal: 10,
      justifyContent: "center",
      alignItems: "center"
    },
    text: {
        color: "#000"
    }
  });

  export default SimpleFlatList;
