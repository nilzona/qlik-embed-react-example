import { QlikEmbed } from "@qlik/embed-react";

export type ClassicAppProps = {
  appId: string;
  sheetId: string;
};

const ClassicApp = ({ appId, sheetId }: ClassicAppProps): JSX.Element => (
  <div className="container">
    <h1>Qlik Embed React - Qlik Sense app with selection bar</h1>
    <div className="selections-bar">
      <QlikEmbed ui="analytics/selections" appId={appId} />
    </div>
    <div className="viz">
      <QlikEmbed ui="classic/app" app={appId} sheet={sheetId} iframe />
    </div>
  </div>
);

export default ClassicApp;
