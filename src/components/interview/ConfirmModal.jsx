import "./Interview.css";

function ConfirmModal({
  open,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
}) {
  if (!open) return null;

  return (
    <div className="modal-overlay">

      <div className="confirm-modal">

        <h2>{title}</h2>

        <p>{message}</p>

        <div className="modal-buttons">

          <button
            className="modal-cancel"
            onClick={onCancel}
          >
            {cancelText}
          </button>

          <button
            className="modal-confirm"
            onClick={onConfirm}
          >
            {confirmText}
          </button>

        </div>

      </div>

    </div>
  );
}

export default ConfirmModal;