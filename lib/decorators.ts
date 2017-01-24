export type SpotifyQueryDecorated = any;

// Allow to decoration class methods using the following pattern :
//    const SpotifyQuery = SpotifyDecorators(client);
//    class A {
//       @SpotifyQuery(`
//          query {
//             me {
//                tracks { name }
//             }
//          }
//       `)
//       public myMethod(tracks): SpotifyQueryDecorated {
//          // ...
//       }
//    }
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