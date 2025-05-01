import React from 'react'
import { ProductsList, Product } from '@/components/ProductsList'
import { Slot } from 'expo-router'

export default function RootLayout() {
  const [product, addProduct] = React.useState<Record<string, Product>>({})

  return (
    <ProductsList.Provider value={{ product, addProduct }}>
      <Slot />
    </ProductsList.Provider>
  )
}
