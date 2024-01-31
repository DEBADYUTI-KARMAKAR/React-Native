import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import FlatCards from "./components/FlatCards";
import ElevatedCard from "./components/ElevatedCard";
import FancyCard from "./components/FancyCard";
import ActionCard from "./components/ActionCard";
import UserList from "./components/UserList";
import GroupCall from "./components/GroupCall";

const App = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#DC84F3'}}>
      <ScrollView>
        {/* <FlatCards />
        <ElevatedCard />
        <FancyCard />
        <FancyCard />
        <ActionCard />
        <UserList /> */}
        <GroupCall />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
