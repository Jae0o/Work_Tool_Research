import Button from "./Button";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## Button Component
 *
 * Ripple 효과와 framer-motion 애니메이션이 적용된 범용 버튼 컴포넌트입니다.
 * `className`을 통해 외부 스타일을 주입할 수 있습니다.
 *
 * ### 사용 방법
 * ```tsx
 * import Button from "./Button";
 *
 * <Button className="primary-button">
 *   클릭하세요
 * </Button>
 *
 * <Button disabled>
 *   비활성화
 * </Button>
 * ```
 *
 * ### Props & Type
 * - **children**: 버튼 내부 콘텐츠 (ReactNode)
 * - **className**: 추가 스타일 클래스 (string, optional)
 * - **onClick**: 클릭 이벤트 핸들러 (자동으로 Ripple 효과 실행)
 * - **disabled**: 비활성화 상태 (boolean)
 * - **...props**: 기타 button HTML 속성 및 framer-motion MotionProps
 */
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { disable: true },
      description: "버튼 내부에 표시될 콘텐츠",
    },
    className: {
      control: "text",
      description: "추가 스타일 클래스 (SCSS 클래스명 또는 커스텀 스타일)",
    },
    onClick: {
      control: { disable: true },
      description: "클릭 이벤트 핸들러 (Ripple 효과 자동 실행)",
    },
    disabled: {
      control: "boolean",
      description: "버튼 비활성화 여부",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 버튼 스타일입니다.
 * className을 통해 원하는 스타일을 적용할 수 있습니다.
 */
export const Default: Story = {
  args: {
    children: "Click Me",
  },
};

/**
 * 비활성화된 버튼입니다.
 * disabled 상태에서는 opacity가 0.5로 설정되며 클릭이 불가능합니다.
 */
export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

/**
 * 다양한 스타일이 적용된 버튼들입니다.
 * 실제 프로젝트에서는 SCSS 클래스를 정의하여 className으로 전달하세요.
 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Button
        style={{
          padding: "1rem 2rem",
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: "0.5rem",
          fontSize: "1.4rem",
          fontWeight: "600",
        }}
      >
        Primary
      </Button>
      <Button
        style={{
          padding: "1rem 2rem",
          backgroundColor: "#6c757d",
          color: "white",
          borderRadius: "0.5rem",
          fontSize: "1.4rem",
          fontWeight: "600",
        }}
      >
        Secondary
      </Button>
      <Button
        style={{
          padding: "1rem 2rem",
          backgroundColor: "#28a745",
          color: "white",
          borderRadius: "0.5rem",
          fontSize: "1.4rem",
          fontWeight: "600",
        }}
      >
        Success
      </Button>
      <Button
        style={{
          padding: "1rem 2rem",
          backgroundColor: "#dc3545",
          color: "white",
          borderRadius: "0.5rem",
          fontSize: "1.4rem",
          fontWeight: "600",
        }}
      >
        Danger
      </Button>
      <Button
        style={{
          padding: "1rem 2rem",
          border: "2px solid #007bff",
          color: "#007bff",
          borderRadius: "0.5rem",
          fontSize: "1.4rem",
          fontWeight: "600",
        }}
      >
        Outline
      </Button>
    </div>
  ),
};

/**
 * 다양한 크기의 버튼들입니다.
 */
export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Button
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: "0.4rem",
          fontSize: "1.2rem",
        }}
      >
        Small
      </Button>
      <Button
        style={{
          padding: "1rem 2rem",
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: "0.5rem",
          fontSize: "1.4rem",
        }}
      >
        Medium
      </Button>
      <Button
        style={{
          padding: "1.5rem 3rem",
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: "0.6rem",
          fontSize: "1.6rem",
        }}
      >
        Large
      </Button>
    </div>
  ),
};

/**
 * framer-motion의 whileTap 애니메이션을 확인할 수 있습니다.
 * 클릭 시 scale이 0.98로 축소되며, Ripple 효과가 나타납니다.
 */
export const WithAnimation: Story = {
  args: {
    children: "Click to See Animation",
    style: {
      padding: "1rem 2rem",
      backgroundColor: "#007bff",
      color: "white",
      borderRadius: "0.5rem",
      fontSize: "1.4rem",
      fontWeight: "600",
    },
  },
};
