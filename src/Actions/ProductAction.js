import { FETCH_PRODUCTS } from "./Types";

export const fetchProducts = () => dispatch => {

        fetch('http://127.0.0.1:5000/api/v1/products')
        .then(res => res.json().then(data =>dispatch({
            type:FETCH_PRODUCTS,
            payload:data.products
        })));
};