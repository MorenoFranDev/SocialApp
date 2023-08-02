import axios from "axios";

export const getUser = async (data) => {
  try {
    const response = await axios.post("http://localhost:3001/login", data);
    // console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return 404
  }
};

export const registerUser = async (data) => {
  try {
    const response = await axios.post("http://localhost:3001/register", data);
    return response;
  } catch (error) {
    return 404
  }
};

export const sendPost = async (data, header) => {
  const response = await axios.post("http://localhost:3001/upload", data, {
    headers: { Authorization: header, "Content-Type": "multipart/form-data" },
  });
  return response
};

export const getFollowsPost = async () => {
  const response = await axios.get("http://localhost:3001/follows-post");
  return response.data;
};

export const getGeneralPost = async (header) => {
  const response = await axios.get("http://localhost:3001/general-post", {
    headers: { Authorization: header },
  });
  if (response.status === 200) return response.data;
  throw new Error("Error in get Post");
};

export const setFollow = async (data, header) => {
  const response = await axios.post("http://localhost:3001/new-follow", data, {
    headers: { Authorization: header },
  });
  return response.data;
};

export const updateProfile = async (data, header) => {
  const response = await axios.put(
    "http://localhost:3001/update-profile/" + header,
    data,
    {
      headers: { Authorization: header, "Content-Type": "multipart/form-data" },
    }
  );
  return response;
};

export const getPicInfo = async (id) => {
  const response = await axios.get("http://localhost:3001/post/" + id);
  return response;
};

export const sendComment = async (data) => {
  console.log(data);
  // const response = await axios.post("http://localhost:3001/post/"+postId+"/comment",data,{headers: {"Authorization":header}})
};

export const getPersonPost = async (username) => {
  const response = await axios.get("http://localhost:3001/person/" + username);
  console.log(response)
  if (response.status === 200) {
    return response.data;
  } else return alert("Usuario sin post");
};
