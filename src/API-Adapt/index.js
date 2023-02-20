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

