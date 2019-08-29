const parseUrl = (url) => {
  let queryString = url.toString().split("Search ")[1];
  let arrayParams = queryString.split("&");
  let params = {};

  arrayParams.map(item => {
    let arr = item.split("=");
    params[arr[0]] = arr[1];
  });

  return params;
};

export { parseUrl };
