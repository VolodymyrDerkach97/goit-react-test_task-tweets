import { StatusFilter } from "components/StatusFilter/StatusFilter";
import TweetsList from "components/TweetsList/TweetsList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, loadMoreUsers } from "redux/operations";
import { selectUsers } from "redux/selectors";
import { fetchAllUsersApi } from "service/usersApi";

const Tweets = () => {
  const [page, setPage] = useState(2);
  const [totalUsersApi, settTotalUsersApi] = useState(2);

  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

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
      <h2>Tweets</h2>
      <StatusFilter />
      <TweetsList />
      {totalUsersApi > users.length && (
        <button onClick={onLoadMore}>Load more</button>
      )}
    </>
  );
};
export default Tweets;
