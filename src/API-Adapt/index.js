const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2301-FTB-ET-WEB-FT/";

function makeHeaders(token) {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}
export const getPosts = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}posts`, {
      method: "GET",
      headers: makeHeaders(token),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const logInPost = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}users/login`, {
      method: "POST",
      headers: makeHeaders(),
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const registerPost = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}users/register`, {
      method: "POST",
      headers: makeHeaders(),
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const makeNewPost = async (
  token,
  title,
  description,
  price,
  location,
  willDeliver
) => {
  try {
    if (location === "") {
      location = "[On Request]";
    }
    const response = await fetch(`${BASE_URL}posts`, {
      method: "POST",
      headers: makeHeaders(token),
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: `$${price}`,
          location: location,
          willDeliver: willDeliver,
        },
      }),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}users/me`, {
      method: "GET",
      headers: makeHeaders(token),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (token, id) => {
  try {
    const response = await fetch(`${BASE_URL}posts/${id}`, {
      method: "DELETE",
      headers: makeHeaders(token),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const sendMessageAPI = async (token, id, message) => {
  try {
    const response = await fetch(`${BASE_URL}posts/${id}/messages`, {
      method: "POST",
      headers: makeHeaders(token),
      body: JSON.stringify({
        message: {
          content: message,
        },
      }),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const editPostPatch = async (token, id, edit) => {
  try {
    const response = await fetch(`${BASE_URL}posts/${id}`, {
      method: "PATCH",
      headers: makeHeaders(token),
      body: JSON.stringify({
        post: edit,
      }),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};
