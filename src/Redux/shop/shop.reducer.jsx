import SHOP_DATA from '../../clothing/shop.data';
import ShopActionTypes from './shop.types';
const iState ={
  collections:SHOP_DATA,
  isFetching:false,
  errorMessage:undefined
};

const shopReducer = (state=iState,action) =>{
  switch(action.type){
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return{
        ...state,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return{
        ...state,
        isFetching:false,
        collections:action.payload
      };
      case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return{
        ...state,
        isFetching:false,
        errorMessage:action.payload
      };
    default:
      return state;
  };
}

export default shopReducer;