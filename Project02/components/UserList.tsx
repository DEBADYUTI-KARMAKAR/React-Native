import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function UserList() {
  const contacts = [
    {
      id: 1,
      name: "Debadyuti Karmakar",
      email: "dk@gmail.com",
      imageUrl:
        "https://avatars.githubusercontent.com/u/62183757?s=400&u=9742238db0c36903d16d61849b2148ceecc8faa0&v=4",
    },
    {
      id: 2,
      name: "Parthib Sarkar",
      email: "ps@gmail.com",
      imageUrl:
        "https://avatars.githubusercontent.com/u/62183757?s=400&u=9742238db0c36903d16d61849b2148ceecc8faa0&v=4",
    },
    {
      id: 3,
      name: "Rajdeep Ghosh",
      email: "rg@gmail.com",
      imageUrl:
        "https://avatars.githubusercontent.com/u/62183757?s=400&u=9742238db0c36903d16d61849b2148ceecc8faa0&v=4",
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Founder</Text>
      <ScrollView style={styles.container}>
        {contacts.map((contact) => (
          <View key={contact.id} style={styles.userCard}>
            <Image
              source={{ uri: contact.imageUrl }}
              style={styles.userImage}
            />
            <View style={styles.textData}>
              <Text style={styles.userName}>{contact.name}</Text>
              <Text style={styles.userEmail}>{contact.email}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  container: {
    paddingHorizontal: 20,
  },
  userCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f1f1f1",
    marginVertical: 10,
    borderRadius: 10,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight:14
  },
  textData:{
    flexDirection:'column',
    padding:10,
  },
    userName:{
        fontSize:20,
        fontWeight:'bold',
    },
    userEmail:{
        fontSize:16,
        fontWeight:'500',
    }
});
