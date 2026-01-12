import { useId, useRef } from "react";
import { useReactFlow } from "@xyflow/react";
import { mockMyAIList } from "../../mocks/myAIData";
import { FlowNodeTypes, type MyAI, type MyAINodeData } from "../../types";
import "./MyAISelector.scss";

interface MyAISelectorProps {
  onClose: () => void;
}

const MyAISelector = ({ onClose }: MyAISelectorProps) => {
  const { addNodes, getNodes, getViewport } = useReactFlow();
  const idPrefix = useId();
  const counterRef = useRef(0);

  const handleSelectMyAI = (myAI: MyAI) => {
    const nodes = getNodes();
    const viewport = getViewport();
    counterRef.current += 1;

    const newNode = {
      id: `myai-${idPrefix}-${counterRef.current}`,
      type: FlowNodeTypes.MY_AI_NODE,
      position: {
        x: -viewport.x / viewport.zoom + 400,
        y: -viewport.y / viewport.zoom + 200 + nodes.length * 50,
      },
      data: {
        myAI,
        isActive: true,
      } satisfies MyAINodeData,
    };

    addNodes(newNode);
    onClose();
  };

  return (
    <div className="my-ai-selector">
      <div className="my-ai-selector__header">
        <h3 className="my-ai-selector__title">My AI 선택</h3>
      </div>

      <ul className="my-ai-selector__list">
        {mockMyAIList.map((myAI) => (
          <li
            key={myAI.id}
            className="my-ai-selector__item"
          >
            <button
              className="my-ai-selector__item-button"
              onClick={() => handleSelectMyAI(myAI)}
            >
              <div className="my-ai-selector__item-info">
                <p className="my-ai-selector__item-name">{myAI.name}</p>
                <p className="my-ai-selector__item-description">{myAI.description}</p>
              </div>
              <span className="my-ai-selector__item-type">{myAI.AIType ?? "N/A"}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyAISelector;
