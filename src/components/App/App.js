import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../page/Home";
import Tweets from "../../page/Tweets";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "redux/operations";
import { ContainerStyled } from "./App.styled";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <ContainerStyled>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </ContainerStyled>
  );
};

export default App;
