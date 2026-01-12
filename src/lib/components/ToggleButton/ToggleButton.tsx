import "./ToggleButton.scss";

interface ToggleButtonProps {
  checked: boolean;
  onChange: (checked: boolean) => void;

  size?: number;
  disabled?: boolean;
}

const ToggleButton = ({ checked, onChange, size = 16, disabled = false }: ToggleButtonProps) => {
  const handleClick = () => {
    if (!disabled) {
      onChange(!checked);
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      className="toggle-button"
      style={{ "--toggle-size": `${size}px` } as React.CSSProperties}
      onClick={handleClick}
    >
      <span className="toggle-button__knob" />
    </button>
  );
};

export default ToggleButton;
