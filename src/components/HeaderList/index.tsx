import { View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Title } from '../Title'
import { styles } from './styles';

type HeaderListProps = {
  title: string,
  type: string
}

export function HeaderList({ title, type }: HeaderListProps) {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Title spacingBottom title={title} />
      <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('SeeAll' as never, { type } as never)}>
        <Text style={styles.text}>Ver todos</Text>
      </TouchableOpacity>
    </View>
  )
}