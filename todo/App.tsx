import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Todo from './components/Todo'
import AddTodo from './components/AddTodo'
import AddNew from './components/AddNew'

export default function App() {
  return (
    <SafeAreaView>
      {/* <Todo /> */}
      {/* <AddTodo /> */}
      <AddNew />
      <StatusBar backgroundColor={"white"} barStyle='dark-content' />
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})