import { createStore } from 'redux';

import rootReducer from '../../../store/modules/rootReducer';

beforeEach(() => {
  global.mockStore = createStore(rootReducer);
});
