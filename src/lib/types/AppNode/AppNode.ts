import type { Node } from "@xyflow/react";
import type { RequestNodeData, MyAINodeData } from "../NodeData/NodeData";
import type { MyAINodeType, RequestNodeType } from "../FlowNodeTypes/FlowNodeTypes";

export type RequestNode = Node<RequestNodeData, RequestNodeType>;
export type MyAINode = Node<MyAINodeData, MyAINodeType>;

export type AppNode = RequestNode | MyAINode;
