// Wrapper around 'spotify-web-api-node' methods to enable simpler DSL
// and better error management (promise-way)
//   Example :
//     safeApiCall(myClient, 'geMe', (results) => results.me.name).then()
export function safeApiCall(client: any, method: string, formatter?: Function, ...args) {
  return new Promise( (resolve, reject) => {
    client[method].apply(client, args).
        then(
          (response) => {
            resolve(!!formatter ? formatter(response) : response.body);
          },
          (error) => {
            reject(error);
          }
        );
  });
}
