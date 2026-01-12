import { Handle, Position } from "@xyflow/react";
import { ActivityIcon } from "../Icons";
import "./RequestNode.scss";

const RequestNode = () => {
  return (
    <div className="request-node">
      <Handle
        type="source"
        position={Position.Right}
      />

      <span className="request-node__header">
        <ActivityIcon size="1.4rem" />
        <h3 className="request-node__header__title">질문하기</h3>
      </span>

      <textarea className="request-node__textarea" />
    </div>
  );
};

export default RequestNode;
