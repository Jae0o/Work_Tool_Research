import { useState } from "react";
import ToggleButton from "../ToggleButton/ToggleButton";
import Button from "../Button/Button";
import "./MyAINode.scss";
import { Handle, Position } from "@xyflow/react";
import { AttachFileIcon, EditIcon, SubmitIcon } from "../Icons";

const MyAINode = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="my-ai-node">
      <Handle
        type="target"
        position={Position.Left}
        className="my-ai-node__handle"
      />

      <Handle
        type="source"
        position={Position.Right}
        className="my-ai-node__handle"
      />

      {/* Header */}
      <div className="my-ai-node__header">
        <h3 className="my-ai-node__header__title">My AI</h3>

        <ToggleButton
          checked={isActive}
          onChange={setIsActive}
        />
      </div>

      {/* Info */}
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

      <div className="my-ai-node__actions">
        <Button className="my-ai-node__actions__button">
          <SubmitIcon size="2rem" />
          <p>채팅 바로가기</p>
        </Button>

        <Button className="my-ai-node__actions__button edit-button">
          <EditIcon size="2rem" />
          <p>My AI 수정</p>
        </Button>
      </div>

      <div className="my-ai-node__footer"></div>
    </div>
  );
};

export default MyAINode;
