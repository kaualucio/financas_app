import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme';
import { categories } from '../../utils/categories';

export type Spending = {
  id: string,
  name: string,
  categoryId?: string,
  date: string,
  price: number
}

type SpendingProps = {
  data: Spending,
  type: string,
}

export function Budget({ data, type }: SpendingProps) {
  const category = categories.find(category => category.id === data.categoryId)

  return (
   <View style={styles.container}>
        <View style={styles.info}>
          <View style={styles.icon}>
            <MaterialCommunityIcons 
              name={type === 'spendings' ? category?.icon : 'piggy-bank'} 
              size={40} 
              color={theme.colors.heading} />
          </View>
          <View>
            <Text style={styles.title}>{data?.name}</Text>
            <Text style={styles.date}>{data.date}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.price}>R$ {data.price}</Text>
        </View>
   </View>
  )
}