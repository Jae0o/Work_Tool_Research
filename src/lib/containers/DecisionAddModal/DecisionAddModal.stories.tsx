import { useState } from "react";
import DecisionAddModal from "./DecisionAddModal";
import { Button } from "../../components";
import type { DecisionBranch } from "../../types";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## DecisionAddModal Component
 *
 * Decision 노드에 새로운 분기 조건을 추가하기 위한 모달 컴포넌트입니다.
 * Modal 컴포넌트를 사용하여 구현되었으며, 최대 3개의 분기까지 추가할 수 있습니다.
 *
 * ### 사용 방법
 * ```tsx
 * import DecisionAddModal from "./DecisionAddModal";
 * import { useState } from "react";
 * import type { DecisionBranch } from "../../types";
 *
 * const [isOpen, setIsOpen] = useState(false);
 * const [branches, setBranches] = useState<DecisionBranch[]>([]);
 *
 * const handleSave = (condition: string) => {
 *   const newBranch: DecisionBranch = {
 *     id: `branch-${Date.now()}`,
 *     condition
 *   };
 *   setBranches([...branches, newBranch]);
 * };
 *
 * <DecisionAddModal
 *   isShow={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   onSave={handleSave}
 *   currentBranches={branches}
 * />
 * ```
 *
 * ### Props & Type
 * - **isShow**: 모달 표시 여부 (boolean)
 * - **onClose**: 모달을 닫을 때 호출되는 콜백 함수
 * - **onSave**: 분기 조건을 저장할 때 호출되는 콜백 함수 (condition: string)
 * - **currentBranches**: 현재 존재하는 분기 목록 (DecisionBranch[])
 *
 * ### 주요 기능
 * - **분기 제한**: 최대 3개의 분기까지만 추가 가능합니다.
 * - **입력 유효성 검사**: 빈 조건은 저장할 수 없습니다.
 * - **자동 상태 초기화**: 모달을 닫을 때 입력값이 자동으로 초기화됩니다.
 * - **조건부 비활성화**: 최대 분기 수에 도달하면 입력이 비활성화됩니다.
 */
const meta = {
  title: "Containers/DecisionAddModal",
  component: DecisionAddModal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Decision 노드에 분기 조건을 추가하기 위한 모달 컴포넌트입니다. 최대 3개의 분기까지 추가할 수 있습니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isShow: {
      control: "boolean",
      description: "모달 표시 여부를 제어합니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onClose: {
      action: "closed",
      control: { disable: true },
      description: "모달을 닫을 때 호출되는 콜백 함수입니다.",
      table: {
        type: { summary: "() => void" },
      },
    },
    onSave: {
      action: "saved",
      control: { disable: true },
      description:
        "분기 조건을 저장할 때 호출되는 콜백 함수입니다. 입력된 조건 문자열을 인자로 받습니다.",
      table: {
        type: { summary: "(condition: string) => void" },
      },
    },
    currentBranches: {
      control: { disable: true },
      description:
        "현재 존재하는 분기 목록입니다. 분기 개수를 표시하고 최대 개수 제한에 사용됩니다.",
      table: {
        type: { summary: "DecisionBranch[]" },
        defaultValue: { summary: "[]" },
      },
    },
  },
} satisfies Meta<typeof DecisionAddModal>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 분기가 없는 기본 상태입니다.
 * 최대 3개의 분기를 추가할 수 있습니다.
 */
export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const [branches, setBranches] = useState<DecisionBranch[]>([]);

    const handleSave = (condition: string) => {
      const newBranch: DecisionBranch = {
        id: `branch-${Date.now()}`,
        condition,
      };
      setBranches([...branches, newBranch]);
      console.log("새 분기 추가:", newBranch);
    };

    return (
      <>
        <div style={{ minHeight: "50rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
          <Button
            onClick={() => setIsOpen(true)}
            style={{
              padding: "1rem 2rem",
              backgroundColor: "#007bff",
              color: "white",
              borderRadius: "0.5rem",
              fontSize: "1.4rem",
              fontWeight: "600",
            }}
          >
            분기 추가 모달 열기
          </Button>

          <div
            style={{
              padding: "1.5rem",
              backgroundColor: "#f8f9fa",
              borderRadius: "0.5rem",
              minWidth: "35rem",
            }}
          >
            <h3 style={{ fontSize: "1.6rem", marginBottom: "1rem", fontWeight: "600" }}>
              현재 분기 목록 ({branches.length}/3)
            </h3>
            {branches.length === 0 ? (
              <p style={{ fontSize: "1.3rem", color: "#6c757d" }}>아직 추가된 분기가 없습니다.</p>
            ) : (
              <ul style={{ fontSize: "1.3rem", paddingLeft: "2rem" }}>
                {branches.map((branch, index) => (
                  <li key={branch.id} style={{ marginBottom: "0.5rem" }}>
                    분기 {index + 1}: {branch.condition}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <DecisionAddModal
          {...args}
          isShow={isOpen}
          onClose={() => setIsOpen(false)}
          onSave={handleSave}
          currentBranches={branches}
        />
      </>
    );
  },
};

/**
 * 이미 1개의 분기가 존재하는 상태입니다.
 * 최대 2개의 분기를 더 추가할 수 있습니다.
 */
export const WithOneBranch: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const [branches, setBranches] = useState<DecisionBranch[]>([
      { id: "branch-1", condition: "사용자가 로그인된 경우" },
    ]);

    const handleSave = (condition: string) => {
      const newBranch: DecisionBranch = {
        id: `branch-${Date.now()}`,
        condition,
      };
      setBranches([...branches, newBranch]);
      console.log("새 분기 추가:", newBranch);
    };

    return (
      <>
        <div style={{ minHeight: "50rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
          <Button
            onClick={() => setIsOpen(true)}
            style={{
              padding: "1rem 2rem",
              backgroundColor: "#28a745",
              color: "white",
              borderRadius: "0.5rem",
              fontSize: "1.4rem",
              fontWeight: "600",
            }}
          >
            분기 추가 모달 열기 (1개 존재)
          </Button>

          <div
            style={{
              padding: "1.5rem",
              backgroundColor: "#f8f9fa",
              borderRadius: "0.5rem",
              minWidth: "35rem",
            }}
          >
            <h3 style={{ fontSize: "1.6rem", marginBottom: "1rem", fontWeight: "600" }}>
              현재 분기 목록 ({branches.length}/3)
            </h3>
            <ul style={{ fontSize: "1.3rem", paddingLeft: "2rem" }}>
              {branches.map((branch, index) => (
                <li key={branch.id} style={{ marginBottom: "0.5rem" }}>
                  분기 {index + 1}: {branch.condition}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <DecisionAddModal
          {...args}
          isShow={isOpen}
          onClose={() => setIsOpen(false)}
          onSave={handleSave}
          currentBranches={branches}
        />
      </>
    );
  },
};

/**
 * 이미 2개의 분기가 존재하는 상태입니다.
 * 최대 1개의 분기를 더 추가할 수 있습니다.
 */
export const WithTwoBranches: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const [branches, setBranches] = useState<DecisionBranch[]>([
      { id: "branch-1", condition: "사용자가 로그인된 경우" },
      { id: "branch-2", condition: "사용자가 관리자인 경우" },
    ]);

    const handleSave = (condition: string) => {
      const newBranch: DecisionBranch = {
        id: `branch-${Date.now()}`,
        condition,
      };
      setBranches([...branches, newBranch]);
      console.log("새 분기 추가:", newBranch);
    };

    return (
      <>
        <div style={{ minHeight: "50rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
          <Button
            onClick={() => setIsOpen(true)}
            style={{
              padding: "1rem 2rem",
              backgroundColor: "#ffc107",
              color: "#000",
              borderRadius: "0.5rem",
              fontSize: "1.4rem",
              fontWeight: "600",
            }}
          >
            분기 추가 모달 열기 (2개 존재)
          </Button>

          <div
            style={{
              padding: "1.5rem",
              backgroundColor: "#f8f9fa",
              borderRadius: "0.5rem",
              minWidth: "35rem",
            }}
          >
            <h3 style={{ fontSize: "1.6rem", marginBottom: "1rem", fontWeight: "600" }}>
              현재 분기 목록 ({branches.length}/3)
            </h3>
            <ul style={{ fontSize: "1.3rem", paddingLeft: "2rem" }}>
              {branches.map((branch, index) => (
                <li key={branch.id} style={{ marginBottom: "0.5rem" }}>
                  분기 {index + 1}: {branch.condition}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <DecisionAddModal
          {...args}
          isShow={isOpen}
          onClose={() => setIsOpen(false)}
          onSave={handleSave}
          currentBranches={branches}
        />
      </>
    );
  },
};

/**
 * 최대 개수(3개)의 분기가 존재하는 상태입니다.
 * 더 이상 분기를 추가할 수 없으며, 입력이 비활성화됩니다.
 */
export const MaxBranches: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const [branches] = useState<DecisionBranch[]>([
      { id: "branch-1", condition: "사용자가 로그인된 경우" },
      { id: "branch-2", condition: "사용자가 관리자인 경우" },
      { id: "branch-3", condition: "사용자가 프리미엄 멤버인 경우" },
    ]);

    const handleSave = (condition: string) => {
      console.log("최대 분기 수에 도달하여 저장할 수 없습니다:", condition);
    };

    return (
      <>
        <div style={{ minHeight: "50rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
          <Button
            onClick={() => setIsOpen(true)}
            style={{
              padding: "1rem 2rem",
              backgroundColor: "#dc3545",
              color: "white",
              borderRadius: "0.5rem",
              fontSize: "1.4rem",
              fontWeight: "600",
            }}
          >
            분기 추가 모달 열기 (최대 개수)
          </Button>

          <div
            style={{
              padding: "1.5rem",
              backgroundColor: "#fff3cd",
              border: "1px solid #ffc107",
              borderRadius: "0.5rem",
              minWidth: "35rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.6rem",
                marginBottom: "1rem",
                fontWeight: "600",
                color: "#856404",
              }}
            >
              ⚠️ 현재 분기 목록 ({branches.length}/3)
            </h3>
            <p style={{ fontSize: "1.3rem", color: "#856404", marginBottom: "1rem" }}>
              최대 분기 개수에 도달했습니다. 더 이상 추가할 수 없습니다.
            </p>
            <ul style={{ fontSize: "1.3rem", paddingLeft: "2rem", color: "#856404" }}>
              {branches.map((branch, index) => (
                <li key={branch.id} style={{ marginBottom: "0.5rem" }}>
                  분기 {index + 1}: {branch.condition}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <DecisionAddModal
          {...args}
          isShow={isOpen}
          onClose={() => setIsOpen(false)}
          onSave={handleSave}
          currentBranches={branches}
        />
      </>
    );
  },
};

/**
 * 모달이 열린 상태로 시작하는 예시입니다.
 * Controls 패널에서 props를 직접 조작하여 동작을 테스트할 수 있습니다.
 */
export const Playground: Story = {
  args: {
    isShow: true,
    currentBranches: [
      { id: "branch-1", condition: "사용자가 로그인된 경우" },
    ],
  },
  render: (args) => {
    const handleSave = (condition: string) => {
      console.log("저장된 조건:", condition);
    };

    return (
      <div style={{ minHeight: "50rem" }}>
        <DecisionAddModal {...args} onSave={handleSave} />
      </div>
    );
  },
};
