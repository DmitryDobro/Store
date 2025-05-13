import {useClickOutside} from '@/shared/hooks/useClickOutside';
import {useRef} from 'react';
interface cartProps {
  isVisable: boolean;
  setModalVisable?: (arg: boolean) => void;
  children: React.ReactNode;
}
function Modal({isVisable, setModalVisable = () => {}, children}: cartProps) {
  const cartRef = useRef(null);
  useClickOutside(cartRef, () => {
    setModalVisable(false);
  });
  return (
    <div
      ref={cartRef}
      className={`${
        isVisable ? 'flex' : 'hidden'
      } w-[300px] min-h-[200px] max-h-[400px] bg-white absolute right-10 top-[55px] z-3 rounded-2xl shadow-2xl p-3 flex flex-col justify-between overflow-y-scroll`}>
      {children}
    </div>
  );
}

export default Modal;
