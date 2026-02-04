import Flow from "./Flow";
import { FlowNodeTypes } from "../../types";
import type { Edge, Node } from "@xyflow/react";
import type { Meta, StoryObj } from "@storybook/react";
import type {
  DecisionNodeData,
  MyAINodeData,
  RequestNodeData,
} from "../../types";

/**
 * ## Flow Component
 *
 * React Flow 기반의 메인 플로우 컨테이너 컴포넌트입니다.
 * 커스텀 노드(MyAI, Request, Decision)와 Edge를 관리하며,
 * 노드 연결, 삭제, 드래그 등의 인터랙션을 제공합니다.
 *
 * ### 주요 기능
 * - 커스텀 노드 타입 지원 (MyAINode, RequestNode, DecisionNode)
 * - 커스텀 엣지 타입 지원 (LabeledEdge)
 * - Sidebar를 통한 노드 추가
 * - Background 및 Controls 제공
 * - 노드 간 연결 관리
 *
 * ### 사용 방법
 * ```tsx
 * import Flow from "./Flow";
 *
 * const initialNodes = [
 *   {
 *     id: "1",
 *     type: "myAINode",
 *     data: { myAI: {...}, isActive: true },
 *     position: { x: 0, y: 0 },
 *   },
 * ];
 *
 * const initialEdges = [
 *   { id: "e1-2", source: "1", target: "2" },
 * ];
 *
 * <Flow initialNodes={initialNodes} initialEdges={initialEdges} />
 * ```
 *
 * ### Props & Type
 * - **initialNodes**: 초기 노드 배열 (Node[])
 * - **initialEdges**: 초기 엣지 배열 (Edge[])
 */
const meta = {
  title: "Containers/Flow",
  component: Flow,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "100vw", height: "100vh" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    initialNodes: {
      control: { disable: true },
      description: "초기 노드 배열 (Node[])",
    },
    initialEdges: {
      control: { disable: true },
      description: "초기 엣지 배열 (Edge[])",
    },
  },
} satisfies Meta<typeof Flow>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock Data
const mockMyAI: MyAINodeData = {
  myAI: {
    id: "ai-001",
    profileImage: null,
    name: "고객 응대 AI",
    description: "고객 문의에 자동으로 응답하는 AI 어시스턴트",
    instructions: "친절하고 정확하게 응대하세요",
    conversationStarters: ["안녕하세요", "도움이 필요하신가요?"],
    knowledge: null,
    capabilities: ["텍스트 분석", "자동 응답"],
    createdDate: "2024-01-01",
    updatedDate: "2024-01-15",
    AIType: "Customer Service",
    category: "비즈니스",
    categoryId: "cat-001",
    childAssistants: null,
    gptVersion: "gpt-4",
    gptVersions: null,
    dataLakeVectorStores: null,
    isSidebar: true,
    isFavorite: false,
    isPinned: true,
    isPublic: false,
  },
  isActive: true,
};

const mockRequestNode: RequestNodeData = {
  textInput: "고객의 문의 내용을 입력하세요",
  placeholder: "여기에 입력...",
};

const mockDecisionNode: DecisionNodeData = {
  isActive: true,
  branches: [
    { id: "branch-1", condition: "정상 응답" },
    { id: "branch-2", condition: "에러 응답" },
  ],
};

/**
 * 빈 캔버스 상태입니다.
 * 노드와 엣지가 없는 초기 상태를 보여줍니다.
 */
export const Empty: Story = {
  args: {
    initialNodes: [],
    initialEdges: [],
  },
};

/**
 * 단일 MyAI 노드만 있는 상태입니다.
 */
export const SingleNode: Story = {
  args: {
    initialNodes: [
      {
        id: "1",
        type: FlowNodeTypes.MY_AI_NODE,
        data: mockMyAI,
        position: { x: 250, y: 100 },
      },
    ] as Node[],
    initialEdges: [],
  },
};

/**
 * 기본 플로우 구조입니다.
 * Request → MyAI → Decision 순서로 연결된 3개의 노드를 보여줍니다.
 */
export const BasicFlow: Story = {
  args: {
    initialNodes: [
      {
        id: "1",
        type: FlowNodeTypes.REQUEST_NODE,
        data: mockRequestNode,
        position: { x: 100, y: 100 },
      },
      {
        id: "2",
        type: FlowNodeTypes.MY_AI_NODE,
        data: mockMyAI,
        position: { x: 350, y: 100 },
      },
      {
        id: "3",
        type: FlowNodeTypes.DECISION_NODE,
        data: mockDecisionNode,
        position: { x: 600, y: 100 },
      },
    ] as Node[],
    initialEdges: [
      {
        id: "e1-2",
        source: "1",
        target: "2",
      },
      {
        id: "e2-3",
        source: "2",
        target: "3",
      },
    ] as Edge[],
  },
};

/**
 * 복잡한 플로우 구조입니다.
 * 여러 노드와 분기, 레이블이 있는 엣지를 포함합니다.
 */
export const ComplexFlow: Story = {
  args: {
    initialNodes: [
      {
        id: "1",
        type: FlowNodeTypes.REQUEST_NODE,
        data: {
          textInput: "사용자 입력",
          placeholder: "초기 요청을 입력하세요",
        } as RequestNodeData,
        position: { x: 50, y: 100 },
      },
      {
        id: "2",
        type: FlowNodeTypes.MY_AI_NODE,
        data: {
          ...mockMyAI,
          myAI: { ...mockMyAI.myAI, name: "분류 AI" },
        },
        position: { x: 300, y: 100 },
      },
      {
        id: "3",
        type: FlowNodeTypes.DECISION_NODE,
        data: {
          isActive: true,
          branches: [
            { id: "branch-1", condition: "문의 타입" },
            { id: "branch-2", condition: "불만 타입" },
          ],
        } as DecisionNodeData,
        position: { x: 550, y: 100 },
      },
      {
        id: "4",
        type: FlowNodeTypes.MY_AI_NODE,
        data: {
          ...mockMyAI,
          myAI: { ...mockMyAI.myAI, name: "문의 처리 AI" },
        },
        position: { x: 800, y: 50 },
      },
      {
        id: "5",
        type: FlowNodeTypes.MY_AI_NODE,
        data: {
          ...mockMyAI,
          myAI: { ...mockMyAI.myAI, name: "불만 처리 AI" },
        },
        position: { x: 800, y: 200 },
      },
    ] as Node[],
    initialEdges: [
      { id: "e1-2", source: "1", target: "2" },
      { id: "e2-3", source: "2", target: "3" },
      {
        id: "e3-4",
        source: "3",
        target: "4",
        type: "labeled",
        data: { label: "문의" },
      },
      {
        id: "e3-5",
        source: "3",
        target: "5",
        type: "labeled",
        data: { label: "불만" },
      },
    ] as Edge[],
  },
};
