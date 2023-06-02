import TweetsList from "components/TweetsList/TweetsList";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers, loadMoreUsers } from "redux/operations";

const Tweets = () => {
  const [page, setPage] = useState(2);

  const dispatch = useDispatch();
  const onLoadMore = (e) => {
    dispatch(loadMoreUsers(page));
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <h2>Tweets</h2>
      <TweetsList />
      <button onClick={onLoadMore}>ssssssssssssssssss</button>
    </>
  );
};
export default Tweets;
