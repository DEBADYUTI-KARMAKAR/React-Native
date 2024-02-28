import { Button, FlatList, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-virtualized-view';
export default function AddTodo() {
    const [todo,setTodo]=useState("");
    const [todoList,settodoList]=useState([]);
    const addTodo=()=>{
        console.log('add todo',todo);
        settodoList([...todoList,todo])
        setInput("");

        
    }
    const setInput=(text)=>{
        setTodo(text)
        console.log("setInput",text);
    }
    const deleteItem=(item)=>{
        console.log("deleteItem",item);
        const newTodoList=todoList.filter((todo)=>todo!==item);
        
    }
  return (
    <View style={styles.container}>

      <Text style={styles.heading}>AddTodo</Text>
      <TextInput
      style={styles.input}
      placeholder="Add todo"
      value={todo}
      onChangeText={setInput}
      />
      <View>
        <TouchableHighlight
        
        onPress={addTodo}
        style={styles.btn}
        
        >
            <Text style={styles.btntext}>Add Task</Text>
        </TouchableHighlight>
      </View>

      <ScrollView>
        <View style={styles.lst}>

        <FlatList
        data={todoList}
        renderItem={
            (({item})=>{
                return <View>
                    <Text style={styles.item}>{item}</Text>
                    <Button title='Del' onPress={deleteItem}></Button>
                    </View>
            })
        }
        style={styles.list}
        />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        margin:20
    },
    input:{
        borderWidth:1,
        marginBottom:10,
        padding:10,
        borderRadius:10
    },
    list:{
        margin:5
    },
    btn:{
        padding:10,
        backgroundColor:'black',
        borderRadius:10
        
    },
    btntext:{
        color:'#ffffff',
        fontWeight:'bold',
        textAlign:'center'
    },
    heading:{
        fontSize:30,
        margin:10
    },
    item:{
        marginVertical:20,
        backgroundColor:'#dcdcdc',
        paddingVertical:20,
        paddingHorizontal:20,
        fontSize:20,
        borderRadius:10,
        textAlign:'center'
    },
    scrollView:{
        margin:2
    },
    lst:{
        paddingBottom:50
    }
})