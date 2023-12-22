import { QlikEmbedConfig, type HostConfig } from "@qlik/embed-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import SidePanel from "./components/SidePanel";
import TopBar from "./components/TopBar";
import AnalyticsChart from "./examples/AnalyticsChart";
import ClassicApp from "./examples/ClassicApp";
import SheetList from "./examples/SheetList";

const hostConfig: HostConfig = {
  host: "https://clip.eu.qlik-stage.com",
  clientId: "<client-id-here>",
  redirectUri: "https://localhost:4000/oauth-callback.html",
  accessTokenStorage: "session",
  authType: "oauth2",
};

const appId = "<app-id-here>"; // app id you want to embed from
const objectId = "<object-id-here>"; // object id you want to embed
const sheetId = "<sheet-id-here>"; // sheet id you want to embed

export default () => (
  <QlikEmbedConfig.Provider value={hostConfig}>
    <TopBar title="Qlik Embed React Examples" />
    <div className="main-app">
      <Router>
        <SidePanel />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classic-app" element={<ClassicApp appId={appId} sheetId={sheetId} />} />
            <Route path="/analytics-chart" element={<AnalyticsChart appId={appId} objectId={objectId} />} />
            <Route path="/sheet-list" element={<SheetList appId={appId} />} />
            {/* Add more routes here */}
          </Routes>
        </div>
      </Router>
    </div>
  </QlikEmbedConfig.Provider>
);
