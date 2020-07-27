import { takeEvery, call, put } from "redux-saga/effects";
import { getList } from '../services'

//Fetch Product List
export function* handleFetchList() {
  try {
    const res = yield call(getList);
    const resData = res.data.items;
    const newResData = [];
    resData.map(currenObject => {
      const newCurrentObject = {
        "name": currenObject.name,
        "price": currenObject.price,
        "quantity": 0,
        "total": 0
      };
      newResData.push(newCurrentObject);
    })
    yield put({ type: 'FETCH_LIST_SUCCESS', data: newResData, subTotalAmount: 0 });
  } catch (error) {
    yield put({ type: 'FETCH_LIST_ERROR', error: error.message });
  }
  return
}

export function* watchFetchList() {
  yield takeEvery('FETCH_LIST', handleFetchList);
}



// Update Product Quantity
export function* updateProductQuantity(params) {

  try {
    const resData = params.Olddata;
    const newResData = [];
    let subTotalAmount = 0;
    resData.map( ( currenObject, index ) => {
      const newCurrentObject = {
        "name": currenObject.name,
        "price": currenObject.price,
        "quantity": currenObject.quantity,
        "total": currenObject.total
      };
      if(params.activeValue == index){
        if(params.activity == "plus"){
          const currenObjectquantity = currenObject.quantity + 1;
          newCurrentObject.quantity = currenObject.quantity + 1;
          newCurrentObject.total = currenObjectquantity * currenObject.price;
          
        }
        if(params.activity == "minus" && currenObject.quantity > 0 ){
          const currenObjectquantity = currenObject.quantity - 1;
          newCurrentObject.quantity = currenObject.quantity - 1;
          newCurrentObject.total = currenObjectquantity * currenObject.price;
        }
      }
      subTotalAmount += newCurrentObject.total;
      newResData.push(newCurrentObject);

    })
    
    yield put({ type: 'UPDATE_PRODUCT_QUANTITY_SUCCESS', data: newResData, subTotalAmount });
  } catch (error) {
    yield put({ type: 'UPDATE_PRODUCT_QUANTITY_ERROR', error: error.message });
  }
  return
}

export function* watchUpdateProductQuantity() {
  yield takeEvery('UPDATE_PRODUCT_QUANTITY', updateProductQuantity);
}



// Update Form Data


export function* updateFormData(params) {
  try {
    const userFormData = params.Olddata;

    const name = params.name;
    const value = params.value;
    userFormData[name] = value;
    
    yield put({ type: 'UPDATE_FORM_DATA_SUCCESS', userFormData });
  } catch (error) {
    yield put({ type: 'UPDATE_FORM_DATA_ERROR', error: error.message });
  }
  return
}

export function* watchUpdateFormData() {
  yield takeEvery('UPDATE_FORM_DATA', updateFormData);
}



// Empty Cart Data

export function* emptyCartData(params) {
  try {
    const resData = params.Olddata;
    const newResData = [];
    let subTotalAmount = 0;
    const userFormData = {};
    resData.map( ( currenObject, index ) => {
      const newCurrentObject = {
        "name": currenObject.name,
        "price": currenObject.price,
        "quantity": 0,
        "total": 0
      };
      newResData.push(newCurrentObject);
    })
    yield put({ type: 'EMPTY_CART_DATA_SUCCESS', data: newResData, subTotalAmount,userFormData });
  } catch (error) {
    yield put({ type: 'EMPTY_CART_DATA_ERROR', error: error.message });
  }
  return
}

export function* watchEmptyCartData() {
  yield takeEvery('EMPTY_CART_DATA', emptyCartData);
}