interface Prop {
  text: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const MyButton = ({ text, color = "primary", onClick }: Prop) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {text}
    </button>
  );
};

export default MyButton;
