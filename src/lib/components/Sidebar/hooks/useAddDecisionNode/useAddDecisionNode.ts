import { useReactFlow } from "@xyflow/react";
import { useId, useRef } from "react";
import { FlowNodeTypes, type DecisionNodeData } from "../../../../types";

const useAddDecisionNode = () => {
  const { addNodes, getNodes, getViewport } = useReactFlow();
  const idPrefix = useId();
  const counterRef = useRef(0);

  const handleAddDecisionNode = () => {
    const nodes = getNodes();
    const viewport = getViewport();
    counterRef.current += 1;

    const newNode = {
      id: `decision-${idPrefix}-${counterRef.current}`,
      type: FlowNodeTypes.DECISION_NODE,
      position: {
        x: -viewport.x / viewport.zoom + 400,
        y: -viewport.y / viewport.zoom + 200 + nodes.length * 50,
      },
      data: {
        isActive: true,
      } satisfies DecisionNodeData,
    };

    addNodes(newNode);
  };

  return {
    handleAddDecisionNode,
  };
};

export default useAddDecisionNode;
