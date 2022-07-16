const HTTP_SERVER = {
  SERVER_LOCAL_PATH: 'http://localhost:3000',

  async GET(endpoint) {
    try {
      const data = fetch(`${this.SERVER_LOCAL_PATH}/${endpoint}`).then(
        (response) => {
          console.log(response.body.json());
        },
      );
      console.log(await data);
      return data;
    } catch (e) {
      return null;
    }
  },
};

export default HTTP_SERVER;
