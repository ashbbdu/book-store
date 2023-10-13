
const token = localStorage.getItem("token") ? localStorage.getItem("token") : null;
function authHeader() {

  if (token != null) {
      return {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      };
    } else {
      return {
        "Content-Type": "application/json",
        Accept: "application/json",
      };
    }
  }


  const config = {
    api: "http://localhost:4000/api/v1",
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
  const httpPost = async (endpoint, data) => {
    console.log(endpoint , JSON.stringify(data) , "endpoint")
    return await fetch(`${config.api}${endpoint}`, {
      method: "post",
      body: data ? JSON.stringify(data) : null,
      headers: authHeader(),
    })
      .then((response) => handleResponse(response))
      .then((response) => response)
      .catch((error) => {
        console.error(error , "error");
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
    return  response.json();
  };
  export default {
    httpGet,
    httpPost,
    httpPut,
    httpDelete,
  };
  