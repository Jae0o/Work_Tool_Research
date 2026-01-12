const FlowNodeTypes = {
  MY_AI_NODE: "myAINode",
  REQUEST_NODE: "requestNode",
  DECISION_NODE: "decisionNode",
} as const;

type FlowNodeTypes = (typeof FlowNodeTypes)[keyof typeof FlowNodeTypes];

export type MyAINodeType = (typeof FlowNodeTypes)["MY_AI_NODE"];
export type RequestNodeType = (typeof FlowNodeTypes)["REQUEST_NODE"];
export type DecisionNodeType = (typeof FlowNodeTypes)["DECISION_NODE"];

export default FlowNodeTypes;
