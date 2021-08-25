import React from 'react'
import { Image, SafeAreaView, StyleSheet, View } from 'react-native'

import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
})

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
