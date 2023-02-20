const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2301-FTB-ET-WEB-FT/";

function makeHeaders(token) {
  return {
    "Content-Type": "application/json",
    Authorization: token,
  };
}

export const getPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}posts`);
    const result = await response.json();

    console.log(result);
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

    const result = response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const registerAPI = async (username, password) => {
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
