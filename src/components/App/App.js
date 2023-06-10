import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Home from "../../pages/Home/Home";

import { ContainerStyled } from "./App.styled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tweets = lazy(() => import("pages/Tweets/Tweets"));

const App = () => {
  return (
    <ContainerStyled>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={2000} />
    </ContainerStyled>
  );
};

export default App;
