/**
 * Navigate with `history.push` from `react-router-dom` props.
 *
 * @returns {Function} The callback funcion.
 *
 * @example
 * ```jsx
 * // ...
 * <a onClick={pushNavigate(props, '/path')}
 * ```
 */
export function pushNavigate(history, to, options = {}) {
  // payload
  const data = {
    ...options,
    pathname: to,
  };

  return function fn() {
    history.push(data);
  };
}

/**
 * Navigate to modal with `history.push` from `react-router-modal-gallery` props.
 *
 * @returns {Function} The callback function
 *
 * @example
 * ```jsx
 * // ...
 * <a onClick={modalNavigate(props, '/modal-path')}
 * ```
 */
export function modalNavigate(history, to, options = {}) {
  const navigateOptions = {
    ...options,
    state: options.state ? { ...options.state, modal: true } : { modal: true },
  };

  return pushNavigate(history, to, navigateOptions);
}
