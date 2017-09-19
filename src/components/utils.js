export function isDefined (obj) {
  return typeof obj !== 'undefined';
}

export const getMatchesProperty = HTMLElementPrototype => {
  return [
    'webkitMatchesSelector', 'msMatchesSelector', 'matches',
  ].filter((p) => p in HTMLElementPrototype).pop();
}

export const MATCHES = getMatchesProperty(HTMLElement.prototype);
