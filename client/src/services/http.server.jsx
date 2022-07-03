const HTTP_SERVER = {
  SERVER_LOCAL_PATH: 'http://localhost:5001',

  async GET(endpoint) {
    const promise = await fetch(`${this.SERVER_LOCAL_PATH}/${endpoint}`);
    return promise.json();
  },
};

export default HTTP_SERVER;
