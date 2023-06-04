import { useEffect } from "react";
import { HomeWrapperStyled } from "./Home.styled";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  const location = useLocation();
  return (
    <HomeWrapperStyled>
      <h1>Home Page </h1>
      <p>
        Welcome to the home page of the Tweets app. To view tweet cards, go to
        the{" "}
        <Link to="/tweets" state={{ from: location }}>
          Tweets
        </Link>{" "}
        tab
      </p>
    </HomeWrapperStyled>
  );
};
export default Home;
