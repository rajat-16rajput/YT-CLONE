const Button = ({ name }) => {
  return (
    <div className="  bg-slate-100 p-2 m-2 border rounded-lg cursor-pointer hover:bg-slate-200">
      {name}
    </div>
  );
};

export default Button;
