import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { query, collection, db, orderBy, limit, onSnapshot } from '../services/firebase'

type DataContextProviderProps = {
  children: ReactNode
}

type Data = {
  id: string,
  name: string,
  categoryId?: string,
  date: string,
  type_data: string,
  price: number
  created_at: Date
}

type ContextProps = {
  data: Data[],
  loading: boolean
  totalInput: number
  totalSpeding: number
}

const DataContext = createContext<ContextProps>({} as ContextProps)

function DataContextProvider({children}: DataContextProviderProps) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<any[]>([])
  const [totalInput, setTotalInput] = useState(0)
  const [totalSpeding, setTotalSpeding] = useState(0)
  useEffect(() => {
    setLoading(true)
    const unsubscribe = onSnapshot(query(collection(db, 'data'), limit(4), orderBy('created_at', 'desc')), (docs) => {
      let data: Data[] = []
      docs.forEach(doc => {
          data.push({
            id: doc.id,
            ...doc.data()
          } as Data)
      });
      data.map((item) => {
        if(item.type_data === 'spendings') {
          return setTotalSpeding(prevState => prevState += Number(item.price))
        }else if(item.type_data === 'inputs') {
          return setTotalInput(prevState => prevState += Number(item.price))
        }
      })

      setData(data)
      setLoading(false)
    }) 
    return () => unsubscribe()
  }, [])

  return (
    <DataContext.Provider value={{
      data,
      loading,
      totalInput,
      totalSpeding
    }}>
      {children}
    </DataContext.Provider>
  )
}

function useData() {
  const context = useContext(DataContext)

  return context
}

export {
  useData,
  DataContextProvider
} 