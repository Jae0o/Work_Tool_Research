import { useState } from "react";
import { Panel } from "@xyflow/react";
import Button from "../Button/Button";
import { PlusIcon } from "../Icons";
import MyAISelector from "../MyAISelector/MyAISelector";
import "./Sidebar.scss";

const Sidebar = () => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  const handleToggleSelector = () => {
    setIsSelectorOpen((prev) => !prev);
  };

  const handleCloseSelector = () => {
    setIsSelectorOpen(false);
  };

  return (
    <Panel
      position="top-left"
      className="sidebar-panel"
    >
      <div className="sidebar">
        <Button
          className="sidebar__button"
          onClick={handleToggleSelector}
          aria-label="My AI 추가"
        >
          <PlusIcon size="2rem" />
        </Button>
      </div>

      {isSelectorOpen && <MyAISelector onClose={handleCloseSelector} />}
    </Panel>
  );
};

export default Sidebar;
