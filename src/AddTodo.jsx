import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useState } from 'react'

export default function AddTodo({ name, getValueInput }) {
  const [val, setVal] = useState('')

  return (
    <View style={styles.container}>
      <TextInput
        type="text"
        style={styles.input}
        value={val}
        onChangeText={(e) => setVal(e)}
        placeholder="Введите данные..."
      />
      <Button
        title="Go"
        style={styles.button}
        onPress={() => {
          getValueInput({ id: Date.now().toString(), title: val })
          setVal('')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    padding: 5,
    borderStyle: 'solid',
    borderColor: 'blue',
  },
  button: {
    // width: '20%',
  },
  text: {
    fontSize: 20,
    color: 'red',
  },
})
