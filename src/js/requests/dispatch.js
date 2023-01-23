function dispatch(...queryParams) {
  const params = new URLSearchParams(window.location.search);

  return queryParams.reduce((result, paramName) => {
    const paramValue = params.get(paramName);
    result[paramName] = paramValue;

    return result;
  }, { });
}

export default dispatch;
