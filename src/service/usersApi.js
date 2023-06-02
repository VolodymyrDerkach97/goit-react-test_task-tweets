import axios from "axios";
axios.defaults.baseURL = `https://6478f441362560649a2eb566.mockapi.io/users`;

export const fetchUsersApi = async (page) => {
  console.log(page);
  try {
    const res = await axios.get("?limit=3&page=1");

    return res;
  } catch (error) {
    console.log(error.message);
  }
};
export const loadMoreApi = async (page) => {
  console.log(page);
  try {
    const res = await axios.get(`?limit=3&page=${page}`);

    return res;
  } catch (error) {
    console.log(error.message);
  }
};
