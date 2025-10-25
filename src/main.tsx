
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";

import {RouterProvider} from "react-router-dom";

import { router } from "./router";
import { store } from './store'
import { Provider } from 'react-redux'
import { GlobalStyle } from "./styles/GlobalStyle";



const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
     <Provider store={store}>
      <GlobalStyle/>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
