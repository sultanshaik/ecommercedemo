import axios from 'axios'
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAILURE
} from '../constants/productConstants'

export const listProducts = () =>{
    const apiFetch = async (dispatch)=>{
        try{
            dispatch({type: PRODUCT_LIST_REQUEST})
            const {data} = await axios.get('/pi/products');
            dispatch({
                type: PRODUCT_LIST_SUCCESS,
                payload: data
            })
        }
        catch(error){
            dispatch({
                type: PRODUCT_LIST_FAILURE,
                payload : error.response && error.response.data.message
                ? error.response.data.message
                :error.message
            })
        }
    }
    return apiFetch;
}