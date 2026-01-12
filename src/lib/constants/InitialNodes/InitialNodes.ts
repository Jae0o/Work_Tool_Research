import type { Node } from "@xyflow/react";
import { FlowNodeTypes } from "../../types";

const initialNodes: Node[] = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" }, type: FlowNodeTypes.REQUEST_NODE },
  { id: "2", position: { x: 400, y: 0 }, data: { label: "2" }, type: FlowNodeTypes.MY_AI_NODE },
];

export default initialNodes;
