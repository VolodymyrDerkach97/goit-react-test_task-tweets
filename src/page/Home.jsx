import { useEffect } from "react";
import { HomeWrapperStyled } from "./Home.styled";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <HomeWrapperStyled>
      <h1>Home Page </h1>
      <p>
        Welcome to the home page of the Tweets app. To view tweet cards, go to
        the <Link to={"/tweets"}>Tweets</Link> tab
      </p>
    </HomeWrapperStyled>
  );
};
export default Home;
