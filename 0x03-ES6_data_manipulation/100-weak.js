const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const num = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, num);
    if (weakMap.get(endpoint) >= 5) {
      throw new Error('Endpoint load is high');
    }
  } else {
    weakMap.set(endpoint, 1);
  }
}

export { queryAPI, weakMap };
