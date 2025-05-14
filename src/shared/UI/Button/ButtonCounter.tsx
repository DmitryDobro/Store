import clsx from 'clsx';

interface ButtonCounterProps {
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
  className?: string;
}
function ButtonCounter({count, handleIncrement, handleDecrement, className}: ButtonCounterProps) {
  function increment() {
    handleIncrement();
  }
  function decrement() {
    handleDecrement();
  }
  const baseClass = 'flex justify-around bg-mainTheme rounded-2xl px-2';
  return (
    <div className={clsx(baseClass, className)}>
      <button onClick={increment}>&#43;</button>
      <span>{count}шт</span>
      <button onClick={decrement}>&#8722;</button>
    </div>
  );
}
export default ButtonCounter;
