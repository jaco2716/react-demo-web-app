import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
  onClose: () => void;
  color?: "primary" | "secondary" | "danger";
}

const Alert = ({ children, onClose, color = "primary" }: Prop) => {
  return (
    <div className={`alert alert-${color} alert-dismissible`}>
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
