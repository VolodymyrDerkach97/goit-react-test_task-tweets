import axios from "axios";
axios.defaults.baseURL = `https://6478f441362560649a2eb566.mockapi.io/users`;

export const fetchUsersApi = async (page) => {
  const res = await axios.get(`?limit=3&page=${page}`);
  return res;
};

export const fetchNumberUSersApi = async () => {
  try {
    const res = await axios.get();
    return res.data.length;
  } catch (error) {
    console.log(error);
  }
};

export const changeFollowersApi = async ({ id, ...data }) => {
  const res = await axios.put(`/${id}`, data);
  return res;
};
