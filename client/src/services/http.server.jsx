const HTTP_SERVER = {
  SERVER_LOCAL_PATH: 'http//localhost:5001',

  async GET(endpoint) {
    const response = await fetch(this.SERVER_LOCAL_PATH);
    console.log(response);
    console.log(this.SERVER_LOCAL_PATH);
    return response.json();
  },
};

export default HTTP_SERVER;
