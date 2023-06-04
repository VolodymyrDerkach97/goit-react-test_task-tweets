import { useSelector, useDispatch } from "react-redux";

import { statusFilters } from "redux/constants";
import { selectStatusFilter } from "redux/selectors";
import { setStatusFilter } from "redux/filters/filtersSlice";
import {
  OptionStyled,
  SelectStyled,
  SelectWrapperStyled,
} from "./StatusFilter.styled";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    console.log(selectedFilter);
    dispatch(setStatusFilter(selectedFilter));
  };

  return (
    <SelectWrapperStyled>
      <SelectStyled value={filter} onChange={handleFilterChange}>
        <OptionStyled value={statusFilters.all}>All</OptionStyled>
        <OptionStyled value={statusFilters.follow}>Follow</OptionStyled>
        <OptionStyled value={statusFilters.following}>Following</OptionStyled>
      </SelectStyled>
    </SelectWrapperStyled>
  );
};
