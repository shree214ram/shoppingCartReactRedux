import { all } from 'redux-saga/effects';
import { watchFetchList , watchUpdateProductQuantity , watchUpdateFormData, watchEmptyCartData } from './homeSaga.js'

export default function* rootSaga() {
    yield all([watchFetchList(), watchUpdateProductQuantity(), watchUpdateFormData(), watchEmptyCartData()]);
}


