const FlowNodeTypes = {
  MY_AI_NODE: "myAINode",
  REQUEST_NODE: "requestNode",
} as const;

type FlowNodeTypes = (typeof FlowNodeTypes)[keyof typeof FlowNodeTypes];

export default FlowNodeTypes;
