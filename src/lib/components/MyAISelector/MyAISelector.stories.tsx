import { ReactFlowProvider } from "@xyflow/react";
import MyAISelector from "./MyAISelector";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## MyAISelector Component
 *
 * AI 목록을 선택하여 React Flow 캔버스에 노드로 추가하는 선택기 컴포넌트입니다.
 * ReactFlow의 `useReactFlow` Hook을 사용하므로 **ReactFlowProvider 내부에서만 동작**합니다.
 *
 * ### 사용 방법
 * ```tsx
 * import { ReactFlowProvider } from "@xyflow/react";
 * import MyAISelector from "./MyAISelector";
 *
 * <ReactFlowProvider>
 *   <MyAISelector onClose={() => console.log("Closed")} />
 * </ReactFlowProvider>
 * ```
 *
 * ### Props & Type
 * - **onClose**: 선택기를 닫을 때 호출되는 콜백 함수 (함수, required)
 *   - AI 선택 시 또는 외부 영역 클릭 시 자동으로 호출됩니다.
 *
 * ### 주요 기능
 * - **AI 목록 표시**: mockMyAIList 데이터 기반 AI 목록 렌더링
 * - **AI 선택**: 클릭 시 React Flow 캔버스에 노드 추가
 * - **외부 클릭 감지**: `useClickAway` Hook으로 외부 클릭 시 자동 닫기
 * - **동적 노드 배치**: 현재 뷰포트와 노드 개수를 고려한 위치 계산
 */
const meta = {
  title: "Components/MyAISelector",
  component: MyAISelector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClose: {
      control: { disable: true },
      description: "선택기를 닫을 때 호출되는 콜백 함수 (AI 선택 시 또는 외부 클릭 시)",
    },
  },
  decorators: [
    (Story) => (
      <ReactFlowProvider>
        <div style={{ width: "40rem", height: "50rem" }}>
          <Story />
        </div>
      </ReactFlowProvider>
    ),
  ],
} satisfies Meta<typeof MyAISelector>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 MyAISelector 컴포넌트입니다.
 * AI 목록이 표시되며, 각 항목을 클릭하거나 외부를 클릭하면 onClose가 호출됩니다.
 */
export const Default: Story = {
  args: {
    onClose: () => console.log("MyAISelector closed"),
  },
};

/**
 * 실제 사용 시나리오를 시뮬레이션한 Story입니다.
 * onClose 콜백에서 선택기가 닫히는 동작을 확인할 수 있습니다.
 */
export const WithCallback: Story = {
  args: {
    onClose: () => {
      console.log("AI 선택기가 닫혔습니다.");
      alert("AI 선택기가 닫혔습니다. (AI 선택 또는 외부 클릭)");
    },
  },
};

/**
 * ReactFlow 캔버스와 함께 사용하는 예시입니다.
 * 실제 프로젝트에서는 ReactFlow와 함께 렌더링됩니다.
 */
export const WithReactFlow: Story = {
  render: (args) => (
    <div style={{ position: "relative", width: "80rem", height: "60rem" }}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
        }}
      >
        <MyAISelector {...args} />
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#f5f5f5",
          border: "2px dashed #ccc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.4rem",
          color: "#999",
        }}
      >
        React Flow Canvas Area
      </div>
    </div>
  ),
  args: {
    onClose: () => console.log("Closed"),
  },
};
