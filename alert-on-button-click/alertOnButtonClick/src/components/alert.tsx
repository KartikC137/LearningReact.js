interface Props {
  text: string;
  onClose: () => void;
}

function Alert({ text, onClose }: Props) {
  return (
    <>
      <div
        className="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        {text}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </>
  );
}

export default Alert;
