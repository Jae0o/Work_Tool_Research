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
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

interface FlowProps {
  initialNodes: Node[];
  initialEdges: Edge[];
}

const Flow = ({ initialNodes, initialEdges }: FlowProps) => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (connection: Connection) =>
    setEdges((prevEdges) => addEdge(connection, prevEdges));

  // My AI Node
  // Request Node
  //

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <Background />
      <Controls />
    </ReactFlow>
  );
};

export default Flow;
