const FlowNodeTypes = {
  MY_AI_NODE: "myAINode",
} as const;

type FlowNodeTypes = (typeof FlowNodeTypes)[keyof typeof FlowNodeTypes];

export default FlowNodeTypes;
