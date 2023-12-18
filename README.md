# qlik-embed-react-example

This react app is a little demo app on how to use the new `qlik-embed` libraries

The `qlik-embed` libraries are under development so the code here can break when updates to the npm dependencies are made.

## Prerequisets

### Using Cookies

You need to have access to a QCS tenant and you need to setup a Web Integration ID.

- Add a web integration id in Management Console
- Add <https://localhost:5173> to allowed origins

### Using Oauth2

You need to have access to a QCS tenant and you need to setup an OAuth Client.

- Allow origins should include <https://localhost:5173>
- Redirect URLs need to include <https://localhost:5173/oauth-callback.html>

## Get started

1. Install project `pnpm install`
2. Modify some config in `App.tsx`
   1. Change the host in the `hostConfig` variable to a QCS tenant you have access to
   2. Change the clientId to your OAuth clientId
   3. Go into the examples folder and set the App ID to an app you have access to on the files `AnalyticsChart.tsx`, `ClassicApp.tsx` and `SheetList.tsx`
   4. Also change Sheet ID (optional) and/or the Object ID in the examples
3. Start the dev server `pnpm run dev`
4. Open <https://localhost:5173>

## Using overrides

To use overrides you need to edit the local storage settings both for localhost:5173 and the tenant-url.

- Add a `import-map-override:@qmfe/<id>` = `//localhost:<port>/qmfe-<id>.js` to both locations in local storage.
- To remove the overrides you'll need to remove the entries in local storage.
