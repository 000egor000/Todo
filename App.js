import { Alert, StyleSheet, Text, View, FlatList } from 'react-native'
import Headercom from './src/Headercom.jsx'
import AddTodo from './src/AddTodo.jsx'
import BlockView from './src/BlockView.jsx'
import Start from './src/Start.jsx'

import React, { useState } from 'react'

export default function App() {
  const nameHeaderTitle = 'itach-Soft'
  const [data, setData] = useState([])

  const [boolenStart, setBoolenStart] = useState(false)

  const getValueInput = (val) => {
    if (val.title.trim()) {
      return setData([...data, val])
    } else {
      Alert.alert('Упс, заполните данные!')
    }
  }
  const getStatus = () => setBoolenStart((res) => !res)

  const removeValue = (idProp) => {
    setData(data.filter(({ id }) => id != idProp))
  }
  console.log(data)
  const editValue = (idProp, titleProp) => {
    const dataFilter = data.map((item) =>
      item.id == idProp ? { ...item, title: titleProp } : item
    )

    setData(dataFilter)
  }

  return (
    <View style={{ flex: 1 }}>
      <Headercom name={nameHeaderTitle} />
      <View style={styles.containerInner}>
        {boolenStart ? (
          <React.Fragment>
            <AddTodo getValueInput={getValueInput} />
            {data.length > 0 ? (
              <FlatList
                style={styles.flatList}
                keyExtractor={(item) => item.id}
                data={data}
                renderItem={({ item }) => (
                  <BlockView
                    data={item}
                    remove={removeValue}
                    edit={editValue}
                  />
                )}
              />
            ) : (
              <View style={styles.textNotData}>
                <Text>Нет данных!</Text>
              </View>
            )}
          </React.Fragment>
        ) : (
          <Start getStatus={getStatus} />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerInner: {
    paddingHorizontal: 10,
    flex: 1,
  },
  flatList: {
    flex: 1,
  },

  textNotData: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
})
