// ProductsList.ts
import React, { createContext, Dispatch, SetStateAction } from 'react'
import { ImageSourcePropType } from 'react-native';

  export interface Product {
    id: string;
    name: string;
    price: number;
    food: ImageSourcePropType;
    quantity: number;
  }
  
  interface ProductsContextType {
    product: Record<string, Product>; // object where keys are product IDs
    addProduct: Dispatch<SetStateAction<Record<string, Product>>>;
  }
  
  export const ProductsList = createContext<ProductsContextType>({
    product: {},
    addProduct: () => {},
  });