import { isUndefined } from 'lodash';
let locks: {[k: string]: boolean} = {};
let counter: {[k: string]: number} = {};
// Partial Application pattern to create a concurency lambda
export function limitConcurency(name: string): Function {
  if (isUndefined(locks[name])) {
    locks[name] = false;
    counter[name] = 0;
  }
  return (context: Function) => {
    counter[name]++;
    function lockGetterSetter(lock?: boolean) {
      // tslint:disable-next-line:no-typeof-undefined
      if (typeof lock !== 'undefined') {
        if (lock === false) { counter[name]--; }
        locks[name] = lock;
      } else {
        // tslint:disable-next-line:comment-format
        // console.log(name, `${counter[name]} in queue`);
        return locks[name];
      }
    }
    return context(lockGetterSetter);
  };
}