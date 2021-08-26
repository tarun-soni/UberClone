import React from 'react'
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import tw from 'tailwind-react-native-classnames'
import navOptionsData from '../data/navOptionsData'

const styles = StyleSheet.create({
  nav_item_container: tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`,
  nav_item_rounded: {
    borderRadius: 8,
  },
  nav_image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  nav_icon: tw`p-2 bg-black rounded-full w-10 mt-4`,
  nav_item_title: tw`mt-2 text-lg font-semibold`,
})

const NavOptions = () => {
  return (
    <View>
      <FlatList
        data={navOptionsData}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.nav_item_container, styles.nav_item_rounded]}>
            <View>
              <Image style={styles.nav_image} source={{ uri: item.image }} />
              <Text style={styles.nav_item_title}>{item.title}</Text>
              <Icon
                name="arrowright"
                type="antdesign"
                color="#fff"
                style={styles.nav_icon}
              />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default NavOptions
