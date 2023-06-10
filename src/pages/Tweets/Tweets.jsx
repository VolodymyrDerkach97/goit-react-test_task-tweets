import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "redux/operations";
import {
  selectStatusFilter,
  selectUsers,
  selectVisibleTweets,
} from "redux/selectors";

import { fetchNumberUSersApi } from "service/usersApi";

import BackLink from "components/BackLink/BackLink";
import ButtonLoadMore from "components/Buttons/ButtonLoadMore";
import { StatusFilter } from "components/StatusFilter/StatusFilter";
import TweetsList from "components/TweetsList/TweetsList";

import {
  ButtonWrapperStyled,
  FilterMessageStyled,
  OptionsPageWrapper,
} from "./Tweets.styled";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IconContext } from "react-icons";

const Tweets = () => {
  const [page, setPage] = useState(1);
  const [totalUsersApi, settTotalUsersApi] = useState(0);

  const dispatch = useDispatch();

  const users = useSelector(selectUsers);

  const visibleUsers = useSelector(selectVisibleTweets);
  const statusFilter = useSelector(selectStatusFilter);

  const tweetsPerPage = 3;

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/");

  useEffect(() => {
    document.title = "Tweets";
  }, []);

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
    setPage(Math.ceil(users.length / tweetsPerPage) + 1);
  };

  const isNotFoundFilter = visibleUsers.length === 0;

  const visibleLoadMore =
    totalUsersApi > visibleUsers.length &&
    visibleUsers.length !== 0 &&
    totalUsersApi !== users.length &&
    (statusFilter === "all" || statusFilter === "follow");

  return (
    <>
      <OptionsPageWrapper>
        <IconContext.Provider value={{ size: "25px" }}>
          <BackLink to={backLink.current}>
            {<IoIosArrowRoundBack />}Go back
          </BackLink>
        </IconContext.Provider>
        <StatusFilter />
      </OptionsPageWrapper>

      <TweetsList />
      {isNotFoundFilter && (
        <FilterMessageStyled>
          Nothing was found for the selected filter
        </FilterMessageStyled>
      )}
      {visibleLoadMore && (
        <ButtonWrapperStyled>
          <ButtonLoadMore onLoadMore={onLoadMore} />
        </ButtonWrapperStyled>
      )}
    </>
  );
};
export default Tweets;
