interface BtnProps {
  title: string;
  bgColor?: string;
}

function MyBtn({title, bgColor, ...rest}: BtnProps) {
  const arr = Object.values(rest);

  return (
    <button className={`${bgColor ? bgColor : 'bg-[rgb(255,255,255)]'} ${arr.join(' ')} mainText`} type="button">
      {title} &#10230;
    </button>
  );
}
export default MyBtn;
