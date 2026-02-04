import {
  ActivityIcon,
  AttachFileIcon,
  CloseIcon,
  DecisionIcon,
  EditIcon,
  PlusIcon,
  SubmitIcon,
} from "./index";

import type { Meta, StoryObj } from "@storybook/react";

/**
 * ## Icons Collection
 *
 * 프로젝트에서 사용하는 SVG 아이콘 컴포넌트 모음입니다.
 * 모든 아이콘은 공통 인터페이스 `IconCommonProps`를 따릅니다.
 *
 * ### 사용 방법
 * ```tsx
 * import { EditIcon, CloseIcon } from "./components/Icons";
 *
 * <EditIcon size="2rem" fill="#007bff" />
 * <CloseIcon size="2.4rem" stroke="red" />
 * ```
 *
 * ### 공통 Props
 * - **size**: 아이콘 크기 (기본값: 아이콘마다 상이)
 * - **fill**: 채우기 색상 (fill 방식 아이콘)
 * - **stroke**: 선 색상 (stroke 방식 아이콘)
 * - **...props**: 기타 SVG 속성
 */
const meta = {
  title: "Components/Icons",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper Component
const IconStoryBox = ({
  icon: Icon,
  name,
  size,
  fill,
  stroke,
}: {
  icon: React.ComponentType<any>;
  name: string;
  size?: string;
  fill?: string;
  stroke?: string;
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.8rem",
      padding: "1.6rem",
      border: "1px solid #e0e0e0",
      borderRadius: "0.8rem",
      minWidth: "12rem",
    }}
  >
    <Icon size={size} fill={fill} stroke={stroke} />
    <span style={{ fontSize: "1.2rem", color: "#666" }}>{name}</span>
  </div>
);

/**
 * 프로젝트에 포함된 모든 아이콘의 컬렉션입니다.
 */
export const AllIcons: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
        gap: "1.6rem",
        padding: "2rem",
        maxWidth: "80rem",
      }}
    >
      <IconStoryBox icon={ActivityIcon} name="ActivityIcon" size="3rem" />
      <IconStoryBox icon={AttachFileIcon} name="AttachFileIcon" size="3rem" />
      <IconStoryBox icon={CloseIcon} name="CloseIcon" size="3rem" />
      <IconStoryBox icon={DecisionIcon} name="DecisionIcon" size="3rem" />
      <IconStoryBox icon={EditIcon} name="EditIcon" size="3rem" />
      <IconStoryBox icon={PlusIcon} name="PlusIcon" size="3rem" />
      <IconStoryBox icon={SubmitIcon} name="SubmitIcon" size="3rem" />
    </div>
  ),
};

/**
 * ActivityIcon - 활동/차트 아이콘
 * stroke 방식의 라인 차트 모양 아이콘입니다.
 */
export const Activity: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <ActivityIcon size="2rem" stroke="currentColor" />
      <ActivityIcon size="3rem" stroke="#007bff" />
      <ActivityIcon size="4rem" stroke="#28a745" />
    </div>
  ),
};

/**
 * AttachFileIcon - 파일 첨부 아이콘
 * fill 방식의 Material Design 스타일 아이콘입니다.
 */
export const AttachFile: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <AttachFileIcon size="2rem" fill="currentColor" />
      <AttachFileIcon size="3rem" fill="#007bff" />
      <AttachFileIcon size="4rem" fill="#dc3545" />
    </div>
  ),
};

/**
 * CloseIcon - 닫기 아이콘
 * stroke 방식의 X 모양 아이콘입니다.
 */
export const Close: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <CloseIcon size="2rem" stroke="currentColor" />
      <CloseIcon size="3rem" stroke="#dc3545" />
      <CloseIcon size="4rem" stroke="#6c757d" />
    </div>
  ),
};

/**
 * DecisionIcon - 의사결정/플로우 아이콘
 * fill 방식의 연결된 노드 모양 아이콘입니다.
 */
export const Decision: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <DecisionIcon size="2rem" fill="currentColor" />
      <DecisionIcon size="3rem" fill="#007bff" />
      <DecisionIcon size="4rem" fill="#6c757d" />
    </div>
  ),
};

/**
 * EditIcon - 편집 아이콘
 * fill 방식의 연필 모양 아이콘입니다.
 */
export const Edit: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <EditIcon size="2rem" fill="currentColor" />
      <EditIcon size="3rem" fill="#007bff" />
      <EditIcon size="4rem" fill="#28a745" />
    </div>
  ),
};

/**
 * PlusIcon - 추가 아이콘
 * stroke 방식의 + 모양 아이콘입니다.
 */
export const Plus: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <PlusIcon size="2rem" stroke="currentColor" />
      <PlusIcon size="3rem" stroke="#28a745" />
      <PlusIcon size="4rem" stroke="#007bff" />
    </div>
  ),
};

/**
 * SubmitIcon - 제출 아이콘
 * 고정 색상(보라색)의 전송 버튼 모양 아이콘입니다.
 */
export const Submit: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <SubmitIcon size="2rem" />
      <SubmitIcon size="3rem" />
      <SubmitIcon size="4rem" />
    </div>
  ),
};

/**
 * 다양한 크기의 아이콘들을 비교합니다.
 */
export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        padding: "2rem",
      }}
    >
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <span style={{ width: "8rem", fontSize: "1.2rem" }}>1.6rem:</span>
        <EditIcon size="1.6rem" />
        <CloseIcon size="1.6rem" />
        <PlusIcon size="1.6rem" />
        <DecisionIcon size="1.6rem" />
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <span style={{ width: "8rem", fontSize: "1.2rem" }}>2.4rem:</span>
        <EditIcon size="2.4rem" />
        <CloseIcon size="2.4rem" />
        <PlusIcon size="2.4rem" />
        <DecisionIcon size="2.4rem" />
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <span style={{ width: "8rem", fontSize: "1.2rem" }}>3.2rem:</span>
        <EditIcon size="3.2rem" />
        <CloseIcon size="3.2rem" />
        <PlusIcon size="3.2rem" />
        <DecisionIcon size="3.2rem" />
      </div>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <span style={{ width: "8rem", fontSize: "1.2rem" }}>4rem:</span>
        <EditIcon size="4rem" />
        <CloseIcon size="4rem" />
        <PlusIcon size="4rem" />
        <DecisionIcon size="4rem" />
      </div>
    </div>
  ),
};

/**
 * fill 색상을 변경할 수 있는 아이콘들입니다.
 */
export const FillVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        padding: "2rem",
      }}
    >
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <span style={{ width: "10rem", fontSize: "1.2rem" }}>Black:</span>
        <EditIcon size="3rem" fill="#000" />
        <DecisionIcon size="3rem" fill="#000" />
        <AttachFileIcon size="3rem" fill="#000" />
      </div>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <span style={{ width: "10rem", fontSize: "1.2rem" }}>Blue:</span>
        <EditIcon size="3rem" fill="#007bff" />
        <DecisionIcon size="3rem" fill="#007bff" />
        <AttachFileIcon size="3rem" fill="#007bff" />
      </div>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <span style={{ width: "10rem", fontSize: "1.2rem" }}>Green:</span>
        <EditIcon size="3rem" fill="#28a745" />
        <DecisionIcon size="3rem" fill="#28a745" />
        <AttachFileIcon size="3rem" fill="#28a745" />
      </div>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <span style={{ width: "10rem", fontSize: "1.2rem" }}>Red:</span>
        <EditIcon size="3rem" fill="#dc3545" />
        <DecisionIcon size="3rem" fill="#dc3545" />
        <AttachFileIcon size="3rem" fill="#dc3545" />
      </div>
    </div>
  ),
};

/**
 * stroke 색상을 변경할 수 있는 아이콘들입니다.
 */
export const StrokeVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        padding: "2rem",
      }}
    >
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <span style={{ width: "10rem", fontSize: "1.2rem" }}>Black:</span>
        <ActivityIcon size="3rem" stroke="#000" />
        <CloseIcon size="3rem" stroke="#000" />
        <PlusIcon size="3rem" stroke="#000" />
      </div>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <span style={{ width: "10rem", fontSize: "1.2rem" }}>Blue:</span>
        <ActivityIcon size="3rem" stroke="#007bff" />
        <CloseIcon size="3rem" stroke="#007bff" />
        <PlusIcon size="3rem" stroke="#007bff" />
      </div>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <span style={{ width: "10rem", fontSize: "1.2rem" }}>Green:</span>
        <ActivityIcon size="3rem" stroke="#28a745" />
        <CloseIcon size="3rem" stroke="#28a745" />
        <PlusIcon size="3rem" stroke="#28a745" />
      </div>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <span style={{ width: "10rem", fontSize: "1.2rem" }}>Red:</span>
        <ActivityIcon size="3rem" stroke="#dc3545" />
        <CloseIcon size="3rem" stroke="#dc3545" />
        <PlusIcon size="3rem" stroke="#dc3545" />
      </div>
    </div>
  ),
};
