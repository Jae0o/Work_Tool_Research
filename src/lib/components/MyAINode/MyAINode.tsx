import { useState } from "react";
import ToggleButton from "../ToggleButton/ToggleButton";
import "./MyAINode.scss";
import { Handle, Position } from "@xyflow/react";
import { AttachFileIcon } from "../Icons";

const MyAINode = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="my-ai-node">
      <Handle
        type="target"
        position={Position.Left}
        id="a"
      />

      {/* Header */}
      <div className="my-ai-node__header">
        <h3 className="my-ai-node__header__title">My AI</h3>

        <ToggleButton
          checked={isActive}
          onChange={setIsActive}
        />
      </div>

      <div className="my-ai-node__info">
        <p className="my-ai-node__info__title">
          title title title title title title title title title title title
        </p>
        <p className="my-ai-node__info__description">
          description description description description description description description
          description description description description description description description
        </p>

        <span className="my-ai-node__info__type">
          <AttachFileIcon size="1.4rem" />

          <p className="my-ai-node__info__type_text">
            AI Type My AI Type My AI Type AI Type My AI Type My AI Type
          </p>
        </span>
      </div>
    </div>
  );
};

export default MyAINode;
