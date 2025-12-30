import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Messages from "./Messages";

const Body = ({ refreshKey, onEmailSent }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="flex w-full">
      <Sidebar onEmailSent={onEmailSent} onSelect={setSelectedTab} />
      <div className="flex-1">
        <Messages refreshKey={refreshKey} selectedTab={selectedTab} />
      </div>
    </div>
  );
};

export default Body;
