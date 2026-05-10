import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [name, setName] = useState("");

  return (
    <View>
      <Text numberOfLines={3}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id vero
        provident tenetur iusto assumenda ullam unde officia facilis voluptas
      </Text>

      {/* Remote Image from internet */}
      {/* <Image source={{ uri: "uri" }} width={200} height={200} /> */}

      {/* Local Image  */}
      {/* <Image source={require("path")} style={{ height: 100, width: 100 }} blurRadius={30} /> */}

      <TextInput
        placeholder="Enter your name..."
        value={name}
        onChangeText={setName}
        placeholderTextColor={"blue"}
        style={{
          borderWidth: 1,
          borderColor: "#ddd",
          marginTop: 10,
          fontSize: 24,
        }}
      />

      <Pressable onPress={() => alert("Button Pressed!")} style={
        ({pressed}) => ({
          backgroundColor: pressed ? '#4a42df' : '#6c63fe'
        })
      }>
        <Text>Press me!</Text>
      </Pressable>
    </View>
  );
}
