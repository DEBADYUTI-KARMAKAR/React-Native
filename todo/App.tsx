import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Todo from './components/Todo'
import AddTodo from './components/AddTodo'

export default function App() {
  return (
    <SafeAreaView>
      {/* <Todo /> */}
      <AddTodo />
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})