import { Background, Controls, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const Flow = () => {
  return (
    <ReactFlow>
      <Background />
      <Controls />
    </ReactFlow>
  );
};

export default Flow;
