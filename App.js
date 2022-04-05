import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image, Pressable, Alert, ActivityIndicator } from 'react-native';

export default function App() {

  const onPressFunction = () => {
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

  } 

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerTextes}>
        <Text style={styles.textes1}>Tittle</Text>
        <Text style={styles.textes2}>Story</Text>
        <Text style={styles.textes3}>The End</Text>
        <ActivityIndicator size="large"/>
      </View>
      <Image source={require("./assets/konexio-logo_1.png")}
        style={{ width: 100, height: 100 }} />
      <Image
        source={{ uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png" }}
        style={{ width: 100, height: 100 }} />
      <Pressable onPress={onPressFunction}>
        <Text>I'm pressable!</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000ff',
  },
  containerTextes: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  textes1: {
    flex: 1,
    marginVertical: 80,
    fontSize: 30,
  },
  textes2: {
    flex: 1,
    marginVertical: 80,
    justifyContent: 'center',
    display: 'flex',
  },
  textes3: {
    flex: 1,
    marginVertical: 80,
    fontWeight: 'bold',
  },
});
