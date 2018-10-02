### Professional JavaScript Testing with Kent C. Dodds

## Set Up

1. Set up your environment variables

```bash
$ cp .env.development.template .env.development
```

2. Install dependencies with `yarn`

```bash
$ yarn install
```

3. Install plugin dependencies

```bash
$ cd plugins/gatsby-source-egghead
$ npm install
```

4. Run your development server

```bash
$ gatsby develop
```

## Authentication

You must copy `.env.development.template` to `env.development` and acquire a client ID from your local dev server http://egghead.af:5000/oauth/applications/new while logged in as an admin.

From there you can just make an app (uncheck confidential) and copy the client ID into `env.development`.
