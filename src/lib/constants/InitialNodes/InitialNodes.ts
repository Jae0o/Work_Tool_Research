import { FlowNodeTypes, type AppNode, type RequestNodeData, type MyAINodeData } from "../../types";
import { mockMyAIList } from "../../mocks/myAIData";

const initialNodes: AppNode[] = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    type: FlowNodeTypes.REQUEST_NODE,
    data: {
      textInput: "",
      placeholder: "질문을 입력하세요...",
    } satisfies RequestNodeData,
  },
  {
    id: "2",
    position: { x: 400, y: 0 },
    type: FlowNodeTypes.MY_AI_NODE,
    data: {
      myAI: mockMyAIList[0],
      isActive: true,
    } satisfies MyAINodeData,
  },
];

export default initialNodes;
