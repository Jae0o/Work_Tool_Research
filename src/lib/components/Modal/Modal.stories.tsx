import { useState } from "react";
import Modal from "./Modal";
import Button from "../Button/Button";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## Modal Component
 *
 * framer-motion 애니메이션과 Portal을 사용한 모달 컴포넌트입니다.
 * Away Click 및 ESC 키로 닫기 기능을 제공하며, 선택적으로 CloseIcon을 표시할 수 있습니다.
 *
 * ### 사용 방법
 * ```tsx
 * import Modal from "./Modal";
 * import { useState } from "react";
 *
 * const [isOpen, setIsOpen] = useState(false);
 *
 * <Modal
 *   isShow={isOpen}
 *   onClose={() => setIsOpen(false)}
 * >
 *   <h2>모달 콘텐츠</h2>
 *   <p>여기에 원하는 콘텐츠를 넣으세요.</p>
 * </Modal>
 * ```
 *
 * ### Props & Type
 * - **children**: 모달 내부에 표시될 콘텐츠 (ReactNode)
 * - **isShow**: 모달 표시 여부 (boolean)
 * - **onClose**: 모달을 닫을 때 호출되는 콜백 함수
 * - **hideCloseIcon**: 닫기 아이콘 숨김 여부 (boolean, optional, default: false)
 * - **disableAwayClick**: Away Click으로 닫기 비활성화 여부 (boolean, optional, default: false)
 *
 * ### 주요 기능
 * - **Portal 렌더링**: body에 Portal로 렌더링되어 레이아웃 제약 없이 표시됩니다.
 * - **framer-motion 애니메이션**: scale과 opacity 애니메이션으로 부드러운 등장/퇴장 효과를 제공합니다.
 * - **Away Click**: 모달 외부 클릭 시 자동으로 닫힙니다. (disableAwayClick으로 비활성화 가능)
 * - **ESC 키**: ESC 키를 눌러 모달을 닫을 수 있습니다.
 * - **CloseIcon**: 우측 상단에 닫기 버튼이 표시됩니다. (hideCloseIcon으로 숨김 가능)
 */
const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Portal과 framer-motion을 활용한 범용 모달 컴포넌트입니다. Away Click, ESC 키, Close Icon을 통해 닫을 수 있습니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { disable: true },
      description: "모달 내부에 표시될 콘텐츠",
      table: {
        type: { summary: "ReactNode" },
      },
    },
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
    hideCloseIcon: {
      control: "boolean",
      description:
        "true로 설정 시 우측 상단의 닫기 아이콘을 숨깁니다. 커스텀 닫기 버튼을 구현할 때 유용합니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disableAwayClick: {
      control: "boolean",
      description:
        "true로 설정 시 모달 외부 클릭으로 모달이 닫히지 않습니다. 중요한 정보를 확인해야 하는 경우 유용합니다.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 모달 스타일입니다.
 * Close Icon을 클릭하거나, 모달 외부를 클릭하거나, ESC 키를 눌러 닫을 수 있습니다.
 */
export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
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
          모달 열기
        </Button>
        <Modal {...args} isShow={isOpen} onClose={() => setIsOpen(false)}>
          <div style={{ padding: "2rem", minWidth: "30rem" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              기본 모달
            </h2>
            <p style={{ fontSize: "1.4rem", color: "#666", lineHeight: 1.6 }}>
              이것은 기본 모달입니다. Close 아이콘, 외부 클릭, 또는 ESC 키로
              닫을 수 있습니다.
            </p>
          </div>
        </Modal>
      </>
    );
  },
};

/**
 * Close Icon이 숨겨진 모달입니다.
 * 커스텀 닫기 버튼을 구현하거나, 외부 클릭 또는 ESC 키로만 닫을 수 있습니다.
 */
export const WithoutCloseIcon: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button
          onClick={() => setIsOpen(true)}
          style={{
            padding: "1rem 2rem",
            backgroundColor: "#6c757d",
            color: "white",
            borderRadius: "0.5rem",
            fontSize: "1.4rem",
            fontWeight: "600",
          }}
        >
          Close Icon 없는 모달 열기
        </Button>
        <Modal
          {...args}
          isShow={isOpen}
          onClose={() => setIsOpen(false)}
          hideCloseIcon={true}
        >
          <div style={{ padding: "2rem", minWidth: "30rem" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              Close Icon 숨김
            </h2>
            <p
              style={{
                fontSize: "1.4rem",
                color: "#666",
                lineHeight: 1.6,
                marginBottom: "2rem",
              }}
            >
              이 모달은 Close Icon이 숨겨져 있습니다. 외부 클릭 또는 ESC 키로
              닫을 수 있습니다.
            </p>
            <Button
              onClick={() => setIsOpen(false)}
              style={{
                padding: "0.8rem 1.6rem",
                backgroundColor: "#dc3545",
                color: "white",
                borderRadius: "0.4rem",
                fontSize: "1.3rem",
                width: "100%",
              }}
            >
              커스텀 닫기 버튼
            </Button>
          </div>
        </Modal>
      </>
    );
  },
};

/**
 * Away Click이 비활성화된 모달입니다.
 * 외부 클릭으로는 닫히지 않으며, Close Icon 또는 ESC 키로만 닫을 수 있습니다.
 * 중요한 정보를 확인해야 하는 경우 유용합니다.
 */
export const DisableAwayClick: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
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
          Away Click 비활성화 모달 열기
        </Button>
        <Modal
          {...args}
          isShow={isOpen}
          onClose={() => setIsOpen(false)}
          disableAwayClick={true}
        >
          <div style={{ padding: "2rem", minWidth: "35rem" }}>
            <h2
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
                color: "#ffc107",
              }}
            >
              ⚠️ 중요한 알림
            </h2>
            <p
              style={{
                fontSize: "1.4rem",
                color: "#666",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
              }}
            >
              이 모달은 Away Click이 비활성화되어 있습니다. 외부 클릭으로는
              닫히지 않으며, Close Icon 또는 ESC 키로만 닫을 수 있습니다.
            </p>
            <div
              style={{
                padding: "1rem",
                backgroundColor: "#fff3cd",
                borderRadius: "0.4rem",
                fontSize: "1.3rem",
                color: "#856404",
              }}
            >
              중요한 정보를 반드시 확인해야 하는 경우에 사용하세요.
            </div>
          </div>
        </Modal>
      </>
    );
  },
};

/**
 * 폼을 포함한 모달 예시입니다.
 * 실제 프로젝트에서 입력 폼, 설정, 확인 다이얼로그 등에 활용할 수 있습니다.
 */
export const WithForm: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "" });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(`제출됨:\n이름: ${formData.name}\n이메일: ${formData.email}`);
      setIsOpen(false);
      setFormData({ name: "", email: "" });
    };

    return (
      <>
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
          폼 모달 열기
        </Button>
        <Modal {...args} isShow={isOpen} onClose={() => setIsOpen(false)}>
          <form
            onSubmit={handleSubmit}
            style={{ padding: "2rem", minWidth: "40rem" }}
          >
            <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
              사용자 정보 입력
            </h2>

            <div style={{ marginBottom: "1.5rem" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "1.3rem",
                  marginBottom: "0.5rem",
                  fontWeight: "600",
                }}
              >
                이름
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  fontSize: "1.4rem",
                  border: "1px solid #ddd",
                  borderRadius: "0.4rem",
                }}
                placeholder="이름을 입력하세요"
                required
              />
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "1.3rem",
                  marginBottom: "0.5rem",
                  fontWeight: "600",
                }}
              >
                이메일
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  fontSize: "1.4rem",
                  border: "1px solid #ddd",
                  borderRadius: "0.4rem",
                }}
                placeholder="example@email.com"
                required
              />
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <Button
                type="submit"
                style={{
                  flex: 1,
                  padding: "1rem",
                  backgroundColor: "#28a745",
                  color: "white",
                  borderRadius: "0.4rem",
                  fontSize: "1.4rem",
                  fontWeight: "600",
                }}
              >
                제출
              </Button>
              <Button
                type="button"
                onClick={() => setIsOpen(false)}
                style={{
                  flex: 1,
                  padding: "1rem",
                  backgroundColor: "#6c757d",
                  color: "white",
                  borderRadius: "0.4rem",
                  fontSize: "1.4rem",
                  fontWeight: "600",
                }}
              >
                취소
              </Button>
            </div>
          </form>
        </Modal>
      </>
    );
  },
};

/**
 * 여러 모달을 동시에 열 수 있는 예시입니다.
 * 각 모달은 독립적으로 관리되며, z-index로 계층을 구분할 수 있습니다.
 */
export const MultipleModals: Story = {
  render: (args) => {
    const [isFirstOpen, setIsFirstOpen] = useState(false);
    const [isSecondOpen, setIsSecondOpen] = useState(false);

    return (
      <>
        <Button
          onClick={() => setIsFirstOpen(true)}
          style={{
            padding: "1rem 2rem",
            backgroundColor: "#17a2b8",
            color: "white",
            borderRadius: "0.5rem",
            fontSize: "1.4rem",
            fontWeight: "600",
          }}
        >
          첫 번째 모달 열기
        </Button>

        <Modal
          {...args}
          isShow={isFirstOpen}
          onClose={() => setIsFirstOpen(false)}
        >
          <div style={{ padding: "2rem", minWidth: "35rem" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              첫 번째 모달
            </h2>
            <p
              style={{
                fontSize: "1.4rem",
                color: "#666",
                lineHeight: 1.6,
                marginBottom: "2rem",
              }}
            >
              이 모달에서 두 번째 모달을 열 수 있습니다.
            </p>
            <Button
              onClick={() => setIsSecondOpen(true)}
              style={{
                padding: "0.8rem 1.6rem",
                backgroundColor: "#6f42c1",
                color: "white",
                borderRadius: "0.4rem",
                fontSize: "1.4rem",
                width: "100%",
              }}
            >
              두 번째 모달 열기
            </Button>
          </div>
        </Modal>

        <Modal
          {...args}
          isShow={isSecondOpen}
          onClose={() => setIsSecondOpen(false)}
        >
          <div style={{ padding: "2rem", minWidth: "30rem" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              두 번째 모달
            </h2>
            <p style={{ fontSize: "1.4rem", color: "#666", lineHeight: 1.6 }}>
              모달이 중첩되어 있습니다. 각 모달은 독립적으로 닫을 수 있습니다.
            </p>
          </div>
        </Modal>
      </>
    );
  },
};

/**
 * 다양한 크기의 모달 예시입니다.
 * children의 크기에 따라 모달 크기가 자동으로 조절됩니다.
 */
export const Sizes: Story = {
  render: (args) => {
    const [size, setSize] = useState<"small" | "medium" | "large" | null>(
      null,
    );

    return (
      <>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Button
            onClick={() => setSize("small")}
            style={{
              padding: "0.8rem 1.6rem",
              backgroundColor: "#007bff",
              color: "white",
              borderRadius: "0.4rem",
              fontSize: "1.3rem",
            }}
          >
            작은 모달
          </Button>
          <Button
            onClick={() => setSize("medium")}
            style={{
              padding: "0.8rem 1.6rem",
              backgroundColor: "#007bff",
              color: "white",
              borderRadius: "0.4rem",
              fontSize: "1.3rem",
            }}
          >
            중간 모달
          </Button>
          <Button
            onClick={() => setSize("large")}
            style={{
              padding: "0.8rem 1.6rem",
              backgroundColor: "#007bff",
              color: "white",
              borderRadius: "0.4rem",
              fontSize: "1.3rem",
            }}
          >
            큰 모달
          </Button>
        </div>

        <Modal {...args} isShow={size === "small"} onClose={() => setSize(null)}>
          <div style={{ padding: "2rem", width: "20rem" }}>
            <h3 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>
              작은 모달
            </h3>
            <p style={{ fontSize: "1.3rem", color: "#666" }}>
              최소 크기의 모달입니다.
            </p>
          </div>
        </Modal>

        <Modal
          {...args}
          isShow={size === "medium"}
          onClose={() => setSize(null)}
        >
          <div style={{ padding: "2rem", width: "40rem" }}>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
              중간 모달
            </h3>
            <p style={{ fontSize: "1.4rem", color: "#666", lineHeight: 1.6 }}>
              일반적인 크기의 모달입니다. 대부분의 콘텐츠에 적합합니다.
            </p>
          </div>
        </Modal>

        <Modal {...args} isShow={size === "large"} onClose={() => setSize(null)}>
          <div style={{ padding: "3rem", width: "60rem" }}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
              큰 모달
            </h3>
            <p
              style={{
                fontSize: "1.4rem",
                color: "#666",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              많은 콘텐츠를 표시해야 할 때 사용하는 큰 모달입니다. 상세한 정보,
              긴 폼, 또는 복잡한 UI를 포함할 수 있습니다.
            </p>
            <div
              style={{
                padding: "1.5rem",
                backgroundColor: "#f8f9fa",
                borderRadius: "0.4rem",
                fontSize: "1.3rem",
                color: "#495057",
              }}
            >
              추가 콘텐츠 영역입니다. 필요에 따라 더 많은 정보를 표시할 수
              있습니다.
            </div>
          </div>
        </Modal>
      </>
    );
  },
};

/**
 * framer-motion의 scale과 opacity 애니메이션을 확인할 수 있습니다.
 * 모달이 등장할 때 부드럽게 확대되며, 퇴장할 때는 축소됩니다.
 */
export const WithAnimation: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button
          onClick={() => setIsOpen(true)}
          style={{
            padding: "1rem 2rem",
            backgroundColor: "#e83e8c",
            color: "white",
            borderRadius: "0.5rem",
            fontSize: "1.4rem",
            fontWeight: "600",
          }}
        >
          애니메이션 확인
        </Button>
        <Modal {...args} isShow={isOpen} onClose={() => setIsOpen(false)}>
          <div style={{ padding: "2rem", minWidth: "35rem" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              애니메이션 효과
            </h2>
            <p
              style={{
                fontSize: "1.4rem",
                color: "#666",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
              }}
            >
              이 모달은 framer-motion의 scale과 opacity 애니메이션을
              사용합니다. 열릴 때와 닫힐 때 부드러운 전환 효과를 확인할 수
              있습니다.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
                padding: "1rem",
                backgroundColor: "#f8f9fa",
                borderRadius: "0.4rem",
                fontSize: "1.3rem",
              }}
            >
              <div>✨ Scale: 0 → 1</div>
              <div>✨ Opacity: 0 → 1</div>
              <div>✨ AnimatePresence: exit 애니메이션 지원</div>
            </div>
          </div>
        </Modal>
      </>
    );
  },
};
