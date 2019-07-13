import { pushNavigate, modalNavigate } from '../../../helpers/navigate';

describe('Navigate | Helpers', () => {
  it('should return a function when call pushNavigate function', () => {
    const historyMock = { push: jest.fn() };

    const callback = pushNavigate(historyMock, '/random-route');

    expect(callback).toBeFunction();
  });

  it('should push history when call the callback returned on pushNavigate', () => {
    const historyMock = { push: jest.fn() };

    pushNavigate(historyMock, '/random-route')();

    expect(historyMock.push).toHaveBeenCalledWith(
      expect.objectContaining({
        pathname: '/random-route',
      })
    );
  });

  it('should merge state option when use modalNavigate functions', () => {
    const historyMock = { push: jest.fn() };

    modalNavigate(historyMock, '/random-route', {
      state: { foo: 'bar' },
    })();

    expect(historyMock.push).toHaveBeenCalledWith(
      expect.objectContaining({
        pathname: '/random-route',
        state: {
          modal: true,
          foo: 'bar',
        },
      })
    );
  });
});
