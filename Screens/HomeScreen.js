import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { Avatar, Button, Icon, Image, Input } from "@rneui/themed";
import { ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "react-native-url-polyfill/auto";

const HomeScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState("");
  const [image, setImage] = useState([
    {
      url: "https://www.haliburtonforest.com/wp-content/uploads/2017/08/placeholder-square.jpg",
    },
    {
      url: "https://www.haliburtonforest.com/wp-content/uploads/2017/08/placeholder-square.jpg",
    },
    {
      url: "https://www.haliburtonforest.com/wp-content/uploads/2017/08/placeholder-square.jpg",
    },
    {
      url: "https://www.haliburtonforest.com/wp-content/uploads/2017/08/placeholder-square.jpg",
    },
  ]);
  //   console.log("image:", image);
  const configuration = new Configuration({
    apiKey: "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",
  });
  console.log(input);
  //   console.log(process.env.APP_API_KEY);

  useEffect(() => {
    if (input === "") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [input]);
  const generateImage = async () => {
    const openai = new OpenAIApi(configuration);
    // console.log(openai);
    try {
      setLoading(true);
      const response = await openai.createImage({
        prompt: input,
        n: 4,
        size: "1024x1024",
      });
      //   const image_url = response.data.data[0].url;
      const image_url = response.data.data;
      console.log(response.data.data[0].url);
      setImage(image_url);
    } catch (error) {
      console.log(error);
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    } finally {
      setInput("");
      //   setLoading(false);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Image Generation",
      headerTitleAlign: "left",
      headerStyle: { backgroundColor: "#1766c2" },
      headerTitleStyle: { color: "white" },
      headerTintColor: "white",
      headerLeft: () => {
        return (
          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <TouchableOpacity>
              <Avatar rounded source={require("../assets/icon.png")} />
            </TouchableOpacity>
          </View>
        );
      },
      headerRight: () => {
        return (
          <View
            style={{
              marginRight: 10,
              flexDirection: "row",
              justifyContent: "flex-end",
              width: 80,
              marginRight: 10,
            }}
          >
            {/* <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => console.log("add photo")}
            >
              <Icon name="camerao" type="ant-design" size={24} color="white" />
            </TouchableOpacity> */}
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate("AddChat")}
            >
              <Icon name="edit" type="ant-design" size={24} color="white" />
            </TouchableOpacity>
          </View>
        );
      },
    });
  }, [navigation]);
  const Item = (item) => {
    return (
      <View>
        <Image
          source={{
            uri: item.url,
          }}
          style={styles.images}
        />
        {/* <Text>{item.url}</Text> */}
      </View>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" hidden={false} />
      <Text style={styles.inputTitle}>What do you want?</Text>
      <Input
        placeholder="Type what you like to generate"
        onChangeText={(text) => setInput(text)}
        value={input}
      />

      {loading && input.length > 0 && (
        <Text>Genetaring Images for, "{input}"</Text>
      )}
      <Button
        onPress={() => generateImage()}
        title="Generate"
        disabled={loading}
        loading={loading}
      />
      <View style={{ height: 30 }} />
      <FlatList
        data={image}
        numColumns={2}
        renderItem={(item) => Item(item.item)}
        // keyExtractor={(item) => item.index}
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray2",
    padding: 10,
  },
  inputTitle: {
    // color: "#ffffff",
    fontSize: 18,
  },
  images: {
    height: 180,
    width: 180,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
});
