import axios from "axios"

export const url="https://mahalla-api.herokuapp.com/mahalla/"

export const httpRequest=(config)=>{
console.log(config)
    return(axios({
        ...config
    }))
}