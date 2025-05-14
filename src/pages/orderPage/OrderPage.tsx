import deleteIcon from '@/assets/img/icons/deleteIcon.svg';
import animationCount from '@/shared/features/animationCount';
import {useAppDispatch, useAppSelector} from '@/shared/hooks/redux';
import ButtonCounter from '@/shared/UI/Button/ButtonCounter';
import MyBtn from '@/shared/UI/Button/MyBtn';
import {addProduct, removeProduct, removeAll} from '@/store/cartSlicer';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
function OrderPage() {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector(state => state.cartSlicer.selectProducts);
  const priceFromState = useAppSelector(state => state.cartSlicer.price);
  const [totalPriceForRender, setTotalPrice] = useState(0);
  useEffect(() => {
    animationCount(priceFromState, totalPriceForRender, setTotalPrice);
  }, [priceFromState]);
  function handleIncrement(product) {
    dispatch(addProduct(product));
  }
  function handleDecrement(product) {
    dispatch(removeProduct(product));
  }
  return (
    <section className="flex gap-10 justify-between">
      {cartProducts.length > 0 ? (
        <div className="flex-auto bg-lightGrey rounded-2xl h-max">
          {cartProducts.map(product => (
            <div key={product.id} className="flex justify-around items-center mb-8 p-2 gap-8 last:mb-0">
              <div className="w-[100px] bg-mainTheme rounded-2xl ">
                <img src={product.img} alt="" className="aspect-square" />
              </div>
              <div className="flex basis-[50%] gap-8 flex-col justify-between items-start">
                <span>{product.name}</span>
                <button onClick={() => dispatch(removeAll(product))}>
                  <img className="max-h-[20px]" src={deleteIcon} alt="" />
                </button>
              </div>
              <ButtonCounter
                className="Text_Bold max-w-[130px] gap-2"
                count={product.quantity}
                handleIncrement={() => handleIncrement(product)}
                handleDecrement={() => handleDecrement(product)}></ButtonCounter>
              <div className="flex-auto Text_Bold text-center">
                <span className="">{product.totalPrice}р.</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center m-auto">
          <p className="Text_Bold">Корзина пуста</p>
          <Link className="cursor-pointer text-green-500" to={'/'}>
            Вернуться к покупкам
          </Link>
        </div>
      )}

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
          <MyBtn title={'Оформить заказ'}></MyBtn>
        </div>
      </div>
    </section>
  );
}
export default OrderPage;
