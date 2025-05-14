import clsx from 'clsx';

interface BtnProps {
  title: string;
  className?: string;
  variant?: 'default' | 'custom';
  propsFunc?: () => void;
}

function MyBtn({title, variant = 'default', className, propsFunc = () => {}}: BtnProps) {
  const variants = {
    default: 'bg-[rgb(255,255,255)] mainText px-[16px] py-[16px] border-1 w-full',
    custom: '',
  };

  function handleBtn() {
    propsFunc();
  }
  return (
    <button onClick={handleBtn} className={clsx(className, variants[variant], className)} type="button">
      {title} &#10230;
    </button>
  );
}
export default MyBtn;
