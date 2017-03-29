import { limitConcurency } from '../../lib/utils';

describe('limitConcurency', () => {
    describe('when lock doesnt exists for this name', () => {
        it('should not be locked by default', () => {
            limitConcurency('test')((lock) => {
                expect(lock()).toBeFalsy();
            });
        });
    });

    describe('call lock(true)', () => {
        it('should lock', () => {
            limitConcurency('test')((lock) => {
                lock(true);
            });
            limitConcurency('test')((lock) => {
                expect(lock()).toBeTruthy();
            });
        });
    });

    describe('call lock(true)', () => {
        it('should unlock', () => {
            limitConcurency('test')((lock) => {
                lock(true);
            });
            limitConcurency('test')((lock) => {
                lock(false);
            });
            limitConcurency('test')((lock) => {
                expect(lock()).toBeFalsy();
            });
        });
    });
});
