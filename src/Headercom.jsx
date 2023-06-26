import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Headercom({ name }) {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    paddingBottom: 10,
  },
})
