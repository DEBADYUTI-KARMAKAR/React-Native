import { useState } from "react";
import {
  Alert,
  Button,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import Pas from "./component/Pas";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum" }}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <ScrollView>
        <Pressable onLongPress={() => console.log("Hello")}>
          <ImageBackground
            source={{
              uri: "https://media.istockphoto.com/id/1167846071/photo/huge-statue-of-red-hanuman-with-the-raised-hand.jpg?s=1024x1024&w=is&k=20&c=bMNuqYU0cQojINqPEzXmMPNoou0EZIEioccAd9m2NYE=",
            }}
            style={{ width: 400, height: 800 }}
          >
            <Text style={{ padding: 40, flex: 1, textAlign: "center" }}>
              Jay Hanuman Ji
            </Text>
          </ImageBackground>
        </Pressable>
        <Button title='Hello' onPress={()=>setModalVisible(true)} />
        <Modal visible={modalVisible} animationType='slide'>
          <View style={{ flex: 1, backgroundColor: "plum",padding:40 }}>
            <Button title='Close' color={'darkblue'}  onPress={()=>setModalVisible(false)}/>
            <Text style={{color:'red'}}>Hello</Text>
          </View>
        </Modal>
        <View style={{ padding: 30 }}>
        <Button title='Popup' onPress={()=>Alert.alert('Hello','Hii',[
          {
            text:'Yes',
            onPress:()=>console.log('Yes')
          },
          {
            text:'No',
            onPress:()=>console.log('No')
          }
        ])} />
        </View>
        <View style={{ padding: 30 }}>
          <Text style={{ color: "white" }}>World</Text>
          <Text style={{ padding: 50, color: "white" }}>Hello<Text style={{color:'darkblue'}}>World</Text></Text>
          <Pas msg='Debadyuti' msg1='Karmakar' />
        </View>
      </ScrollView>
    </View>
  );
};

export default App;
