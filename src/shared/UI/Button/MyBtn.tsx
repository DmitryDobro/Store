interface BtnProps {
  title: string;
  bgColor?: string;
  propsFunc?: () => void;
}

function MyBtn({title, bgColor, propsFunc = () => {}, ...rest}: BtnProps) {
  const arr = Object.values(rest);
  function handleBtn() {
    propsFunc();
  }
  return (
    <button onClick={handleBtn} className={`${bgColor ? bgColor : 'bg-[rgb(255,255,255)]'} ${arr.join(' ')} mainText`} type="button">
      {title} &#10230;
    </button>
  );
}
export default MyBtn;
