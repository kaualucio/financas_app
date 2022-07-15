import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { theme } from '../../global/styles/theme'

type SwitchProps = {
  type: string,
  handleSwitchType: (type: string) => void
}

export function Switch({ type, handleSwitchType }: SwitchProps) {
  

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleSwitchType('spendings')} style={[styles.spendingButton, type === 'spendings' && { backgroundColor: theme.colors.ok }]}>
        <Text style={styles.text}>Gastos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSwitchType('inputs')} style={[styles.inputButton, type === 'inputs' && { backgroundColor: theme.colors.ok }]}>
        <Text style={styles.text}>Ganhos</Text>
      </TouchableOpacity>
    </View>
  )
}