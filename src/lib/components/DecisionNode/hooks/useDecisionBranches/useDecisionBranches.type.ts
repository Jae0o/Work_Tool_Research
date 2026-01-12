import type { DecisionBranch } from "../../../../types";

export interface UseDecisionBranchesProps {
  nodeId: string;
  branches: DecisionBranch[];
}

export interface UseDecisionBranchesReturn {
  handleSaveBranch: (condition: string) => void;
  handleDeleteBranch: (branchId: string) => void;
}
