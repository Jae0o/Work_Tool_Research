import type { Node } from "@xyflow/react";
import type { RequestNodeData, MyAINodeData, DecisionNodeData } from "../NodeData/NodeData";
import type {
  MyAINodeType,
  RequestNodeType,
  DecisionNodeType,
} from "../FlowNodeTypes/FlowNodeTypes";

export type RequestNode = Node<RequestNodeData, RequestNodeType>;
export type MyAINode = Node<MyAINodeData, MyAINodeType>;
export type DecisionNode = Node<DecisionNodeData, DecisionNodeType>;

export type AppNode = RequestNode | MyAINode | DecisionNode;
