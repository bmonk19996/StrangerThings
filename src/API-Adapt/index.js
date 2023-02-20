const BASE_URL = "https://strangers-things.herokuapp.com/api/2301-FTB-ET-WEB-FT/"

export const getPosts = async ()=>{
    try{
        const response = await fetch(BASE_URL + "posts");
        const result = await response.json()

        console.log(result)
        return result

    }catch(error){
        console.log(error)
    }
}

export const logIn = async (username, password)=> {
 try{
//     const response = fetch(`${BASE_URL}users/logins`, {
//   method: "POST",
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     user: {
//       username: 'superman27',
//       password: 'krypt0n0rbust'
//     }
//   })

const response = await fetch(`${BASE_URL}users/logins`, {
    method:'POST', 
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
        user: {
            username: username, 
            password: password
        }
    })
})

const result = response.json();

return result;

 }catch(error){
    console.log(error);
 }
}

