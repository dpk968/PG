import { configureStore } from '@reduxjs/toolkit'
import contentSlice from '../Slices/UserSlice'
import LaptopSlice from '../Slices/LaptopSlice'
import MobileSclice from '../Slices/MobileSclice'

export const store = configureStore({
  reducer: {
    content: contentSlice,
    laptop:LaptopSlice,
    mobile:MobileSclice
  },
})