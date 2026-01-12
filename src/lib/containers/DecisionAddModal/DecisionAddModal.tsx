import { useState } from "react";
import { Button, Modal } from "../../components";
import type { DecisionBranch } from "../../types";
import "./DecisionAddModal.scss";

interface DecisionAddModalProps {
  isShow: boolean;
  onClose: () => void;
  onSave: (condition: string) => void;
  currentBranches: DecisionBranch[];
}

const MAX_BRANCHES = 3;

const DecisionAddModal = ({ isShow, onClose, onSave, currentBranches }: DecisionAddModalProps) => {
  const [condition, setCondition] = useState("");

  const canAddMore = currentBranches.length < MAX_BRANCHES;

  const handleSave = () => {
    if (!condition.trim() || !canAddMore) return;

    onSave(condition.trim());
    setCondition("");
    onClose();
  };

  const handleClose = () => {
    setCondition("");
    onClose();
  };

  return (
    <Modal
      isShow={isShow}
      onClose={handleClose}
    >
      <div className="decision-add-modal">
        <h2 className="decision-add-modal__title">분기 조건 추가</h2>

        <p className="decision-add-modal__info">
          현재 분기: {currentBranches.length} / {MAX_BRANCHES}
        </p>

        <div className="decision-add-modal__input-group">
          <label
            htmlFor="branch-condition"
            className="decision-add-modal__label"
          >
            조건
          </label>
          <textarea
            id="branch-condition"
            className="decision-add-modal__textarea"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            placeholder="분기 조건을 입력하세요..."
            disabled={!canAddMore}
          />
        </div>

        <div className="decision-add-modal__actions">
          <Button
            className="decision-add-modal__button decision-add-modal__button--cancel"
            onClick={handleClose}
          >
            취소
          </Button>
          <Button
            className="decision-add-modal__button decision-add-modal__button--save"
            onClick={handleSave}
            disabled={!condition.trim() || !canAddMore}
          >
            저장
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DecisionAddModal;
