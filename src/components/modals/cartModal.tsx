import {useAppSelector, useAppDispatch} from '@/hooks/redux';
import {useClickOutside} from '@/hooks/useClickOutside';
import {addProduct, changeQuantity} from '@/store/cartSlicer';
import MyBtn from '@/UI/Button/MyBtn';
import {useRef} from 'react';
interface cartProps {
  isVisable: boolean;
  setVisableCart: (arg: boolean) => void;
}
function CartModal({isVisable, setVisableCart}: cartProps) {
  const cartProducts = useAppSelector(state => state.cartSlicer.selectProducts);
  const propsBtn = ['px-[16px] py-[16px] border-1 w-[100%]'];
  const dispatch = useAppDispatch();
  const cartRef = useRef(null);
  useClickOutside(cartRef, () => {
    setVisableCart(false);
  });
  return (
    <div
      ref={cartRef}
      className={`${
        isVisable ? 'flex' : 'hidden'
      } w-[300px] min-h-[200px] max-h-[400px] bg-white absolute right-10 top-[55px] z-1 rounded-2xl shadow-2xl p-3 flex flex-col justify-between overflow-y-scroll`}>
      {cartProducts.length > 0 ? (
        <div>
          {cartProducts.map(product => (
            <div key={product.id} className="flex items-center justify-between gap-4 mb-4">
              <div className="grid grid-cols-2 gap-x-2">
                <div className="w-[80px] ">
                  <img src={product.img} alt="" />
                </div>
                <span className="self-center">{product.name}</span>
                <div className="col-span-full">
                  <span>Total prise: </span>
                  <span>{product.prise.mainPrise}</span>
                </div>
              </div>
              <div className="flex flex-auto justify-between text-xl bg-mainTheme rounded-2xl px-2">
                <button onClick={() => dispatch(addProduct(product))}>&#43;</button>
                <span>{product.quantity}шт</span>
                <button onClick={() => dispatch(changeQuantity(product))}>&#8722;</button>
              </div>
            </div>
          ))}
          <MyBtn title={'Перейти к оформлению'} {...propsBtn}></MyBtn>
        </div>
      ) : (
        <span className="self-center text-center Text_Bold">Корзина пуста</span>
      )}
    </div>
  );
}

export default CartModal;
