import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import { styles } from './styles'

import { Header } from '../../components/Header'
import { BudgetsSingle } from '../../components/BudgetsSingle'
import { Title } from '../../components/Title'
import { Budget } from '../../components/Budget'
import { HeaderList } from '../../components/HeaderList'

import { theme } from '../../global/styles/theme'
import { useData } from '../../context/data'

export function Home() {
  const { loading, data, totalInput, totalSpeding } = useData()
  
  if(loading) return <ActivityIndicator size='large' color={theme.colors.primary} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} />

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.wrapper}>
        <Title title="Ganhos e Gastos" />
        <View style={styles.budgets}>
          <BudgetsSingle title="Entradas totais" value={totalInput} />
          <BudgetsSingle title="Gastos Mensais" value={totalSpeding} />
        </View>
      </View>

      <View style={[styles.wrapper]}>
        <HeaderList title="Últimas Atividades" type="spending" />
        {
          data.map((item, index) => {
            if(index > 3) {
              return;
            }else {

              return <Budget key={item.id} data={item} type={item.type_data} /> 
            }            
          })
        }
      </View>
    </View>
  )
}