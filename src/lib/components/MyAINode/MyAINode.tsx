import { Handle, Position } from "@xyflow/react";
import type { MyAINodeData } from "../../types";
import ToggleButton from "../ToggleButton/ToggleButton";
import Button from "../Button/Button";
import { AttachFileIcon, EditIcon, SubmitIcon } from "../Icons";
import "./MyAINode.scss";

interface MyAINodeProps {
  data: MyAINodeData;
  selected?: boolean;
}

const MyAINode = ({ data, selected }: MyAINodeProps) => {
  const { myAI, isActive } = data;

  return (
    <div className={`my-ai-node ${selected ? "my-ai-node--selected" : ""}`}>
      <Handle
        type="target"
        position={Position.Left}
      />
      <Handle
        type="source"
        position={Position.Right}
      />

      {/* Header */}
      <div className="my-ai-node__header">
        <h3 className="my-ai-node__header__title">My AI</h3>

        <ToggleButton
          checked={isActive}
          onChange={() => {}}
        />
      </div>

      {/* Info */}
      <div className="my-ai-node__info">
        <p className="my-ai-node__info__title">{myAI.name}</p>
        <p className="my-ai-node__info__description">{myAI.description}</p>

        <span className="my-ai-node__info__type">
          <AttachFileIcon size="1.4rem" />
          <p className="my-ai-node__info__type_text">{myAI.AIType ?? "N/A"}</p>
        </span>
      </div>

      {/* My Ai Actions */}
      <div className="my-ai-node__actions">
        <Button
          className="my-ai-node__actions__button"
          whileHover={{ scale: 0.98 }}
        >
          <SubmitIcon size="2rem" />
          <p>채팅 바로가기</p>
        </Button>

        <Button
          className="my-ai-node__actions__button edit-button"
          whileHover={{ scale: 0.98 }}
        >
          <EditIcon size="2rem" />
          <p>My AI 수정</p>
        </Button>
      </div>

      {/* Footer */}
      <div className="my-ai-node__footer">
        <Button className="my-ai-node__footer__button">결과 확인</Button>
      </div>
    </div>
  );
};

export default MyAINode;
