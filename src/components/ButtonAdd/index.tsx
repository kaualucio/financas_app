import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';


type ButtonAddProps = TouchableOpacityProps & {

}

export function ButtonAdd({...rest}: ButtonAddProps) {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      {...rest}
      style={styles.button}
      onPress={() => navigation.navigate('CreateBudget' as never)}
    >
      <Ionicons name="add-outline" size={24} color={theme.colors.heading} />
    </TouchableOpacity>
  )
}