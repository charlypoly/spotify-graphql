// Partial Application pattern to create a concurency lambda
export function limitConcurency(name: string): Function {
  let locks: {[k: string]: boolean} = {};
  locks[name] = false;
  return (context: Function) => {
    function lockGetterSetter(lock?: boolean) {
      // tslint:disable-next-line:no-typeof-undefined
      if (typeof lock !== 'undefined') {
        locks[name] = lock;
      } else {
        return locks[name];
      }
    }
    return context(lockGetterSetter);
  };
}