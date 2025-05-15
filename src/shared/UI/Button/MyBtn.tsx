import clsx from 'clsx';

interface BtnProps {
  title: string;
  className?: string;
  variant?: 'default' | 'black' | 'grey' | 'custom';
  propsFunc?: () => void;
}

function MyBtn({title, variant = 'default', className, propsFunc = () => {}}: BtnProps) {
  const variants = {
    default: 'bg-[#FFFFFF] px-[16px] py-[16px] border w-full',
    black: 'bg-[#010101] text-white px-[16px] py-[16px] border border-white w-full',
    grey: 'bg-[#D9D9D9] px-[16px] py-[16px] border border-white w-full',
    custom: '',
  };

  function handleBtn() {
    propsFunc();
  }
  return (
    <button onClick={handleBtn} className={clsx(variants[variant], className, 'ButtonText')} type="button">
      {title} &#10230;
    </button>
  );
}
export default MyBtn;
