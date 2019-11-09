import {FETCH_PRODUCTS , CREATE_PRODUCTS} from '../Actions/Types/index';

const initialState = {
    products:[],
    product:{}
};

export default (state=initialState, action) => {
  
      switch(action.type){        
        case FETCH_PRODUCTS:
            return {
                ...state,
                products:action.payload
            }
        default:
            return state;
    }
}
