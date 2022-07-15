import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { theme } from '../../global/styles/theme'
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

type HeaderNavigationProps = {
  title: string
}

export function HeaderNavigation({ title }: HeaderNavigationProps) {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity  style={{width: 50}} activeOpacity={1} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="keyboard-backspace" size={30} color={theme.colors.heading} />
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={{width: 50}} />
    </View>
  )
}