import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { ToDoListPage } from "./pages/ToDoListPage";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomePages } from "./pages/HomePages";
import { Header } from "./components/Header/Header";
import { ToDo } from "./modules/todo-item";
import { Error } from "./pages/404";
import { ItemDescription } from "./pages/ItemDescription";
import { Layouts } from "./Layouts/Layouts";

const todos: ToDo[] = [
  {
    id: 0,
    text: "первое задание",
    isDone: false,
  },

  {
    id: 1,
    text: "второе задание",
    isDone: true,
  },
  {
    id: 2,
    text: "третье задание",
    isDone: false,
  },

  {
    id: 3,
    text: "четвертое задание",
    isDone: true,
  },
];

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layouts />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <HomePages todos={todos} />,
        },
        {
          path: "/todo",
          element: <ToDoListPage />,
        },
        {
          path: "/list/:id",
          element: <ItemDescription todos={todos} />,
        },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ],
  { basename: "/app" }
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<HomePages todos={todos}/>}></Route>
      <Route path='/list/:id' element={<ItemDescription todos={todos}/>}></Route>
       <Route path='/todo' element={<ToDoListPage />}></Route>
      <Route path='*' element={<Error />}></Route>
    </Routes>
    </BrowserRouter>
     */}
  </StrictMode>
);
