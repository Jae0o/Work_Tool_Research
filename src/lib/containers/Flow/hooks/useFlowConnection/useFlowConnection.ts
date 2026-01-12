import { addEdge, useReactFlow, type Connection, type Edge } from "@xyflow/react";
import { FlowNodeTypes, type DecisionNodeData } from "../../../../types";
import type { Dispatch, SetStateAction } from "react";

interface UseFlowConnectionProps {
  setEdges: Dispatch<SetStateAction<Edge[]>>;
}

const useFlowConnection = ({ setEdges }: UseFlowConnectionProps) => {
  const { getNode } = useReactFlow();

  const onConnect = (connection: Connection) => {
    const sourceNode = connection.source ? getNode(connection.source) : null;
    let label = "";

    if (sourceNode?.type === FlowNodeTypes.DECISION_NODE && connection.sourceHandle) {
      const branches = (sourceNode.data as DecisionNodeData).branches ?? [];
      const branch = branches.find((b) => b.id === connection.sourceHandle);
      label = branch?.condition ?? "";
    }

    setEdges((prevEdges) =>
      addEdge(
        {
          ...connection,
          type: label ? "labeled" : undefined,
          data: label ? { label } : undefined,
        },
        prevEdges
      )
    );
  };

  return {
    onConnect,
  };
};

export default useFlowConnection;
