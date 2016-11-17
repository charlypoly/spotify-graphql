export default (client) => {
   return {
      SpotifyQuery(query: string) {
         return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            // save a reference to the original method this way we keep the values currently in the
            // descriptor and don't overwrite what another decorator might have done to the descriptor.
            if(descriptor === undefined) {
               descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
            }
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