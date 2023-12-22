# qlik-embed-react-example

This react app is a little demo app on how to use the new `qlik-embed` libraries

The `qlik-embed` libraries are under development so the code here can break when updates to the npm dependencies are made.

## Prerequisets

### Using Oauth2

You need to have access to a QCS tenant and you need to setup an OAuth Client.

- Allow origins should include <https://localhost:4000>
- Redirect URLs need to include <https://localhost:4000/oauth-callback.html>

### Using Cookies

You need to have access to a QCS tenant and you need to setup a Web Integration ID.

- Add a web integration id in Management Console
- Add <https://localhost:4000> to allowed origins

## Get started

1. Install project `pnpm install`
2. Modify some config and constants in `App.tsx`
   1. Choose which type of hostConfig you want to use. Oauth or Cookie.
   2. Change the host in the `hostConfig` variable to a QCS tenant you have access to.
   3. Either:
      - Change the `clientId` to your OAuth clientId.
      - OR change the `webIntegrationId` to your the Web Integration.
   4. Also change:
      - `<APP_ID>` to an app you have access to on the files.
      - `<SHEET_ID>` to a sheet you want to embed.
      - `<OBJECT_ID>` to a single object you want to embed.
3. Start the dev server `pnpm run dev`.
4. Open <https://localhost:4000>

## Using overrides

To use overrides you need to edit the local storage settings both for localhost:4000 and the tenant-url.

- Add a `import-map-override:@qmfe/<id>` = `//localhost:<port>/qmfe-<id>.js` to both locations in local storage.
- To remove the overrides you'll need to remove the entries in local storage.
