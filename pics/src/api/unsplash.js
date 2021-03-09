import axios from "axios"; //better to use than fetch for api calls

// can be used anywhee to do api calls

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID TcLzUjQNq3f53uoN2m-rz-jSI4-LaYVZnZqiYv7MwZ0",
  },
});
