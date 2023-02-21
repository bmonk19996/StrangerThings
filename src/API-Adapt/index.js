const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2301-FTB-ET-WEB-FT/";

function makeHeaders(token) {
  console.log(token,"api")
  return {
    "Content-Type":"application/json",
    'Authorization' :`Bearer ${token}`,
  };
}
//localStorage.getItem("token")
export const getPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}posts`);
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
      headers:makeHeaders(),
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        }
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
      headers:makeHeaders(),
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

export const makeNewPost = async (token, title, description, price, willDeliver) => {
 try{
  const response = await fetch(`${BASE_URL}posts`, 
  {
    method: 'POST', 
    headers: makeHeaders(token), 
    body: JSON.stringify({
      post: {
        title: title, 
        description: description,
        price: price,
        willDeliver: willDeliver,
      }
    })
  })
  const result = await response.json();

  return result;

 }catch(error){
  console.log(error)
 }
}
