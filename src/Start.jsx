import React from 'react'
import { Button, StyleSheet, View, Image } from 'react-native'

export default function Start({ getStatus }) {
  return (
    <View style={styles.start}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://www.itach.by/bitrix/templates/itach/img/logo/logo.png',
        }}
      />
      <Button title="Go!" onPress={() => getStatus()} />
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },

  start: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
})
