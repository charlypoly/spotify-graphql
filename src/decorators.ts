export default (client) => {
   return {
      SpotifyQuery(query: string) {
         return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            var originalMethod = descriptor.value;

            descriptor.value = function (variables?) {
               return new Promise((resolve, reject) => {
                  client.query(query, null, null, variables).then((executionResult) => {
                     if (!executionResult.errors) {
                        resolve(
                           originalMethod.call(originalMethod, executionResult.data)
                        );
                     } else {
                        reject(executionResult.errors);
                     }
                  }, reject).catch(reject);
               });
            };

            return descriptor;
         };
      }
   }
}