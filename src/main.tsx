import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { ToDoListPage } from './pages/ToDoListPage';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <ToDoListPage/>
  </StrictMode>
);