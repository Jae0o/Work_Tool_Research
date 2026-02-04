import {
  ReactFlow,
  Background,
  Controls,
  ReactFlowProvider,
} from "@xyflow/react";
import DecisionNode from "./DecisionNode";
import type { DecisionBranch } from "../../types";
import "@xyflow/react/dist/style.css";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## DecisionNode Component
 *
 * React Flow 커스텀 노드 컴포넌트로, 분기 조건을 관리하는 Decision Maker 노드입니다.
 * 최대 3개의 분기를 추가할 수 있으며, 각 분기는 조건과 함께 Handle로 연결됩니다.
 *
 * ### 주요 기능
 * - 분기 추가/삭제 (최대 3개)
 * - Active 상태 토글
 * - React Flow Handle 자동 배치
 * - 분기 조건 텍스트 관리
 *
 * ### 사용 방법
 * ```tsx
 * import { DecisionNode } from "./DecisionNode";
 * import { ReactFlow } from "@xyflow/react";
 *
 * const nodes = [
 *   {
 *     id: "decision-1",
 *     type: "decision",
 *     position: { x: 0, y: 0 },
 *     data: {
 *       isActive: true,
 *       branches: [
 *         { id: "branch-1", condition: "조건 1" }
 *       ]
 *     }
 *   }
 * ];
 *
 * <ReactFlow nodes={nodes} nodeTypes={{ decision: DecisionNode }} />
 * ```
 *
 * ### Props & Type
 * - **id**: 노드 고유 ID (string)
 * - **data**: DecisionNodeData 타입 객체
 *   - **isActive**: 활성화 상태 (boolean)
 *   - **branches**: 분기 배열 (DecisionBranch[])
 *     - **id**: 분기 고유 ID (string)
 *     - **condition**: 분기 조건 텍스트 (string)
 * - **selected**: 노드 선택 상태 (boolean, optional)
 */
const meta = {
  title: "Components/DecisionNode",
  component: DecisionNode,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: "text",
      description: "노드 고유 ID",
    },
    data: {
      control: "object",
      description: "DecisionNodeData 타입 (isActive, branches)",
    },
    selected: {
      control: "boolean",
      description: "노드 선택 상태 (선택 시 primary 색상 border 표시)",
    },
  },
  decorators: [
    (Story) => (
      <ReactFlowProvider>
        <div style={{ width: "100vw", height: "100vh" }}>
          <Story />
        </div>
      </ReactFlowProvider>
    ),
  ],
} satisfies Meta<typeof DecisionNode>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 분기가 없는 기본 DecisionNode입니다.
 * "분기 추가" 버튼을 클릭하여 최대 3개의 분기를 추가할 수 있습니다.
 */
export const Default: Story = {
  render: (args) => {
    const nodes = [
      {
        id: args.id,
        type: "decision",
        position: { x: 250, y: 100 },
        data: args.data,
        selected: args.selected,
      },
    ];

    const nodeTypes = { decision: DecisionNode };

    return (
      <ReactFlow nodes={nodes} nodeTypes={nodeTypes} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    );
  },
  args: {
    id: "decision-1",
    data: {
      isActive: true,
      branches: [],
    },
    selected: false,
  },
};

/**
 * 분기가 1개 추가된 상태입니다.
 * Handle이 우측에 생성되며, 분기 조건이 표시됩니다.
 */
export const WithOneBranch: Story = {
  render: (args) => {
    const nodes = [
      {
        id: args.id,
        type: "decision",
        position: { x: 250, y: 100 },
        data: args.data,
        selected: args.selected,
      },
    ];

    const nodeTypes = { decision: DecisionNode };

    return (
      <ReactFlow nodes={nodes} nodeTypes={nodeTypes} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    );
  },
  args: {
    id: "decision-2",
    data: {
      isActive: true,
      branches: [
        { id: "branch-1", condition: "사용자 등급이 Premium인 경우" },
      ] as DecisionBranch[],
    },
    selected: false,
  },
};

/**
 * 분기가 3개(최대)인 상태입니다.
 * 더 이상 분기를 추가할 수 없으며, "분기 추가" 버튼이 비활성화됩니다.
 */
export const WithMaxBranches: Story = {
  render: (args) => {
    const nodes = [
      {
        id: args.id,
        type: "decision",
        position: { x: 250, y: 100 },
        data: args.data,
        selected: args.selected,
      },
    ];

    const nodeTypes = { decision: DecisionNode };

    return (
      <ReactFlow nodes={nodes} nodeTypes={nodeTypes} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    );
  },
  args: {
    id: "decision-3",
    data: {
      isActive: true,
      branches: [
        { id: "branch-1", condition: "금액이 10만원 이상인 경우" },
        { id: "branch-2", condition: "금액이 5만원 이상 10만원 미만인 경우" },
        { id: "branch-3", condition: "금액이 5만원 미만인 경우" },
      ] as DecisionBranch[],
    },
    selected: false,
  },
};

/**
 * 노드가 선택된 상태입니다.
 * 선택 시 primary 색상의 border가 표시됩니다.
 */
export const Selected: Story = {
  render: (args) => {
    const nodes = [
      {
        id: args.id,
        type: "decision",
        position: { x: 250, y: 100 },
        data: args.data,
        selected: args.selected,
      },
    ];

    const nodeTypes = { decision: DecisionNode };

    return (
      <ReactFlow nodes={nodes} nodeTypes={nodeTypes} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    );
  },
  args: {
    id: "decision-4",
    data: {
      isActive: true,
      branches: [
        { id: "branch-1", condition: "조건 1" },
        { id: "branch-2", condition: "조건 2" },
      ] as DecisionBranch[],
    },
    selected: true,
  },
};

/**
 * 비활성화된 DecisionNode입니다.
 * isActive가 false로 설정되어 있으며, 토글 버튼이 OFF 상태입니다.
 */
export const Inactive: Story = {
  render: (args) => {
    const nodes = [
      {
        id: args.id,
        type: "decision",
        position: { x: 250, y: 100 },
        data: args.data,
        selected: args.selected,
      },
    ];

    const nodeTypes = { decision: DecisionNode };

    return (
      <ReactFlow nodes={nodes} nodeTypes={nodeTypes} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    );
  },
  args: {
    id: "decision-5",
    data: {
      isActive: false,
      branches: [
        { id: "branch-1", condition: "비활성화된 노드의 분기" },
      ] as DecisionBranch[],
    },
    selected: false,
  },
};

/**
 * 여러 DecisionNode가 연결된 플로우 예시입니다.
 * 실제 워크플로우에서 어떻게 사용되는지 확인할 수 있습니다.
 */
export const InFlow: Story = {
  render: () => {
    const nodes = [
      {
        id: "start",
        type: "input",
        position: { x: 100, y: 150 },
        data: { label: "시작" },
      },
      {
        id: "decision-1",
        type: "decision",
        position: { x: 300, y: 100 },
        data: {
          isActive: true,
          branches: [
            { id: "branch-1", condition: "조건 A" },
            { id: "branch-2", condition: "조건 B" },
          ] as DecisionBranch[],
        },
      },
      {
        id: "end-1",
        type: "output",
        position: { x: 600, y: 50 },
        data: { label: "결과 A" },
      },
      {
        id: "end-2",
        type: "output",
        position: { x: 600, y: 200 },
        data: { label: "결과 B" },
      },
    ];

    const edges = [
      { id: "e1", source: "start", target: "decision-1" },
      {
        id: "e2",
        source: "decision-1",
        sourceHandle: "branch-1",
        target: "end-1",
      },
      {
        id: "e3",
        source: "decision-1",
        sourceHandle: "branch-2",
        target: "end-2",
      },
    ];

    const nodeTypes = { decision: DecisionNode };

    return (
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    );
  },
  args: {
    id: "decision-flow",
    data: {
      isActive: true,
      branches: [],
    },
    selected: false,
  },
};
