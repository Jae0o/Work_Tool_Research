import { Handle, Position } from "@xyflow/react";
import type { RequestNodeData } from "../../types";
import { ActivityIcon } from "../Icons";
import "./RequestNode.scss";

interface RequestNodeProps {
  data: RequestNodeData;
}

const RequestNode = ({ data }: RequestNodeProps) => {
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

      <textarea
        className="request-node__textarea"
        value={data.textInput}
        placeholder={data.placeholder}
        readOnly
      />
    </div>
  );
};

export default RequestNode;
