import { Handle, Position } from "@xyflow/react";
import type { DecisionNodeData } from "../../types";
import { DecisionIcon } from "../Icons";
import ToggleButton from "../ToggleButton/ToggleButton";
import Button from "../Button/Button";
import { DecisionAddModal } from "../../containers";
import { useModal } from "../../hooks";
import { useDecisionBranches } from "./hooks";
import { getHandlePosition } from "./utils";
import "./DecisionNode.scss";

interface DecisionNodeProps {
  id: string;
  data: DecisionNodeData;
  selected?: boolean;
}

const MAX_BRANCHES = 3;

const DecisionNode = ({ id, data, selected }: DecisionNodeProps) => {
  const { isShow, handleOpenModal, handleCloseModal } = useModal();

  const branches = data.branches ?? [];
  const canAddMore = branches.length < MAX_BRANCHES;

  const { handleSaveBranch, handleDeleteBranch } = useDecisionBranches({
    nodeId: id,
    branches,
  });

  return (
    <div className={`decision-node ${selected ? "decision-node--selected" : ""}`}>
      <Handle
        type="target"
        position={Position.Left}
      />

      {branches.map((branch, index) => (
        <Handle
          key={branch.id}
          id={branch.id}
          type="source"
          position={Position.Right}
          style={{ top: getHandlePosition(index, branches.length) }}
        />
      ))}

      {/* Header */}
      <div className="decision-node__header">
        <span className="decision-node__header__title">
          <DecisionIcon />
          <h3 className="decision-node__header__title_text">Decision Maker</h3>
        </span>

        <ToggleButton
          checked={data.isActive}
          onChange={() => {}}
        />
      </div>

      <div className="decision-node__divider" />

      {/* Content */}
      <div className="decision-node__content">
        <Button
          className="decision-node__content__button"
          onClick={handleOpenModal}
          disabled={!canAddMore}
        >
          분기 추가 {branches.length}/{MAX_BRANCHES}
        </Button>
      </div>

      {/* Branch List */}
      {branches.length > 0 && (
        <ul className="decision-node__branches">
          {branches.map((branch) => (
            <li
              key={branch.id}
              className="decision-node__branch"
            >
              <span className="decision-node__branch__condition">{branch.condition}</span>
              <button
                type="button"
                className="decision-node__branch__delete"
                onClick={() => handleDeleteBranch(branch.id)}
                aria-label="삭제"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Modal */}
      <DecisionAddModal
        isShow={isShow}
        onClose={handleCloseModal}
        onSave={handleSaveBranch}
        currentBranches={branches}
      />
    </div>
  );
};

export default DecisionNode;
