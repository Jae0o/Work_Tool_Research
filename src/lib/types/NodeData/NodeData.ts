import type { MyAI } from "../MyAI/MyAI";

// RequestNode 데이터 타입
export interface RequestNodeData extends Record<string, unknown> {
  textInput: string;
  placeholder?: string;
}

// MyAINode 데이터 타입
export interface MyAINodeData extends Record<string, unknown> {
  myAI: MyAI;
  isActive: boolean;
}

// DecisionNode 데이터 타입
export interface DecisionNodeData extends Record<string, unknown> {
  isActive: boolean;
}

// 모든 노드 데이터 유니온 타입
export type NodeData = RequestNodeData | MyAINodeData | DecisionNodeData;
