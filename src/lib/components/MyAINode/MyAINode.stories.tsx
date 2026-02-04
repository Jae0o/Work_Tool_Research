import MyAINode from "./MyAINode";
import { ReactFlowProvider, ReactFlow } from "@xyflow/react";
import type { MyAINodeData } from "../../types";
import type { Meta, StoryObj } from "@storybook/react";
import "@xyflow/react/dist/style.css";

/**
 * ## MyAINode Component
 *
 * React Flow 커스텀 노드 컴포넌트입니다.
 * My AI 정보를 표시하고, 활성화 토글 및 다양한 액션 버튼을 제공합니다.
 *
 * ### 주요 기능
 * - My AI 정보 표시 (이름, 설명, AI 타입)
 * - 활성화 상태 토글
 * - 채팅 바로가기 / My AI 수정 / 결과 확인 버튼
 * - React Flow Handle (좌: target, 우: source)
 *
 * ### 사용 방법
 * ```tsx
 * import MyAINode from "./MyAINode";
 * import { ReactFlow } from "@xyflow/react";
 *
 * const nodes = [
 *   {
 *     id: "1",
 *     type: "myAINode",
 *     data: {
 *       myAI: {
 *         id: "ai-001",
 *         name: "고객 응대 AI",
 *         description: "고객 문의에 자동으로 응답하는 AI",
 *         AIType: "Customer Service",
 *         // ... 기타 필드
 *       },
 *       isActive: true,
 *     },
 *     position: { x: 0, y: 0 },
 *   },
 * ];
 *
 * const nodeTypes = { myAINode: MyAINode };
 *
 * <ReactFlow nodes={nodes} nodeTypes={nodeTypes} />
 * ```
 *
 * ### Props & Type
 * - **data**: MyAINodeData 타입 객체
 *   - **myAI**: MyAI 정보 객체
 *   - **isActive**: 활성화 상태 (boolean)
 * - **selected**: 노드 선택 상태 (boolean, optional)
 */
const meta = {
  title: "Components/MyAINode",
  component: MyAINode,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story, context) => {
      const { data, selected } = context.args;
      return (
        <ReactFlowProvider>
          <div style={{ width: "100vw", height: "100vh" }}>
            <ReactFlow
              nodes={[
                {
                  id: "1",
                  type: "custom",
                  data,
                  position: { x: 0, y: 0 },
                  selected,
                },
              ]}
              nodeTypes={{
                custom: MyAINode,
              }}
              fitView
              minZoom={0.5}
              maxZoom={1.5}
            />
          </div>
        </ReactFlowProvider>
      );
    },
  ],
  argTypes: {
    data: {
      control: { disable: true },
      description: "MyAINodeData 타입 객체 (myAI, isActive 포함)",
    },
    selected: {
      control: "boolean",
      description: "노드 선택 상태 (true일 때 하이라이트 효과)",
    },
  },
} satisfies Meta<typeof MyAINode>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock Data
const mockMyAI: MyAINodeData = {
  myAI: {
    id: "ai-001",
    profileImage: null,
    name: "고객 응대 AI",
    description: "고객 문의에 자동으로 응답하는 AI 어시스턴트입니다.",
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

/**
 * 기본 MyAINode 상태입니다.
 * 활성화된 상태로 표시됩니다.
 */
export const Default: Story = {
  args: {
    data: mockMyAI,
    selected: false,
  },
};

/**
 * 비활성화된 MyAINode입니다.
 * 토글이 꺼진 상태로 표시됩니다.
 */
export const Inactive: Story = {
  args: {
    data: {
      ...mockMyAI,
      isActive: false,
    },
    selected: false,
  },
};

/**
 * 선택된 상태의 MyAINode입니다.
 * selected prop이 true일 때 하이라이트 효과가 적용됩니다.
 */
export const Selected: Story = {
  args: {
    data: mockMyAI,
    selected: true,
  },
};

/**
 * AI Type이 없는 경우입니다.
 * AIType이 null일 때 "N/A"로 표시됩니다.
 */
export const NoAIType: Story = {
  args: {
    data: {
      ...mockMyAI,
      myAI: {
        ...mockMyAI.myAI,
        AIType: null,
      },
    },
    selected: false,
  },
};

/**
 * 다양한 AI Type을 가진 노드들입니다.
 */
export const DifferentAITypes: Story = {
  args: {
    data: mockMyAI,
    selected: false,
  },
  render: () => (
    <ReactFlowProvider>
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow
          nodes={[
            {
              id: "1",
              type: "custom",
              data: {
                ...mockMyAI,
                myAI: {
                  ...mockMyAI.myAI,
                  name: "데이터 분석 AI",
                  AIType: "Data Analysis",
                },
              },
              position: { x: -350, y: -200 },
            },
            {
              id: "2",
              type: "custom",
              data: {
                ...mockMyAI,
                myAI: {
                  ...mockMyAI.myAI,
                  name: "콘텐츠 생성 AI",
                  AIType: "Content Creation",
                },
              },
              position: { x: 0, y: -200 },
            },
            {
              id: "3",
              type: "custom",
              data: {
                ...mockMyAI,
                myAI: {
                  ...mockMyAI.myAI,
                  name: "고객 지원 AI",
                  AIType: "Customer Support",
                },
              },
              position: { x: 350, y: -200 },
            },
          ]}
          nodeTypes={{
            custom: MyAINode,
          }}
          fitView
          minZoom={0.5}
          maxZoom={1.5}
        />
      </div>
    </ReactFlowProvider>
  ),
};

/**
 * 긴 텍스트를 가진 노드입니다.
 * 긴 이름과 설명이 어떻게 표시되는지 확인할 수 있습니다.
 */
export const LongText: Story = {
  args: {
    data: {
      ...mockMyAI,
      myAI: {
        ...mockMyAI.myAI,
        name: "매우 긴 이름을 가진 인공지능 어시스턴트 시스템",
        description:
          "이것은 매우 긴 설명 텍스트입니다. 실제 환경에서 긴 설명이 어떻게 표시되는지 확인하기 위한 예제입니다.",
      },
    },
    selected: false,
  },
};
