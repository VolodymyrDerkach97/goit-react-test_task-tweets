import BackLink from "components/BackLink/BackLink";
import ButtonLoadMore from "components/Button/ButtonLoadMore";
import { StatusFilter } from "components/StatusFilter/StatusFilter";
import TweetsList from "components/TweetsList/TweetsList";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { loadMoreUsers } from "redux/operations";
import { selectUsers } from "redux/selectors";
import { fetchAllUsersApi } from "service/usersApi";
import { OptionsPageWrapper } from "./Tweets.styled";

const Tweets = () => {
  const [page, setPage] = useState(2);
  const [totalUsersApi, settTotalUsersApi] = useState(2);

  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/");

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fetchAllUsersApi();
        settTotalUsersApi(res.data.length);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetch();
  }, []);

  const onLoadMore = () => {
    dispatch(loadMoreUsers(page));
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
      {totalUsersApi > users.length && (
        <ButtonLoadMore onLoadMore={onLoadMore} />
        // <button onClick={onLoadMore}>Load more</button>
      )}
    </>
  );
};
export default Tweets;
