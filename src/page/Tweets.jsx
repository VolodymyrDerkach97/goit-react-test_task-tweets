import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchUsers } from "redux/operations";
import { selectUsers } from "redux/selectors";
import { fetchNumberUSersApi } from "service/usersApi";
import { ButtonWrapperStyled, OptionsPageWrapper } from "./Tweets.styled";

import BackLink from "components/BackLink/BackLink";
import ButtonLoadMore from "components/Button/ButtonLoadMore";
import { StatusFilter } from "components/StatusFilter/StatusFilter";
import TweetsList from "components/TweetsList/TweetsList";

const Tweets = () => {
  const [page, setPage] = useState(1);
  const [totalUsersApi, settTotalUsersApi] = useState(0);

  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/");

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fetchNumberUSersApi();
        settTotalUsersApi(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetch();
  }, []);

  const onLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <OptionsPageWrapper>
        <BackLink to={backLink.current}>Go back</BackLink>
        <StatusFilter />
      </OptionsPageWrapper>

      {/* <IconContext.Provider value={{ size: '25px' }}>
        <BackLink to={backLink.current}>
          {<IoIosArrowRoundBack />}Go back
        </BackLink>
      </IconContext.Provider> */}
      <TweetsList />
      <ButtonWrapperStyled>
        {totalUsersApi > users.length && (
          <ButtonLoadMore onLoadMore={onLoadMore} />
        )}
      </ButtonWrapperStyled>
    </>
  );
};
export default Tweets;
