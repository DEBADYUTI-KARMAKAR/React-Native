import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function Todo() {
    const [todo,setTodo]=useState("");
    const [todoList,settodoList]=useState([]);

    const addTodo=()=>{
        console.log('add todo',todo);
        settodoList([...todoList,todo]);
        setTodo("");
        
    }
    const setInput=(text)=>{
        setTodo(text);
        console.log("setInput",text);
        
    }

  return (
    <View style={styles.container}>
      <Text>Todo</Text>
      <TextInput placeholder="Add todo" value={todo} onChangeText={setInput}
      
      style={{borderWidth:1,marginBottom:10}}
      />
        <Button title="Add" onPress={addTodo}/>
        <FlatList
        data={todoList}
        renderItem={({item})=>(
            <Text>{item}</Text>
        )}
        
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})