import {
  BaseEdge,
  EdgeLabelRenderer,
  getSmoothStepPath,
  type Edge,
  type EdgeProps,
} from "@xyflow/react";
import "./LabeledEdge.scss";

interface LabeledEdgeData extends Record<string, unknown> {
  label?: string;
}

type LabeledEdgeType = Edge<LabeledEdgeData, "labeled">;

const LabeledEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
  selected,
}: EdgeProps<LabeledEdgeType>) => {
  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
      />
      {data?.label && (
        <EdgeLabelRenderer>
          <div
            className={`labeled-edge__label ${selected ? "labeled-edge__label--selected" : ""}`}
            style={{
              transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            }}
          >
            {data.label}
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
};

export default LabeledEdge;
