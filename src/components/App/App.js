import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../page/Home";
import Tweets from "../../page/Tweets";
import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { fetchUsers } from "redux/operations";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
