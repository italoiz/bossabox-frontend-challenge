import MockAdapter from 'axios-mock-adapter';
import { api } from '../../../services';

beforeAll(() => {
  global.mockApi = new MockAdapter(api);
});

afterEach(() => {
  global.mockApi.resetHandlers();
  global.mockApi.reset();
});
