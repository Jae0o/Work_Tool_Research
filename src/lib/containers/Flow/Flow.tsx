import {
  Background,
  Controls,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  type Edge,
  type EdgeTypes,
  type Node,
  type NodeTypes,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { DecisionNode, LabeledEdge, MyAINode, RequestNode, Sidebar } from "../../components";
import { FlowNodeTypes } from "../../types";
import { useFlowConnection } from "./hooks";

interface FlowProps {
  initialNodes: Node[];
  initialEdges: Edge[];
}

const nodeTypes: NodeTypes = {
  [FlowNodeTypes.MY_AI_NODE]: MyAINode,
  [FlowNodeTypes.REQUEST_NODE]: RequestNode,
  [FlowNodeTypes.DECISION_NODE]: DecisionNode,
};

const edgeTypes: EdgeTypes = {
  labeled: LabeledEdge,
};

const FlowInner = ({ initialNodes, initialEdges }: FlowProps) => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { onConnect } = useFlowConnection({ setEdges });

  const onEdgeClick = (_event: React.MouseEvent, edge: Edge) => {
    setEdges((edges) => edges.filter((e) => e.id !== edge.id));
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      onConnect={onConnect}
      onEdgeClick={onEdgeClick}
    >
      <Background />
      <Controls />
      <Sidebar />
    </ReactFlow>
  );
};

const Flow = (props: FlowProps) => {
  return (
    <ReactFlowProvider>
      <FlowInner {...props} />
    </ReactFlowProvider>
  );
};

export default Flow;
