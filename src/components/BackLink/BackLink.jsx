import PropTypes from "prop-types";

import { BackLinkStyled } from "./BackLink.styled";

const BackLink = ({ to, children }) => {
  return <BackLinkStyled to={to}>{children}</BackLinkStyled>;
};

export default BackLink;

BackLink.propTypes = {
  to: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.shape({
      hash: PropTypes.string,
      key: PropTypes.string,
      pathname: PropTypes.string,
      search: PropTypes.string,
    }),
  }),
  children: PropTypes.string,
};
