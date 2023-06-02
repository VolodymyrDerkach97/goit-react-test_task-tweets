import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/tweets">Tweets</NavLink>
    </nav>
  );
};
export default Navigation;
