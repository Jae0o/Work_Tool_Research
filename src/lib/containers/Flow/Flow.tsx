import {
  addEdge,
  Background,
  Controls,
  ReactFlow,
  useEdgesState,
  useNodesState,
  type Connection,
  type Edge,
  type Node,
  type NodeTypes,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { MyAINode, RequestNode } from "../../components";
import { FlowNodeTypes } from "../../types";

interface FlowProps {
  initialNodes: Node[];
  initialEdges: Edge[];
}

const Flow = ({ initialNodes, initialEdges }: FlowProps) => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (connection: Connection) =>
    setEdges((prevEdges) => addEdge(connection, prevEdges));

  const onEdgeClick = (_event: React.MouseEvent, edge: Edge) => {
    setEdges((edges) => edges.filter((e) => e.id !== edge.id));
  };

  const nodeTypes: NodeTypes = {
    [FlowNodeTypes.MY_AI_NODE]: MyAINode,
    [FlowNodeTypes.REQUEST_NODE]: RequestNode,
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      onConnect={onConnect}
      onEdgeClick={onEdgeClick}
    >
      <Background />
      <Controls />
    </ReactFlow>
  );
};

export default Flow;
