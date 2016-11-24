import SpotifyDecorators from '../../src/decorators';

describe('SpotifyQuery Decorator', () => {

  function buildFakeSpotifyClient (resolver: Function) {
    return  {
        query: resolver
      }
  }

  describe('when data fetching is a success', () =>  {

    it('should call method', (done: Function) => {
      let data = [{track: 'Track'}];

      let fakeSpotifyClient = buildFakeSpotifyClient(() => Promise.resolve({ data: data, errors: null }))

      let successSpy = jasmine.createSpy('success');

      let { SpotifyQuery } = SpotifyDecorators(fakeSpotifyClient);

      class A {

        @SpotifyQuery(`
          track(id: 'id') {
            name
          }
        `)
        method(data?): any {
          successSpy(data);
        }
      }

      (new A).method().then(() => {
        expect(successSpy).toHaveBeenCalledWith(data);
        done();
      }, done);
    })
  });

  describe('when data fetching is a failure', () =>  {

    it('should not call method', (done: Function) => {
      let data = [{track: 'Track'}];

      let fakeSpotifyClient = buildFakeSpotifyClient(() => Promise.reject('error'))

      let successSpy = jasmine.createSpy('success');
      let failureSpy = jasmine.createSpy('failure');

      let { SpotifyQuery } = SpotifyDecorators(fakeSpotifyClient);

      class A {

        @SpotifyQuery(`
          track(id: 'id') {
            name
          }
        `)
        method(data?): any {
          successSpy(data);
        }
      }

      (new A).method().then(() => {}, failureSpy).then(() => {
        expect(successSpy).not.toHaveBeenCalled();
        expect(failureSpy).toHaveBeenCalledWith('error');
        done();
      });
    })
  });
});