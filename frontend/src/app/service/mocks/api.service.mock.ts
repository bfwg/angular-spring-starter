const MockObservable = {
  mergeMap: (cb) => {
    return cb({ id: 123 });
  },
  toPromise: () => {
    return new Promise((resolve, reject) => {
      resolve('resolved');
    });
  }
};

export class MockApiService {
  get(path: string) {
    return MockObservable;
  }
  post(path: string, body) {}
  put(path: string, body) {}
  anonGet(path: string) {
    return MockObservable;
  }
}
