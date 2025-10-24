import { createBrowserRouter } from "react-router-dom";
import { Layouts } from "./Layouts/Layouts";
import { Error } from "./pages/404";
import { ViewList } from "./pages/ViewList";
import { ToDoListPage } from "./pages/ToDoListPage";
import { ViewListItem } from "./pages/ViewListItem";
import todoList from "./feature/todoList";
//import { ToDo } from "./modules/todo-item";


export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layouts />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <ToDoListPage />,
        },

        {
          path: "/list",
          element: <ViewList />,
        },
        {
          path: "/list/:id",
          element: <ViewListItem  />,
        },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ]
  //   { basename: "/app" }
);
