import { ReactFlow, ReactFlowProvider, Background } from "@xyflow/react";
import RequestNode from "./RequestNode";
import type { RequestNodeData } from "../../types";
import type { Meta, StoryObj } from "@storybook/react";

import "@xyflow/react/dist/style.css";

/**
 * ## RequestNode Component
 *
 * React Flow 환경에서 사용되는 질문 입력 커스텀 노드 컴포넌트입니다.
 * 사용자 입력을 받는 textarea를 포함하며, Handle을 통해 다른 노드와 연결됩니다.
 *
 * ### 사용 방법
 * ```tsx
 * import { ReactFlow } from "@xyflow/react";
 * import RequestNode from "./RequestNode";
 *
 * const nodeTypes = { requestNode: RequestNode };
 *
 * const nodes = [
 *   {
 *     id: "1",
 *     type: "requestNode",
 *     position: { x: 100, y: 100 },
 *     data: {
 *       textInput: "사용자가 입력한 질문",
 *       placeholder: "질문을 입력하세요",
 *     },
 *   },
 * ];
 *
 * <ReactFlow nodes={nodes} nodeTypes={nodeTypes} />
 * ```
 *
 * ### Props & Type
 * - **data**: RequestNodeData 타입의 노드 데이터
 *   - **textInput**: textarea에 표시될 텍스트 (string)
 *   - **placeholder**: textarea placeholder (string, optional)
 * - **selected**: 노드 선택 여부 (boolean, optional)
 *
 * ### 주요 기능
 * - **React Flow Handle**: Position.Right에 source Handle이 위치하여 다른 노드로 연결 가능
 * - **ActivityIcon**: 헤더에 아이콘 표시
 * - **readOnly textarea**: 읽기 전용 textarea로 데이터 표시
 * - **선택 상태**: selected prop에 따라 border 색상 변경 (primary 색상)
 */
const meta = {
  title: "Components/RequestNode",
  component: RequestNode,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "React Flow의 커스텀 노드로, 질문 입력을 받는 노드입니다. Handle을 통해 다른 노드와 연결할 수 있습니다.",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ReactFlowProvider>
        <div style={{ width: "80rem", height: "60rem" }}>
          <Story />
        </div>
      </ReactFlowProvider>
    ),
  ],
  argTypes: {
    data: {
      control: "object",
      description: "노드에 표시될 데이터 (textInput, placeholder)",
      table: {
        type: { summary: "RequestNodeData" },
      },
    },
    selected: {
      control: "boolean",
      description: "노드 선택 여부 (border 색상 변경)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
} satisfies Meta<typeof RequestNode>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 RequestNode 스타일입니다.
 * React Flow 환경에서 단일 노드로 렌더링됩니다.
 */
export const Default: Story = {
  render: (args) => {
    const nodes = [
      {
        id: "request-1",
        type: "requestNode",
        position: { x: 250, y: 150 },
        data: args.data,
        selected: args.selected,
      },
    ];

    return (
      <ReactFlow
        nodes={nodes}
        nodeTypes={{ requestNode: RequestNode }}
        fitView
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
      >
        <Background />
      </ReactFlow>
    );
  },
  args: {
    data: {
      textInput: "React Flow에 대해 설명해주세요",
      placeholder: "질문을 입력하세요",
    },
    selected: false,
  },
};

/**
 * 선택된 상태의 RequestNode입니다.
 * border 색상이 primary 색상으로 변경됩니다.
 */
export const Selected: Story = {
  render: (args) => {
    const nodes = [
      {
        id: "request-1",
        type: "requestNode",
        position: { x: 250, y: 150 },
        data: args.data,
        selected: args.selected,
      },
    ];

    return (
      <ReactFlow
        nodes={nodes}
        nodeTypes={{ requestNode: RequestNode }}
        fitView
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
      >
        <Background />
      </ReactFlow>
    );
  },
  args: {
    data: {
      textInput: "선택된 노드입니다",
      placeholder: "질문을 입력하세요",
    },
    selected: true,
  },
};

/**
 * 빈 상태의 RequestNode입니다.
 * textInput이 비어있어 placeholder가 표시됩니다.
 */
export const Empty: Story = {
  render: (args) => {
    const nodes = [
      {
        id: "request-1",
        type: "requestNode",
        position: { x: 250, y: 150 },
        data: args.data,
        selected: args.selected,
      },
    ];

    return (
      <ReactFlow
        nodes={nodes}
        nodeTypes={{ requestNode: RequestNode }}
        fitView
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
      >
        <Background />
      </ReactFlow>
    );
  },
  args: {
    data: {
      textInput: "",
      placeholder: "여기에 질문을 입력하세요",
    },
    selected: false,
  },
};

/**
 * 긴 텍스트가 입력된 RequestNode입니다.
 * textarea는 스크롤이 가능하여 긴 내용도 표시할 수 있습니다.
 */
export const LongText: Story = {
  render: (args) => {
    const nodes = [
      {
        id: "request-1",
        type: "requestNode",
        position: { x: 250, y: 150 },
        data: args.data,
        selected: args.selected,
      },
    ];

    return (
      <ReactFlow
        nodes={nodes}
        nodeTypes={{ requestNode: RequestNode }}
        fitView
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
      >
        <Background />
      </ReactFlow>
    );
  },
  args: {
    data: {
      textInput:
        "React Flow는 노드 기반 그래프를 구축하기 위한 강력한 라이브러리입니다. 커스텀 노드, 엣지, 핸들을 만들 수 있으며, 드래그 앤 드롭, 확대/축소, 패닝 등의 기능을 제공합니다. 복잡한 워크플로우, 다이어그램, 데이터 시각화 등 다양한 용도로 활용할 수 있습니다.",
      placeholder: "질문을 입력하세요",
    },
    selected: false,
  },
};

/**
 * 여러 RequestNode를 연결한 예시입니다.
 * Handle을 통해 다른 노드와 연결할 수 있습니다.
 */
export const WithConnections: Story = {
  render: () => {
    const nodes = [
      {
        id: "request-1",
        type: "requestNode",
        position: { x: 100, y: 100 },
        data: {
          textInput: "첫 번째 질문",
          placeholder: "질문을 입력하세요",
        } as RequestNodeData,
      },
      {
        id: "request-2",
        type: "requestNode",
        position: { x: 450, y: 100 },
        data: {
          textInput: "두 번째 질문",
          placeholder: "질문을 입력하세요",
        } as RequestNodeData,
      },
      {
        id: "request-3",
        type: "requestNode",
        position: { x: 100, y: 300 },
        data: {
          textInput: "세 번째 질문",
          placeholder: "질문을 입력하세요",
        } as RequestNodeData,
      },
    ];

    const edges = [
      {
        id: "e1-2",
        source: "request-1",
        target: "request-2",
        animated: true,
      },
      {
        id: "e1-3",
        source: "request-1",
        target: "request-3",
        animated: true,
      },
    ];

    return (
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={{ requestNode: RequestNode }}
        fitView
      >
        <Background />
      </ReactFlow>
    );
  },
};

/**
 * 인터랙티브한 RequestNode 예시입니다.
 * 드래그, 선택, 연결이 가능합니다.
 */
export const Interactive: Story = {
  render: () => {
    const nodes = [
      {
        id: "request-1",
        type: "requestNode",
        position: { x: 200, y: 150 },
        data: {
          textInput: "드래그 및 연결이 가능합니다",
          placeholder: "질문을 입력하세요",
        } as RequestNodeData,
      },
      {
        id: "request-2",
        type: "requestNode",
        position: { x: 500, y: 150 },
        data: {
          textInput: "노드를 선택해보세요",
          placeholder: "질문을 입력하세요",
        } as RequestNodeData,
      },
    ];

    return (
      <ReactFlow
        nodes={nodes}
        nodeTypes={{ requestNode: RequestNode }}
        fitView
        nodesDraggable={true}
        nodesConnectable={true}
        elementsSelectable={true}
      >
        <Background />
      </ReactFlow>
    );
  },
};
