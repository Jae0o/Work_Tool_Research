import type { Node } from "@xyflow/react";

const initialNodes: Node[] = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 200, y: 0 }, data: { label: "2" }, type: "myAINode" },
];

export default initialNodes;
