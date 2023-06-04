import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchUsers } from "redux/operations";
import {
  selectIsFollowing,
  selectStatusFilter,
  selectUsers,
  selectVisibleTweets,
} from "redux/selectors";
import { fetchNumberUSersApi } from "service/usersApi";
import {
  ButtonWrapperStyled,
  FilterMessageStyled,
  OptionsPageWrapper,
} from "./Tweets.styled";

import BackLink from "components/BackLink/BackLink";
import ButtonLoadMore from "components/Buttons/ButtonLoadMore";
import { StatusFilter } from "components/StatusFilter/StatusFilter";
import TweetsList from "components/TweetsList/TweetsList";

import { IoIosArrowRoundBack } from "react-icons/io";
import { IconContext } from "react-icons";

const Tweets = () => {
  const [page, setPage] = useState(2);
  const [totalUsersApi, settTotalUsersApi] = useState(0);

  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const visibleUsers = useSelector(selectVisibleTweets);
  const statusFilter = useSelector(selectStatusFilter);
  const IsFollowingUsers = useSelector(selectIsFollowing);

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/");

  useEffect(() => {
    document.title = "Tweets";
  }, []);

  useEffect(() => {
    if (users.length !== 0) {
      return;
    }

    dispatch(fetchUsers(1));
  }, [dispatch, users]);

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
    dispatch(fetchUsers(page));
    setPage((prev) => prev + 1);
  };
  console.log("visibleUsers.length", visibleUsers.length);
  console.log("totalUsersApi", totalUsersApi);
  console.log("IsFollowingUsers.length", IsFollowingUsers.length);
  const isNotFoundFilter = visibleUsers.length === 0;
  const visibleLoadMore =
    totalUsersApi > visibleUsers.length &&
    visibleUsers.length !== 0 &&
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
