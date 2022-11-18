import "./styles.css";
const Button = ({ name }) => {
  return (
    <div className="crdbtn">
      <button>{name}</button>
    </div>
  );
};

export default Button;
