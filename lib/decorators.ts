export type SpotifyQueryDecorated = any;

export function SpotifyDecorators (client): any {
   return {
      SpotifyQuery(query: string) {
         return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            var originalMethod = descriptor.value;

            descriptor.value = function (variables?: any): Promise<any> {
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