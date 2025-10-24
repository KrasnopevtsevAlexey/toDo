import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './feature/todoList'
import { loadFromLocalStorage, saveToLocalStorage } from './helpers/storage'

// Сначала создаем тип состояния
export type RootState = {
  todoList: ReturnType<typeof todoReducer>
}



export const store = configureStore({
  reducer: {
    todoList: todoReducer
  },
  preloadedState: loadFromLocalStorage()
})

store.subscribe(() => saveToLocalStorage(store.getState()))

// Экспортируем типы
export type AppRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

