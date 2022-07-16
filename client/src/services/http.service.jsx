const HTTP_SERVER = {
  SERVER_LOCAL_PATH: 'http://localhost:3000',

  async GET(endpoint) {
    try {
      const data = await fetch(`${this.SERVER_LOCAL_PATH}/${endpoint}`);
      return data.json();
    } catch (e) {
      return null;
    }
  },
};

export default HTTP_SERVER;
