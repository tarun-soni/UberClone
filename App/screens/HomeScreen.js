import React from 'react'
import { Image, SafeAreaView, StyleSheet, View } from 'react-native'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'tailwind-react-native-classnames'
import { GOOGLEMAPS_API_KEY } from '@env'
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
        <View style={{ borderWidth: 4 }}>
          <GooglePlacesAutocomplete
            styles={{
              container: {
                flex: 0,
              },
              textInput: {
                fontSize: 18,
              },
            }}
            enablePoweredByContainer={false}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            placeholder="Search"
            fetchDetails
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log('GMAPI', data, details)
            }}
            query={{
              key: GOOGLEMAPS_API_KEY,
              language: 'en',
            }}
            onFail={e => console.log(`error in GMAPS`, e)}
          />
        </View>
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
