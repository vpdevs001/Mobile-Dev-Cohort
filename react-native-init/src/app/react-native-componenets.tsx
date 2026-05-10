import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const hehe = () => {
  const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "red" }}
      contentContainerStyle={{ padding: 16, alignItems: "center" }}
    >
      {items.map((item) => (
        <View
          key={item}
          style={{
            backgroundColor: "white",
            padding: 16,
            borderRadius: 10,
            marginBottom: 10,
            shadowColor: "#000",
            shadowOpacity: 0.05,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <Text style={{ fontSize: 16 }}>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default hehe;

const styles = StyleSheet.create({});
