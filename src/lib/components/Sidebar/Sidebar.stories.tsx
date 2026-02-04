import Sidebar from "./Sidebar";
import { ReactFlow, ReactFlowProvider, Background } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## Sidebar Component
 *
 * React Flow 캔버스의 왼쪽 상단에 표시되는 사이드바 컴포넌트입니다.
 * MyAI 추가 버튼과 Decision Node 추가 버튼을 제공합니다.
 *
 * ### 주요 기능
 * - **PlusIcon 버튼**: MyAISelector 토글 표시
 * - **DecisionIcon 버튼**: Decision Node 추가
 * - **useToggle Hook**: 토글 상태 관리
 * - **React Flow Panel**: React Flow 캔버스 내 배치
 *
 * ### 사용 방법
 * ```tsx
 * import { ReactFlow, ReactFlowProvider } from "@xyflow/react";
 * import Sidebar from "./Sidebar";
 *
 * function App() {
 *   return (
 *     <ReactFlowProvider>
 *       <ReactFlow>
 *         <Sidebar />
 *       </ReactFlow>
 *     </ReactFlowProvider>
 *   );
 * }
 * ```
 *
 * ### Dependencies
 * - `@xyflow/react` - Panel 컴포넌트 사용
 * - `useToggle` - 토글 상태 관리 Hook
 * - `useAddDecisionNode` - Decision Node 추가 Hook
 * - `Button`, `PlusIcon`, `DecisionIcon`, `MyAISelector` - 자식 컴포넌트
 */
const meta = {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ReactFlowProvider>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "relative",
          }}
        >
          <ReactFlow nodes={[]} edges={[]} fitView>
            <Background />
            <Story />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    ),
  ],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 Sidebar 표시입니다.
 * React Flow Panel을 통해 캔버스 왼쪽 상단(top-left)에 고정되어 표시됩니다.
 */
export const Default: Story = {};

/**
 * MyAI 추가 버튼을 클릭하면 MyAISelector가 토글 표시됩니다.
 * 실제로 버튼을 클릭하여 동작을 확인해보세요.
 */
export const Interactive: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "PlusIcon 버튼을 클릭하면 MyAISelector가 나타나고, DecisionIcon 버튼을 클릭하면 Decision Node가 추가됩니다.",
      },
    },
  },
};
