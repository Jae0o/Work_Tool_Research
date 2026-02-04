import { useState } from "react";
import ToggleButton from "./ToggleButton";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## ToggleButton Component
 *
 * 크기 조절 가능한 토글 스위치 컴포넌트입니다.
 * CSS 변수를 사용하여 동적으로 크기를 조절할 수 있습니다.
 *
 * ### 사용 방법
 * ```tsx
 * import { useState } from "react";
 * import ToggleButton from "./ToggleButton";
 *
 * function MyComponent() {
 *   const [checked, setChecked] = useState(false);
 *
 *   return (
 *     <ToggleButton
 *       checked={checked}
 *       onChange={setChecked}
 *       size={16}
 *     />
 *   );
 * }
 * ```
 *
 * ### Props & Type
 * - **checked**: 토글 상태 (boolean, required)
 * - **onChange**: 상태 변경 핸들러 (function, required)
 * - **size**: 토글 크기 (number, optional, default: 16)
 * - **disabled**: 비활성화 상태 (boolean, optional, default: false)
 */
const meta = {
  title: "Components/ToggleButton",
  component: ToggleButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "토글의 활성화 상태",
      table: {
        type: { summary: "boolean" },
      },
    },
    onChange: {
      control: { disable: true },
      description: "토글 상태 변경 시 호출되는 핸들러 함수",
      table: {
        type: { summary: "(checked: boolean) => void" },
      },
    },
    size: {
      control: { type: "range", min: 8, max: 32, step: 1 },
      description: "토글 스위치의 크기 (px 단위)",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "16" },
      },
    },
    disabled: {
      control: "boolean",
      description: "토글 비활성화 여부",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 토글 버튼입니다.
 * checked 상태를 제어하여 사용합니다.
 */
export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);

    return (
      <ToggleButton
        {...args}
        checked={checked}
        onChange={setChecked}
      />
    );
  },
  args: {
    checked: false,
    size: 16,
    disabled: false,
  },
};

/**
 * 활성화된 상태의 토글 버튼입니다.
 */
export const Checked: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);

    return (
      <ToggleButton
        {...args}
        checked={checked}
        onChange={setChecked}
      />
    );
  },
  args: {
    checked: true,
    size: 16,
    disabled: false,
  },
};

/**
 * 비활성화된 토글 버튼입니다.
 * disabled 상태에서는 클릭이 불가능합니다.
 */
export const Disabled: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);

    return (
      <ToggleButton
        {...args}
        checked={checked}
        onChange={setChecked}
      />
    );
  },
  args: {
    checked: false,
    size: 16,
    disabled: true,
  },
};

/**
 * 비활성화된 상태이면서 활성화된 토글 버튼입니다.
 */
export const DisabledChecked: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);

    return (
      <ToggleButton
        {...args}
        checked={checked}
        onChange={setChecked}
      />
    );
  },
  args: {
    checked: true,
    size: 16,
    disabled: true,
  },
};

/**
 * 다양한 크기의 토글 버튼들입니다.
 * size prop으로 토글 스위치의 크기를 조절할 수 있습니다.
 */
export const Sizes: Story = {
  render: () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          alignItems: "flex-start",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <ToggleButton checked={checked1} onChange={setChecked1} size={8} />
          <span style={{ fontSize: "1.2rem" }}>size: 8px (Extra Small)</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <ToggleButton checked={checked2} onChange={setChecked2} size={12} />
          <span style={{ fontSize: "1.2rem" }}>size: 12px (Small)</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <ToggleButton checked={checked3} onChange={setChecked3} size={16} />
          <span style={{ fontSize: "1.2rem" }}>size: 16px (Medium - Default)</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <ToggleButton checked={checked4} onChange={setChecked4} size={20} />
          <span style={{ fontSize: "1.2rem" }}>size: 20px (Large)</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <ToggleButton checked={checked5} onChange={setChecked5} size={24} />
          <span style={{ fontSize: "1.2rem" }}>size: 24px (Extra Large)</span>
        </div>
      </div>
    );
  },
};

/**
 * 다양한 상태를 한눈에 볼 수 있는 Playground입니다.
 */
export const Playground: Story = {
  render: () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(true);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(true);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          padding: "2rem",
          backgroundColor: "#f5f5f5",
          borderRadius: "0.8rem",
        }}
      >
        <div>
          <h3 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>Normal State</h3>
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
              <ToggleButton checked={checked1} onChange={setChecked1} />
              <span style={{ fontSize: "1.2rem" }}>Unchecked</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
              <ToggleButton checked={checked2} onChange={setChecked2} />
              <span style={{ fontSize: "1.2rem" }}>Checked</span>
            </div>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>Disabled State</h3>
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
              <ToggleButton checked={checked3} onChange={setChecked3} disabled />
              <span style={{ fontSize: "1.2rem" }}>Unchecked</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
              <ToggleButton checked={checked4} onChange={setChecked4} disabled />
              <span style={{ fontSize: "1.2rem" }}>Checked</span>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Form 예시: 여러 토글 버튼을 함께 사용하는 예시입니다.
 */
export const FormExample: Story = {
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [emailAlerts, setEmailAlerts] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [autoSave, setAutoSave] = useState(true);

    return (
      <div
        style={{
          width: "30rem",
          padding: "2rem",
          backgroundColor: "white",
          borderRadius: "0.8rem",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3 style={{ fontSize: "1.6rem", marginBottom: "2rem", fontWeight: "600" }}>Settings</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "1.4rem", fontWeight: "500" }}>Push Notifications</div>
              <div style={{ fontSize: "1.2rem", color: "#666", marginTop: "0.2rem" }}>
                Receive push notifications
              </div>
            </div>
            <ToggleButton checked={notifications} onChange={setNotifications} />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "1.4rem", fontWeight: "500" }}>Email Alerts</div>
              <div style={{ fontSize: "1.2rem", color: "#666", marginTop: "0.2rem" }}>
                Get emails about activity
              </div>
            </div>
            <ToggleButton checked={emailAlerts} onChange={setEmailAlerts} />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "1.4rem", fontWeight: "500" }}>Dark Mode</div>
              <div style={{ fontSize: "1.2rem", color: "#666", marginTop: "0.2rem" }}>
                Enable dark theme
              </div>
            </div>
            <ToggleButton checked={darkMode} onChange={setDarkMode} />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "1.4rem", fontWeight: "500" }}>Auto Save</div>
              <div style={{ fontSize: "1.2rem", color: "#666", marginTop: "0.2rem" }}>
                Automatically save changes
              </div>
            </div>
            <ToggleButton checked={autoSave} onChange={setAutoSave} />
          </div>
        </div>
      </div>
    );
  },
};
