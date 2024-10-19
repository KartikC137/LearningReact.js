interface Props {
  text: string;
  onClick: () => void;
}

function button({ text, onClick }: Props) {
  return (
    <button type="button" className="btn btn-info" onClick={onClick}>
      {text}
    </button>
  );
}

export default button;
