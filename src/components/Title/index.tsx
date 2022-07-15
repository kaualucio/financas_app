import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'

type TitleProps = { 
  title: string,
  spacingBottom?: boolean
}

export function Title({title, spacingBottom}: TitleProps) {
  return (
    <Text style={[styles.title, spacingBottom && { marginBottom: 0 }]}>{title}</Text>
  )
}