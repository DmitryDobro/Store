import MyBtn from '../Button/MyBtn';
import heartIcon from '@/assets/img/icons/likeProduct.svg';
import {useAppDispatch, useAppSelector} from '@/shared/hooks/redux';
import {addProduct, removeProduct} from '@/store/cartSlicer';
import Product from '@/shared/models/IProduct';
import {useMemo} from 'react';
import ButtonCounter from '../Button/ButtonCounter';

function CardProduct({name, prise, specifications, img, id, sale}: Product) {
  const cartProducts = useAppSelector(state => state.cartSlicer.selectProducts);
  function getCartProduct(id: number) {
    const item = cartProducts.find(product => product.id === id);
    return item;
  }
  const cartProduct = useMemo(() => {
    return getCartProduct(id);
  }, [cartProducts]);

  const dispatch = useAppDispatch();
  function handleAddProduct() {
    dispatch(addProduct({name, prise, img, id}));
  }
  function handleIncrement() {
    dispatch(addProduct(cartProduct));
  }
  function handleDecrement() {
    dispatch(removeProduct(cartProduct));
  }
  return (
    <div className="">
      <div className="relative mb-[32px] bg-[rgb(236,236,236)]">
        {sale && <span className="absolute m-[2%] top-0 left-0 bg-[rgb(189,186,186)]">SALE!</span>}
        <button className="absolute m-[2%] bottom-0 right-0" type="button">
          <img src={heartIcon} alt="" />
        </button>
        <div>
          <img className="object-cover  aspect-square w-[100%]" src={img} alt="" />
        </div>
      </div>
      <div className="mb-[12px]">
        <h4 className="Text_MediumBold mb-[12px]">{name}</h4>
        <p>
          <span className={`Text_MediumBold  ${prise?.salePrise && 'text-[rgb(136,136,136)] line-through Text_Small'} `}>
            {prise?.mainPrise}
          </span>
          &nbsp;
          <span className="Text_MediumBold">{prise?.salePrise}</span>
        </p>
        <span className="Text_Small">
          <span className=" text-[rgb(136,136,136)]">Specification:</span> <br />
          <span className="text-[black]">{specifications?.map((specification, index) => <p key={index}>{specification}</p>)}</span>
        </span>
      </div>

      {cartProduct ? (
        <ButtonCounter
          className="border-1 py-[16px]"
          count={cartProduct.quantity}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}></ButtonCounter>
      ) : (
        <MyBtn propsFunc={handleAddProduct} title={'ADD TO CART'}></MyBtn>
      )}
    </div>
  );
}
export default CardProduct;
