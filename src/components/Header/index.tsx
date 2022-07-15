import { View, Text } from 'react-native'
import React from 'react'
import { ButtonAdd } from '../ButtonAdd'

import { styles } from './styles'

export function Header() {
  return (
      <View style={styles.container}>
        <View>
          <Text style={styles.username}>Olá, Kauã</Text>
          <Text style={styles.greeting}>Bem-vindo de volta</Text>
        </View>
        <ButtonAdd />
      </View>
  )
}