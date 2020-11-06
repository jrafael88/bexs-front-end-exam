import API from "./Api";

class ServicePay {
  constructor() {
    API.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = API;
  }

  handleSuccess(response) {
    return response;
  }

  handleError = (error) => {
    switch (error.response.status) {
      case 401:
        return 'não autorizado';
      default:
        return error
    }
  };

  pay(payload, callback) {
    return this.service
      .request({
        method: "POST",
        url: 'cart',
        responseType: "json",
        data: payload,
      })
      .then((response) => callback(response.data));
  }
}
export default new ServicePay();