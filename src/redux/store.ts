import firebase from '../firebase';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { getFirebase, firebaseReducer } from 'react-redux-firebase';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore';
import { authReducer } from './reducers/authReducer';
import { cardReducer } from './reducers/cardReducer';
import { stackReducer } from './reducers/stackReducer';

const rootReducer = combineReducers({
  card: cardReducer,
  auth: authReducer,
  stack: stackReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument(getFirebase))
);

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  attachAuthIsReady: true,
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};
export default store;
