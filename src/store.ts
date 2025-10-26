import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './feature/todoList'
import themeReducer from './feature/themeList'
import { loadFromLocalStorage, saveToLocalStorage } from './helpers/storage'


export type RootState = {
  themeList: any
  todoList: ReturnType<typeof todoReducer>
}



export const store = configureStore({
  reducer: {
    todoList: todoReducer,
    themeList: themeReducer
  },
  preloadedState: loadFromLocalStorage()
})

store.subscribe(() => saveToLocalStorage(store.getState()))


export type AppRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

