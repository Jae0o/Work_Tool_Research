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

  const nodeTypes = {
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
    >
      <Background />
      <Controls />
    </ReactFlow>
  );
};

export default Flow;
