function authHeader() {
    const getToken = "TOKEN";
  if (getToken != null) {
      return {
        "Content-Type": "application/json",
        Authorization: `Token ${getToken}`,
      };
    } else {
      return {
        "Content-Type": "application/json",
        Accept: "application/json",
      };
    }
  }


  const config = {
    api: "http://localhost:3000/",
  };
  const httpGet = (endpoint) => {
    return fetch(`${config.api}${endpoint}`, {
      headers: authHeader(),
    })
      .then((response) => handleResponse(response))
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        throw Error(error);
      });
  };
  const httpPost = (endpoint, data) => {
    return fetch(`${config.api}${endpoint}`, {
      method: "post",
      body: data ? JSON.stringify(data) : null,
      headers: authHeader(),
    })
      .then((response) => handleResponse(response))
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        throw Error(error);
      });
  };
  
  const httpPut = (endpoint, data) => {
    return fetch(`${config.api}${endpoint}`, {
      method: "PUT",
      body: data ? JSON.stringify(data) : null,
      headers: authHeader(),
    })
      .then((response) => handleResponse(response))
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        throw Error(error);
      });
  };
  const httpDelete = (endpoint, data) => {
    return fetch(`${config.api}${endpoint}`, {
      method: "delete",
      headers: authHeader(),
    })
      .then((response) => handleResponse(response))
      .then((response) => response)
      .catch((error) => {
        console.error(error);
        throw Error(error);
      });
  };
  const handleResponse = (response) => {
    return response.json();
  };
  export default {
    httpGet,
    httpPost,
    httpPut,
    httpDelete,
  };
  