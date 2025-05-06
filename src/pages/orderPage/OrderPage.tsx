import deleteIcon from '@/assets/img/icons/deleteIcon.svg';
import animationCount from '@/shared/features/animationCount';
import {useAppDispatch, useAppSelector} from '@/shared/hooks/redux';
import MyBtn from '@/shared/UI/Button/MyBtn';
import {addProduct, removeProduct} from '@/store/cartSlicer';
import {useEffect, useState} from 'react';
function OrderPage() {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector(state => state.cartSlicer.selectProducts);
  const priceFromState = useAppSelector(state => state.cartSlicer.price);
  const [totalPriceForRender, setTotalPrice] = useState(0);
  useEffect(() => {
    animationCount(priceFromState, totalPriceForRender, setTotalPrice);
  }, [priceFromState]);

  const propsBtn = ['px-[13px] py-[13px] border-1 rounded-2xl'];
  return (
    <section className="flex gap-10 justify-between">
      <div className="flex-auto bg-lightGrey rounded-2xl">
        {cartProducts.map(product => (
          <div key={product.id} className="flex justify-around items-center mb-10 gap-8">
            <div className="w-[100px] bg-mainTheme rounded-2xl ">
              <img src={product.img} alt="" className="aspect-square" />
            </div>
            <div className="flex basis-[50%] gap-8 flex-col justify-between items-start">
              <span>{product.name}</span>
              <img className="max-h-[20px]" src={deleteIcon} alt="" />
            </div>
            <div className="flex flex-auto justify-between text-xl bg-mainTheme rounded-2xl px-2 max-w-[170px] Text_Bold">
              <button onClick={() => dispatch(addProduct(product))}>&#43;</button>
              <span>{product.quantity}шт</span>
              <button onClick={() => dispatch(removeProduct(product))}>&#8722;</button>
            </div>
            <div className="flex-auto Text_Bold text-center">
              <span className="">{product.totalPrice}р.</span>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-lightGrey Text_Regular rounded-2xl p-4 w-[360px] sticky max-h-[300px]">
        <div className="flex flex-col gap-1 mb-3">
          <span className="Text_Bold_Small">Доставка в пункт выдачи</span>
          <span>г. Красноярск пр-кт Красноярский рабочий 25</span>
          <span>Как можно скорее</span>
        </div>
        <div className="flex flex-col gap-1">
          <span> Оплата по карте</span>
          <div className="flex flex-auto justify-between text-xl bg-mainTheme rounded-2xl p-1 Text_Regular gap-3 mb-4">
            <button className="bg-white basis-[50%] rounded-2xl p-4">При получении</button>
            <button className="bg-white basis-[50%] rounded-2xl">Сразу</button>
          </div>
          <div className="flex justify-between Text_Bold mb-6">
            <span>Итого</span>
            <span>{totalPriceForRender}</span>
          </div>
          <MyBtn title={'Оформить заказ'} {...propsBtn}></MyBtn>
        </div>
      </div>
    </section>
  );
}
export default OrderPage;
