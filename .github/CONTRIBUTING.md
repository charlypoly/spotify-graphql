## Contributing to `spotify-graphql`

**All PRs should provide some tests, even schema evolutions.**

---

### field `X` is missing

Adding missing fields is pretty simple, you just have to make a Pull Request to update [`lib/schema.ts`](https://github.com/thefrenchhouse/spotify-graphql/blob/master/lib/schema.ts)

You can take a look to [this pull request](https://github.com/thefrenchhouse/spotify-graphql/pull/32) to see how to add proper tests.

### query `X` is missing

Adding a query is pretty simple, you'll have to:

- [`lib/schema.ts`](https://github.com/thefrenchhouse/spotify-graphql/blob/master/lib/schema.ts)
- a corresponding resolver in [`lib/resolvers`](https://github.com/thefrenchhouse/spotify-graphql/tree/master/lib/resolvers)
  - for root query: see [lib/resolvers/queries.ts](https://github.com/thefrenchhouse/spotify-graphql/blob/master/lib/resolvers/queries.ts)
  - for nested queries: each type have a dedicated resolvers file
  _TODO(charly): add some doc about the pooling and concurrency helpers_

### Others requests (bugs, advanced features)

Please create an issue (and follow the issue template) :).
