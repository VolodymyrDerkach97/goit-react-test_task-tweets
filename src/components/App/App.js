import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../page/Home";
import Tweets from "../../page/Tweets";

import { ContainerStyled } from "./App.styled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
