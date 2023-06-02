import axios from "axios";
axios.defaults.baseURL = `https://6478f441362560649a2eb566.mockapi.io/users`;

export const fetchUsersApi = async (page) => {
  try {
    const res = await axios.get("?limit=3&page=1");

    return res;
  } catch (error) {
    console.log(error.message);
  }
};
export const loadMoreApi = async (page) => {
  try {
    const res = await axios.get(`?limit=3&page=${page}`);

    return res;
  } catch (error) {
    console.log(error.message);
  }
};
// export const changeFollowersApi = async ({ id, ...data }) => {
//   console.log(data);
//   try {
//     const res = await axios.put(`/${id}`, data);

//     return res;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
