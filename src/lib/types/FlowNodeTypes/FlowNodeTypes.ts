const FlowNodeTypes = {
  MY_AI_NODE: "myAINode",
  REQUEST_NODE: "requestNode",
} as const;

type FlowNodeTypes = (typeof FlowNodeTypes)[keyof typeof FlowNodeTypes];

export type MyAINodeType = (typeof FlowNodeTypes)["MY_AI_NODE"];
export type RequestNodeType = (typeof FlowNodeTypes)["REQUEST_NODE"];

export default FlowNodeTypes;
