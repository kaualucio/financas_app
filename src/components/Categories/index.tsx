import { ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Category } from '../Category'
import { categories } from '../../utils/categories'

type CategoriesProps = {
  categorySelected: string,
  handleCategorySelect: (category: string) => void
}

export function Categories({ categorySelected, handleCategorySelect }: CategoriesProps) {
  
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    > 
      {
        categories.map((category) => (
          <Category key={category.id} id={category.id} title={category.name} iconName={category.icon} categorySelected={categorySelected} handleCategorySelect={handleCategorySelect} />
        ))
      }
    </ScrollView>
  )
}