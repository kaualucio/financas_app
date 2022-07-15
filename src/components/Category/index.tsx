import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';

type CategoryProps = {
  id: string
  title: string,
  iconName: any,
  categorySelected: string,
  handleCategorySelect: (category: string) => void
}

export function Category({ id, title, iconName, categorySelected, handleCategorySelect }: CategoryProps) {
  return (
    <TouchableOpacity 
      activeOpacity={1}
      style={[styles.container, categorySelected === id && styles.borderSelected]}
      onPress={() => handleCategorySelect(id)}
      >
      <MaterialCommunityIcons name={iconName} size={40} color={theme.colors.heading} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}