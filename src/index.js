import React from "react";
import ReactDOM from "react-dom/client";
import { LogIn, Main, Register, MainPage, Messages, Edit } from "./components";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route index element={<MainPage />} />
      <Route path="login" element={<LogIn />} />
      <Route path="register" element={<Register />} />
      <Route path="messages" element={<Messages />} />
      <Route path={`/edit/:id`} element={<Edit/>}/>
    </Route>
  )
);

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={router} />);
