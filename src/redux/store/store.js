import { createStore } from "redux";
import rootReducer from "../reducer/rootReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'reducer',
    storage: storage,
    whitelist: ['likeReducer', 'ShopReducer']
}

const PersistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(PersistedReducer);
const persistor = persistStore(store)

export { store, persistor };
