const Button = ({ name }) => {
  return (
    <div className="  bg-slate-100 px-5 py-2 m-2 border rounded-lg cursor-pointer hover:bg-slate-200">
      {name}
    </div>
  );
};

export default Button;
