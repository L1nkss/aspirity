const headerOptions = {
  'Content-Type': 'application/json', Accept: 'application/json',
};

const api = {
  sendRequest: async (url, method = 'GET', body = null, headers = headerOptions) => {
    if (body) {
      body = JSON.stringify(body);
    }
    try {
      const response = await fetch(url, { method, body, headers });
      const data = await response.json();

      return data;
    } catch (e) {
      return 500;
    }
  },
};

export default api;
