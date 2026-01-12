import { useId, useRef } from "react";
import { useReactFlow } from "@xyflow/react";
import type { DecisionBranch } from "../../../../types";
import type {
  UseDecisionBranchesProps,
  UseDecisionBranchesReturn,
} from "./useDecisionBranches.type";

const useDecisionBranches = ({
  nodeId,
  branches,
}: UseDecisionBranchesProps): UseDecisionBranchesReturn => {
  const { updateNodeData, getEdges, setEdges } = useReactFlow();
  const idPrefix = useId();
  const counterRef = useRef(0);

  const handleSaveBranch = (condition: string) => {
    counterRef.current += 1;
    const newBranch: DecisionBranch = {
      id: `branch-${idPrefix}-${counterRef.current}`,
      condition,
    };

    updateNodeData(nodeId, {
      branches: [...branches, newBranch],
    });
  };

  const handleDeleteBranch = (branchId: string) => {
    const edges = getEdges();
    const filteredEdges = edges.filter(
      (edge) => !(edge.source === nodeId && edge.sourceHandle === branchId)
    );

    setEdges(filteredEdges);

    updateNodeData(nodeId, {
      branches: branches.filter((b) => b.id !== branchId),
    });
  };

  return {
    handleSaveBranch,
    handleDeleteBranch,
  };
};

export default useDecisionBranches;
