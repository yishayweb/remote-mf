interface ButtonProps {
  text: string;
  onClick: VoidFunction;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
