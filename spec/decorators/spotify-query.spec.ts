import SpotifyDecorators from '../../src/decorators';

describe('SpotifyQuery Decorator', () => {

  describe('when data fetching is a success', () =>  {

    it('should call method', (done: Function) => {
      let data = [{track: 'Track'}];

      let fakeSpotifyClient = {
        query: (): Promise<any> => Promise.resolve({ data: data, errors: null })
      }

      let myMock = jasmine.createSpy('spy');

      let { SpotifyQuery } = SpotifyDecorators(fakeSpotifyClient);

      class A {

        @SpotifyQuery(`
          track(id: 'id') {
            name
          }
        `)
        method(data?): any {
          myMock(data);
        }
      }

      (new A).method().then(() => {
        expect(myMock).toHaveBeenCalledWith(data);
        done();
      }, done);
    })
  });
});