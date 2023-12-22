import { type SheetListItem } from "@qlik/api/qix";
import { QlikEmbedConfig } from "@qlik/embed-react";
import { useContext, useEffect, useState } from "react";
import { useApp } from "../hooks/useApp";

export type SheetListProps = {
  appId: string;
};

const SheetList = ({ appId }: SheetListProps): JSX.Element => {
  const hostConfig = useContext(QlikEmbedConfig);
  const app = useApp(appId, hostConfig);

  const [sheets, setSheets] = useState<SheetListItem[]>([]);

  useEffect(() => {
    const getSheetList = async () => {
      if (app) {
        const sheetList = await app.getSheetList();
        setSheets(sheetList);
      }
    };
    getSheetList().catch(console.error); // eslint-disable-line no-console
  }, [app]);

  if (!app) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>@qlik/api - Show Sheet List</h1>
      {sheets.map((sheet) => (
        <div key={sheet.qInfo?.qId}>{sheet.qData?.title}</div>
      ))}
    </div>
  );
};

export default SheetList;
