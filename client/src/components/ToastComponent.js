import React from "react";

const ToastComponent = ({ children }) => {
  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div
        id="liveToast"
        className="toast"
        data-bs-delay='2000'
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <div className="me-auto"></div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body">{children}</div>
      </div>
    </div>
  );
};

export default ToastComponent;
