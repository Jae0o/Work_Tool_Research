import { Handle, Position } from "@xyflow/react";
import type { DecisionNodeData } from "../../types";
import { DecisionIcon } from "../Icons";
import ToggleButton from "../ToggleButton/ToggleButton";
import "./DecisionNode.scss";

interface DecisionNodeProps {
  data: DecisionNodeData;
  selected?: boolean;
}

const DecisionNode = ({ data, selected }: DecisionNodeProps) => {
  return (
    <div className={`decision-node ${selected ? "decision-node--selected" : ""}`}>
      <Handle
        type="target"
        position={Position.Left}
      />
      <Handle
        type="source"
        position={Position.Right}
      />

      {/* Header */}
      <div className="decision-node__header">
        <span className="decision-node__header__title">
          <DecisionIcon />
          <h3 className="decision-node__header__title_text">Decision Maker</h3>
        </span>

        <ToggleButton
          checked={data.isActive}
          onChange={() => {}}
        />
      </div>
    </div>
  );
};

export default DecisionNode;
