import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'

type BudgetsSingleProps = {
  title: string,
  value: number
}

export function BudgetsSingle({ title, value }: BudgetsSingleProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>R$ {value}</Text>
    </View>
  )
}