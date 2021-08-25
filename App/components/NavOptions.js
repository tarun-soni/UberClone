import React from 'react'
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import navOptionsData from '../data/navOptionsData'

const styles = StyleSheet.create({
  nav_image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
})

const NavOptions = () => {
  return (
    <View>
      <FlatList
        data={navOptionsData}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View>
              <Image style={styles.nav_image} source={{ uri: item.image }} />
              <Text>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default NavOptions
