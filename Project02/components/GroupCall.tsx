import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GroupCall() {
  const people = [
    {
      id: 1,
      name: "Debadyuti",
      email: "dk@gmail.com",
      imageUrl:
        "https://avatars.githubusercontent.com/u/62183757?s=400&u=9742238db0c36903d16d61849b2148ceecc8faa0&v=4",
    },
    {
      id: 2,
      name: "Parthib",
      email: "ps@gmail.com",
      imageUrl:
        "https://avatars.githubusercontent.com/u/62183757?s=400&u=9742238db0c36903d16d61849b2148ceecc8faa0&v=4",
    },
    {
      id: 3,
      name: "Rajdeep",
      email: "rg@gmail.com",
      imageUrl:
        "https://avatars.githubusercontent.com/u/62183757?s=400&u=9742238db0c36903d16d61849b2148ceecc8faa0&v=4",
    },
    {
      id: 4,
      name: "Rajdeep",
      email: "rg@gmail.com",
      imageUrl:
        "https://avatars.githubusercontent.com/u/62183757?s=400&u=9742238db0c36903d16d61849b2148ceecc8faa0&v=4",
    },
    {
      id: 5,
      name: "Rajdeep",
      email: "rg@gmail.com",
      imageUrl:
        "https://avatars.githubusercontent.com/u/62183757?s=400&u=9742238db0c36903d16d61849b2148ceecc8faa0&v=4",
    },
    {
      id: 6,
      name: "Rajdeep",
      email: "rg@gmail.com",
      imageUrl:
        "https://avatars.githubusercontent.com/u/62183757?s=400&u=9742238db0c36903d16d61849b2148ceecc8faa0&v=4",
    },
    {
      id: 7,
      name: "Rajdeep",
      email: "rg@gmail.com",
      imageUrl:
        "https://avatars.githubusercontent.com/u/62183757?s=400&u=9742238db0c36903d16d61849b2148ceecc8faa0&v=4",
    },
    {
      id: 8,
      name: "Rajdeep",
      email: "rg@gmail.com",
      imageUrl:
        "https://avatars.githubusercontent.com/u/62183757?s=400&u=9742238db0c36903d16d61849b2148ceecc8faa0&v=4",
    },
  ];
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.cardHeading}>
          <Text style={styles.headingText}>Group Call</Text>
          <Text style={styles.membersOnline}>8 members</Text>
          <Text style={styles.callTiming}>00:23:44</Text>
        </View>
        <ScrollView>
          <View style={styles.membersProfile}>
            {people.map((person) => (
              <View>
                <Image
                  key={person.id}
                  source={{ uri: person.imageUrl }}
                  style={styles.dp}
                />
                <Text style={styles.profileName}>{person.name}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Image
            source={{
              uri: "https://w7.pngwing.com/pngs/48/381/png-transparent-microphone-mute-mic-meeting-general-pack-icon.png",
            }}
            style={styles.muteIcon}
          />
          <Image
            style={styles.callIcon}
            source={{
              uri: "https://www.clipartmax.com/png/middle/267-2677097_red-call-logo.png",
            }}
          />
          <Image
            source={{
              uri: "https://image.similarpng.com/very-thumbnail/2021/08/Instagram-video-chat-icon-on-transparent-background-PNG.png",
            }}
            style={styles.cameraIcon}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    height: 750,
    marginHorizontal: 20,
    marginVertical: 70,
    borderRadius: 20,
    alignItems: "center",
  },
  cardHeading: {
    alignItems: "center",
  },
  headingText: {
    fontSize: 35,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 20,
  },
  membersOnline: {
    color: "grey",
    fontSize: 18,
    opacity: 0.6,
  },
  callTiming: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    opacity: 0.6,
    marginTop: 20,
  },
  membersProfile: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
  },
  dp: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  callIcon: {
    height: 80,
    width: 80,
    borderRadius: 50,
    // margin: 30,
    marginHorizontal:30,
    opacity: 0.9,
},
muteIcon: {
    height: 50,
    width: 50,
    borderRadius: 50,
    // margin: 30,
    marginHorizontal:10,
    opacity: 0.5,
},
footer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical:30,

  },
  cameraIcon:{
    height: 40,
    width: 40,
    borderRadius: 50,
    // margin: 30,
    marginHorizontal:10,
    opacity: 0.5,
  }
});
