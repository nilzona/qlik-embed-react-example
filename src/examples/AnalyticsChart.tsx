import { QlikEmbed } from "@qlik/embed-react";

export type AnalyticsChartProps = {
  appId: string;
  objectId: string;
};

const AnalyticsChart = ({ appId, objectId }: AnalyticsChartProps): JSX.Element => (
  <div className="container">
    <h1>Qlik Embed React - Single chart with selection bar</h1>
    <div className="selections-bar">
      <QlikEmbed ui="analytics/selections" appId={appId} />
    </div>
    <div className="viz">
      <QlikEmbed ui="analytics/chart" appId={appId} objectId={objectId} />
    </div>
  </div>
);

export default AnalyticsChart;
