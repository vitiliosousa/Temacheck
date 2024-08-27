import * as React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ onClose, children }: ModalProps) {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <button onClick={onClose} className=" absolute top-2 right-2">
          X
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}
