
interface InputProps {
  placeholder: string;
}

function Input({placeholder}: InputProps) {
  return <input className="h-[50px] w-[100%] border-1 border-black " type="text" placeholder={placeholder} />;
}
export default Input;
