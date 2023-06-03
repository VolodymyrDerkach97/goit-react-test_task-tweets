import { useLocation } from "react-router-dom";
import { StyledNav, StyledNavLink } from "./Navigation.styled";

const Navigation = () => {
  const location = useLocation();
  return (
    <StyledNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/tweets" state={{ from: location }}>
        Tweets
      </StyledNavLink>
    </StyledNav>
  );
};
export default Navigation;
