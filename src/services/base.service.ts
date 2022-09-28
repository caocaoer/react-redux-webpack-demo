import axios from 'axios';

class Request {
  get(url: string, data: any, options: any) {
    return this._request('get', url, data, options);
  }

  post(url: string, data: any, options: any) {
    return this._request('post', url, data, options);
  }

  put(url: string, data: any, options: any) {
    return this._request('put', url, data, options);
  }

  delete(url: string, data: any, options: any) {
    return this._request('delete', url, data, options);
  }

  _request(method: string, url: string, params: any, headers?: any) {
    return new Promise((resolve, reject) => {
      let data = {};
      if (method.toLowerCase() === 'get') {
        data = { params };
      }
      if (method.toLowerCase() === 'post') {
        data = {
          data: params,
        };
      }

      service({
        baseURL: url,
        method,
        ...data,
        headers: { ...headers },
      })
        .then(res => {
          // TODO need to adjust data format
          if (res) {
            resolve(res.data);
          } else {
            reject(res);
          }
        })
        .catch(error => {
          // TODO catch error
        })
        .finally(() => {
          // TODO finally
        });
    });
  }
}

export default new Request();

const service = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
  timeout: 10000,
  withCredentials: true,
});

// TODO handle request
service.interceptors.request.use((config: any) => config);

service.interceptors.response.use(
  response => {
    console.log('interceptors.response', response);
    return response;
  },
  error => {
    const { response } = error;
    switch (response.status) {
      case 401: // TODO
        break;
      case 403: // TODO
        break;
    }
  }
);
