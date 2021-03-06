import {all,call, put, takeLatest} from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../clothing/firebase/firebase.utils';
import { fetchCollectionsSuccess,fetchCollectionsFailure } from './shop.actions';

export function* fetchCollectionsAsync() {
  yield console.log('i am fired');

  try{
    const collectionsRef = firestore.collection('collections');
    const snapshot = yield collectionsRef.get();
    const collectionsMap = yield call (convertCollectionsSnapshotToMap,snapshot);
   yield put (fetchCollectionsSuccess(collectionsMap))
  }catch(error){yield put (fetchCollectionsFailure(error.message))

  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  )
};

export function* shopSagas() {
  yield all ([
    call(fetchCollectionsStart)
  ])
}