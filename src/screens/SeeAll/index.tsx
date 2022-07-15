import { View, FlatList, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { HeaderNavigation } from '../../components/HeaderNavigation';
import { styles } from './styles';

import { Budget } from '../../components/Budget';
import { theme } from '../../global/styles/theme';
import { Switch } from '../../components/Switch';
import { useData } from '../../context/data';

export function SeeAll() {
  const { data } = useData()
  const [type, setType] = useState('spendings')
  const dataBasedType = data.filter((item) => item.type_data === type)
  function handleSwitchType(type: string) {
    setType(type)
  }

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content"
        translucent 
        backgroundColor={theme.colors.primary}  
      />
      <HeaderNavigation title={'Todas as atividades'} />
      <Switch type={type} handleSwitchType={handleSwitchType} />
      <View style={styles.list}>
        <FlatList 
          data={dataBasedType}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Budget data={item} type={type} />
          )}
        />
      </View>
    </View>
  )
}