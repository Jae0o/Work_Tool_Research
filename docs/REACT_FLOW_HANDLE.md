# React Flow Handle 사용 가이드

## 기본 개념

```
[Target] ●──────────────────● [Source]
  (입력)                        (출력)
  왼쪽                          오른쪽
```

| 타입 | 위치 | 역할 |
|------|------|------|
| `target` | 왼쪽 (Left) | 연결선이 **들어오는** 지점 |
| `source` | 오른쪽 (Right) | 연결선이 **나가는** 지점 |

## 기본 사용법

```tsx
import { Handle, Position } from "@xyflow/react";

const CustomNode = () => {
  return (
    <div className="custom-node">
      {/* Target - 왼쪽 */}
      <Handle
        type="target"
        position={Position.Left}
        id="target-1"
      />

      {/* Source - 오른쪽 */}
      <Handle
        type="source"
        position={Position.Right}
        id="source-1"
      />

      {/* 노드 컨텐츠 */}
    </div>
  );
};
```

## 다중 Source Handle 동적 배치

Source Handle이 1~N개일 경우 균등하게 배치하는 방법:

### 위치 계산 유틸리티

```tsx
/**
 * Handle의 top 위치를 계산합니다.
 * @param index - 현재 handle의 인덱스 (0부터 시작)
 * @param total - 전체 handle 개수
 * @returns top 위치 (%)
 */
const getHandlePosition = (index: number, total: number): number => {
  if (total === 1) return 50;
  // 상하 여백 20%씩, 나머지 60%를 균등 분배
  return 20 + (60 / (total - 1)) * index;
};
```

### 배치 결과

| 개수 | 위치 (top %) |
|-----|-------------|
| 1개 | 50% |
| 2개 | 20%, 80% |
| 3개 | 20%, 50%, 80% |
| 4개 | 20%, 40%, 60%, 80% |

### 사용 예시

```tsx
const MyNode = () => {
  const sourceHandles = ["source-1", "source-2", "source-3"];

  return (
    <div className="my-node">
      {/* Target - 왼쪽 중앙 */}
      <Handle
        type="target"
        position={Position.Left}
        id="target"
      />

      {/* Source - 오른쪽 동적 배치 */}
      {sourceHandles.map((id, index) => (
        <Handle
          key={id}
          type="source"
          position={Position.Right}
          id={id}
          style={{ top: `${getHandlePosition(index, sourceHandles.length)}%` }}
        />
      ))}
    </div>
  );
};
```

## Edge 연결

```tsx
const edges = [
  {
    id: "edge-1",
    source: "node-1",         // 출발 노드 ID
    sourceHandle: "source-1", // 출발 노드의 source handle ID
    target: "node-2",         // 도착 노드 ID
    targetHandle: "target-1", // 도착 노드의 target handle ID
  }
];
```

## Handle 스타일링

```scss
// Handle 기본 스타일 오버라이드
.react-flow__handle {
  width: 1rem;
  height: 1rem;

  background-color: $color-primary;
  border: 0.2rem solid $color-background;
  border-radius: 50%;
}

// 커스텀 클래스 적용
.my-node__handle {
  width: 0.8rem;
  height: 0.8rem;

  &.react-flow__handle-left {
    left: -0.4rem;
  }

  &.react-flow__handle-right {
    right: -0.4rem;
  }
}
```

## 주의사항

1. **Handle ID 필수**: 여러 Handle 사용 시 고유한 `id` 필요
2. **위치 일관성**: Source는 항상 오른쪽, Target은 항상 왼쪽
3. **position 속성**: `Position.Left`, `Position.Right`, `Position.Top`, `Position.Bottom` 사용
4. **스타일 오버라이드**: Handle의 기본 `position: absolute`를 유지해야 함

---

## Edge 스타일링

### 전역 스타일 (globals.scss에서 import됨)

`src/styles/_reactflow.scss`에서 Edge/Handle 전역 스타일 정의:
- Edge 색상: `$color-primary`
- Edge 두께: `2px` (호버/선택 시 `3px`)
- Handle 크기: `1rem`

### Edge 타입 설정

```tsx
// 기본 Edge 옵션 설정
const defaultEdgeOptions = {
  type: "step",  // straight, step, smoothstep, bezier
};

// 또는 개별 Edge에서 지정
const edges = [
  {
    id: "e1-2",
    source: "node-1",
    target: "node-2",
    type: "step",
    animated: true,  // 점선 애니메이션
  }
];

<ReactFlow
  edges={edges}
  defaultEdgeOptions={defaultEdgeOptions}
/>
```

### Edge 타입 비교

| 타입 | 설명 |
|------|------|
| `straight` | 직선 |
| `step` | 직각 계단식 |
| `smoothstep` | 부드러운 계단식 곡선 |
| `bezier` | 베지어 곡선 |
