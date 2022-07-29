const HTTP_SERVER = {
  SERVER_LOCAL_PATH: 'http://localhost:3000',

  async GET(endpoint) {
    try {
      const data = await fetch(`${this.SERVER_LOCAL_PATH}/${endpoint}`);
      return data.json();
    } catch (e) {
      return undefined;
    }
  },

  async POST(endpoint, data) {
    try {
      const response = await fetch(`${this.SERVER_LOCAL_PATH}/${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json',
        },
      });
      if (response === undefined) {
        return undefined;
      } else {
        return response.json();
      }
    } catch (e) {
      return undefined;
    }
  },
};

export default HTTP_SERVER;
