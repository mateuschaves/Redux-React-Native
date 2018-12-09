import axios from 'axios';

export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const DATA_UNAVAILABLE = 'DATA_UNAVAILABLE';

const baseURL = 'https://jsonplaceholder.typicode.com/';



export function getData(){
    return (dispatch) => {
        const request = await axios.get(`${baseURL}/posts`);
        if(request.status > 400){
            dispatch({ type: DATA_UNAVAILABLE, data: null, erros: ['Falha ao carregar dados !'] });
        }else{
            dispatch({type:DATA_AVAILABLE, data: request.data, erros: [] });
        }
    }
}