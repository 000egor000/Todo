import React, { useEffect } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { useState } from 'react'
import { Alert } from 'react-native'

export default function BlockView({ data, remove, edit }) {
  const { id, title } = data
  const [statusClick, setStatusClick] = useState(false)
  const [editText, setEditText] = useState('')
  const [statusClickEdit, setStatusClickEdit] = useState(false)

  const clickEdit = () => {
    setStatusClickEdit((res) => !res)
    setEditText(title)

    if (statusClickEdit && editText != title) {
      edit(id, editText)
    }
  }

  return (
    <View>
      {!statusClick ? (
        <Text
          style={styles.text}
          onLongPress={() => setStatusClick((res) => !res)}
        >
          {title}
        </Text>
      ) : (
        <View style={styles.blockItemAll}>
          {statusClickEdit ? (
            <TextInput
              style={{ ...styles.text, width: '80%', borderColor: 'red' }}
              value={editText}
              onChangeText={(text) => setEditText(text)}
            />
          ) : (
            <Text
              style={{ ...styles.text, width: '80%' }}
              onLongPress={() => setStatusClick((res) => !res)}
            >
              {title}
            </Text>
          )}

          <View style={styles.blockItem}>
            <TouchableOpacity
              style={{
                ...styles.button,
                backgroundColor: 'red',
                borderColor: 'red',
              }}
              onPress={() => remove(id)}
            >
              <Text style={styles.textClick}>R</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => clickEdit()}>
              <Text style={styles.textClick}>E</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 5,
    margin: 5,
    borderColor: 'grey',
  },
  blockItemAll: {
    flexDirection: 'row',
  },
  blockItem: {
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A6ABB',
    width: '20%',
    // height: 45,
    borderColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 100,
    // marginTop: 50,
  },
  textClick: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
