import {useAppDispatch, useAppSelector} from '@/shared/hooks/redux';
import MyBtn from '@/shared/UI/Button/MyBtn';
import {addProduct, removeProduct} from '@/store/cartSlicer';
import Modal from '@/shared/UI/Modals/Modal';
import {Link} from 'react-router-dom';
import emptyCart from '@/assets/img/icons/emptyCart.png';

function CartModal({setModalVisable, isVisable}: {setModalVisable: React.Dispatch<React.SetStateAction<boolean>>; isVisable: boolean}) {
  const cartProducts = useAppSelector(state => state.cartSlicer.selectProducts);
  const totalPrice = useAppSelector(state => state.cartSlicer.price);
  const propsBtn = ['px-[16px] py-[16px] border-1 w-[100%]'];
  const dispatch = useAppDispatch();
  function closeModal() {
    setModalVisable(false);
  }
  const className = 'right-0 top-[55px]';
  return (
    <Modal setModalVisable={setModalVisable} isVisable={isVisable} className={className}>
      {cartProducts.length > 0 ? (
        <div className="overflow-y-scroll">
          {cartProducts.map(product => (
            <div key={product.id} className="flex items-center justify-between gap-4 mb-4">
              <div className="grid grid-cols-2 gap-x-2">
                <div className="w-[80px] ">
                  <img src={product.img} alt="" />
                </div>
                <span className="self-center">{product.name}</span>
                <div className="col-span-full">
                  <span>Prise: </span>
                  <span>{product.totalPrice}</span>
                </div>
              </div>
              <div className="flex flex-auto justify-between text-xl bg-mainTheme rounded-2xl px-2">
                <button onClick={() => dispatch(addProduct(product))}>&#43;</button>
                <span>{product.quantity}шт</span>
                <button onClick={() => dispatch(removeProduct(product))}>&#8722;</button>
              </div>
            </div>
          ))}
          <p className="Text_Bold mb-2"> Total price: {totalPrice}</p>
          <Link to={'/order'}>
            <MyBtn propsFunc={closeModal} title={'Перейти к оформлению'} {...propsBtn}></MyBtn>
          </Link> 
        </div>
      ) : (
        <div>
          <img className="p-2 max-w-[150px] m-auto" src={emptyCart} alt="" />
          <p className='text-center'>
            <span className="m-auto text-center Text_Bold">В корзине пусто</span><br />
            <span className='Text_Regular'>Добавьте товары, чтобы оформить заказ</span>
          </p>
        </div>
      )}
    </Modal>
  );
}
export default CartModal;
