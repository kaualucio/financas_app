import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'

export function SignIn() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Finanças</Text>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} resizeMode="contain" source={require('../../images/logo-google.png')} />
        </View>
        <Text style={styles.text}>Entrar com o Google</Text>
      </TouchableOpacity>
    </View>
  )
}