import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, StatusBar, Alert } from 'react-native'
import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker';
import { HeaderNavigation } from '../../components/HeaderNavigation'
import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { Categories } from '../../components/Categories';
import {addDoc, db, collection} from '../../services/firebase'

export function CreateBudget() {
  const [addType, setAddType] = useState('spendings')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [categorySelected, setCategorySelected] = useState('')
  const [date, setDate] = useState('')
  const [loading, setLoading] = useState(false)

  function handleCategorySelect(category: string) {
    categorySelected === category ? setCategorySelected('') : setCategorySelected(category)
  }

  async function handleAddBudget() {
    setLoading(true)
    const model: any = {
      name,
      date,
      price,
      type_data: addType,
      created_at: Date.now()
    }
    if(addType === 'spendings') model.categoryId = categorySelected

    if(name === '' || price === '' || date === '') return;

    try {
      const docRef = await addDoc(collection(db, 'data'), model)
      setLoading(false)
      setDate('')
      setName('')
      setPrice('')
      setCategorySelected('')
      Alert.alert(`A informação do tipo ${addType === 'spendings' ? 'Gasto' : 'Entrada'} foi criada com sucesso!`)
    } catch (error) {
      setLoading(false)
      console.error("Error adding document: ", error);
    }
  }

  return (
    <ScrollView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
          <StatusBar 
            barStyle="light-content"
            translucent 
            backgroundColor={theme.colors.primary}  
          />
            <HeaderNavigation title="Adicionar" />
            <View style={styles.content}>
              <View style={styles.formControl}>
                <Text style={styles.title}>Adicionar:</Text>
                <View style={styles.picker}>
                  <Picker
                    selectedValue={addType}
                    onValueChange={(itemValue) =>
                      setAddType(itemValue)
                    }
                    mode="dialog"
                    dropdownIconColor={theme.colors.heading}
                    
                  >
                      <Picker.Item color={theme.colors.heading} fontFamily={theme.fonts.text400} label="Gastos" value="spendings" />
                      <Picker.Item color={theme.colors.heading} fontFamily={theme.fonts.text400} label="Ganhos" value="inputs" />
                  </Picker>
                </View>
              </View>
            {
              addType === 'spendings' && (
                <View style={styles.wrapper}>
                  <Text style={styles.title}>Categoria:</Text>
                  <Categories categorySelected={categorySelected} handleCategorySelect={handleCategorySelect} />
                </View>
              )
            }
              <View style={styles.formControl}>
                <Text style={styles.title}>Nome:</Text>
                <TextInput keyboardType="default" style={styles.input} value={name} onChangeText={value => setName(value)} />
              </View>

              <View style={styles.formControl}>
                <Text style={styles.title}>Data:</Text>
                <TextInput keyboardType="default" placeholder="Ex: 12.07" style={styles.input} value={date} onChangeText={value => setDate(value)} />
              </View>

              <View style={styles.formControl}>
                <Text style={styles.title}>Valor:</Text>
                <TextInput keyboardType="numeric" style={styles.input} value={price} onChangeText={value => setPrice(value)} />
              </View>

              
              <View style={[styles.formControl, loading && { opacity: 0.4 }]}>
                <TouchableOpacity
                  disabled={loading}
                  activeOpacity={.8} 
                  style={styles.button}
                  onPress={handleAddBudget}  
                >
                  <Text style={styles.buttonText}>Adicionar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
    </ScrollView>
  )
}