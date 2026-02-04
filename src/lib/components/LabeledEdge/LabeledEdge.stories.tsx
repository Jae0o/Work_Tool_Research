import { ReactFlow, ReactFlowProvider, type Edge, type Node } from "@xyflow/react";
import LabeledEdge from "./LabeledEdge";

import type { Meta, StoryObj } from "@storybook/react";

import "@xyflow/react/dist/style.css";

/**
 * ## LabeledEdge Component
 *
 * React Flow의 커스텀 엣지 컴포넌트로, 엣지 중앙에 레이블을 표시합니다.
 * Smooth Step 경로를 사용하며, 선택 시 스타일이 변경됩니다.
 *
 * ### 사용 방법
 * ```tsx
 * import LabeledEdge from "./LabeledEdge";
 * import { ReactFlow } from "@xyflow/react";
 *
 * const edgeTypes = {
 *   labeled: LabeledEdge,
 * };
 *
 * const edges = [
 *   {
 *     id: "e1-2",
 *     source: "1",
 *     target: "2",
 *     type: "labeled",
 *     data: { label: "연결" },
 *   },
 * ];
 *
 * <ReactFlow
 *   edges={edges}
 *   edgeTypes={edgeTypes}
 * />
 * ```
 *
 * ### Props & Type
 * - **id**: 엣지 고유 ID (string)
 * - **sourceX, sourceY**: 시작점 좌표 (number)
 * - **targetX, targetY**: 끝점 좌표 (number)
 * - **sourcePosition, targetPosition**: 연결 방향 (Position)
 * - **data.label**: 엣지에 표시할 레이블 텍스트 (string, optional)
 * - **selected**: 엣지 선택 여부 (boolean)
 *
 * ### 특징
 * - Smooth Step 경로 사용
 * - 레이블 클릭 가능 (pointer-events: all)
 * - 선택 시 border-color 변경
 * - 최대 너비 15rem, 초과 시 ellipsis
 */
const meta = {
  title: "Components/LabeledEdge",
  component: LabeledEdge,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story, context) => {
      const { edges = [], nodes = [] } = context.args;
      return (
        <ReactFlowProvider>
          <div style={{ width: "100vw", height: "100vh" }}>
            <ReactFlow
              nodes={nodes as Node[]}
              edges={edges as Edge[]}
              edgeTypes={{ labeled: LabeledEdge }}
              fitView
            />
          </div>
        </ReactFlowProvider>
      );
    },
  ],
  argTypes: {
    edges: {
      control: { disable: true },
      description: "엣지 배열 (React Flow Edge[])",
    },
    nodes: {
      control: { disable: true },
      description: "노드 배열 (React Flow Node[])",
    },
  },
} satisfies Meta<typeof LabeledEdge>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 LabeledEdge 사용 예시입니다.
 * 두 노드 사이에 레이블이 표시된 엣지가 연결됩니다.
 */
export const Default: Story = {
  args: {
    nodes: [
      {
        id: "1",
        position: { x: 100, y: 100 },
        data: { label: "노드 1" },
        type: "default",
      },
      {
        id: "2",
        position: { x: 400, y: 100 },
        data: { label: "노드 2" },
        type: "default",
      },
    ],
    edges: [
      {
        id: "e1-2",
        source: "1",
        target: "2",
        type: "labeled",
        data: { label: "연결" },
      },
    ],
  },
};

/**
 * 여러 개의 레이블 엣지를 사용한 예시입니다.
 */
export const Multiple: Story = {
  args: {
    nodes: [
      {
        id: "1",
        position: { x: 100, y: 100 },
        data: { label: "시작" },
        type: "default",
      },
      {
        id: "2",
        position: { x: 400, y: 100 },
        data: { label: "중간 1" },
        type: "default",
      },
      {
        id: "3",
        position: { x: 400, y: 300 },
        data: { label: "중간 2" },
        type: "default",
      },
      {
        id: "4",
        position: { x: 700, y: 200 },
        data: { label: "종료" },
        type: "default",
      },
    ],
    edges: [
      {
        id: "e1-2",
        source: "1",
        target: "2",
        type: "labeled",
        data: { label: "조건 A" },
      },
      {
        id: "e1-3",
        source: "1",
        target: "3",
        type: "labeled",
        data: { label: "조건 B" },
      },
      {
        id: "e2-4",
        source: "2",
        target: "4",
        type: "labeled",
        data: { label: "승인" },
      },
      {
        id: "e3-4",
        source: "3",
        target: "4",
        type: "labeled",
        data: { label: "거부" },
      },
    ],
  },
};

/**
 * 긴 레이블 텍스트는 자동으로 말줄임표(ellipsis)가 적용됩니다.
 */
export const LongLabel: Story = {
  args: {
    nodes: [
      {
        id: "1",
        position: { x: 100, y: 100 },
        data: { label: "A" },
        type: "default",
      },
      {
        id: "2",
        position: { x: 400, y: 100 },
        data: { label: "B" },
        type: "default",
      },
    ],
    edges: [
      {
        id: "e1-2",
        source: "1",
        target: "2",
        type: "labeled",
        data: {
          label: "이것은 매우 긴 레이블 텍스트로 최대 너비를 초과할 경우 말줄임표가 표시됩니다",
        },
      },
    ],
  },
};

/**
 * 레이블이 없는 엣지도 지원합니다.
 */
export const NoLabel: Story = {
  args: {
    nodes: [
      {
        id: "1",
        position: { x: 100, y: 100 },
        data: { label: "노드 1" },
        type: "default",
      },
      {
        id: "2",
        position: { x: 400, y: 100 },
        data: { label: "노드 2" },
        type: "default",
      },
    ],
    edges: [
      {
        id: "e1-2",
        source: "1",
        target: "2",
        type: "labeled",
        data: {},
      },
    ],
  },
};

/**
 * 엣지를 선택하면 스타일이 변경됩니다.
 * 엣지를 클릭하여 선택 상태를 확인하세요.
 */
export const Selectable: Story = {
  args: {
    nodes: [
      {
        id: "1",
        position: { x: 100, y: 100 },
        data: { label: "클릭하여 선택" },
        type: "default",
      },
      {
        id: "2",
        position: { x: 400, y: 100 },
        data: { label: "노드 2" },
        type: "default",
      },
      {
        id: "3",
        position: { x: 400, y: 300 },
        data: { label: "노드 3" },
        type: "default",
      },
    ],
    edges: [
      {
        id: "e1-2",
        source: "1",
        target: "2",
        type: "labeled",
        data: { label: "엣지 1 (클릭)" },
      },
      {
        id: "e1-3",
        source: "1",
        target: "3",
        type: "labeled",
        data: { label: "엣지 2 (클릭)" },
      },
    ],
  },
};
