import { Panel } from "@xyflow/react";
import Button from "../Button/Button";
import { DecisionIcon, PlusIcon } from "../Icons";
import MyAISelector from "../MyAISelector/MyAISelector";

import "./Sidebar.scss";
import { useToggle } from "../../hooks";
import { useAddDecisionNode } from "./hooks";

const Sidebar = () => {
  const { isToggle, toggle, close } = useToggle();

  const { handleAddDecisionNode } = useAddDecisionNode();

  return (
    <Panel
      position="top-left"
      className="sidebar-panel"
    >
      <div className="sidebar">
        <Button
          className="sidebar__button"
          onClick={toggle}
          aria-label="My AI 추가"
        >
          <PlusIcon size="2rem" />
        </Button>

        <Button
          className="sidebar__button"
          onClick={handleAddDecisionNode}
          aria-label="Decision 추가"
        >
          <DecisionIcon size="2rem" />
        </Button>
      </div>

      {isToggle && <MyAISelector onClose={close} />}
    </Panel>
  );
};

export default Sidebar;
