import { useSelector, useDispatch } from "react-redux";

import { statusFilters } from "redux/constants";
import { selectStatusFilter } from "redux/selectors";
import { setStatusFilter } from "redux/filtersSlice";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));

  return (
    <div>
      <button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </button>
      <button
        selected={filter === statusFilters.follow}
        onClick={() => handleFilterChange(statusFilters.follow)}
      >
        follow
      </button>
      <button
        selected={filter === statusFilters.following}
        onClick={() => handleFilterChange(statusFilters.following)}
      >
        following
      </button>
    </div>
  );
};
