import MyBtn from '../Button/MyBtn';
import heartIcon from '@/assets/img/icons/likeProduct.svg';
import {useAppDispatch, useAppSelector} from '@/shared/hooks/redux';
import {addProduct, removeProduct} from '@/store/cartSlicer';
import Product from '@/shared/models/IProduct';
import {useMemo} from 'react';

function CardProduct({name, prise, specifications, img, id, sale}: Product) {
  const propsBtn = ['px-[16px] py-[16px] border-1 w-[100%]'];
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
        <h4 className="Text_Bold mb-[12px]">{name}</h4>
        <p>
          <span className={`Text_Bold ${prise?.salePrise && 'text-[rgb(136,136,136)] line-through Text_Regular'} `}>
            {prise?.mainPrise}
          </span>
          &nbsp;
          <span className="Text_Bold">{prise?.salePrise}</span>
        </p>
        <span className="">
          <span className="Text_Regular text-[rgb(136,136,136)]">Specification:</span> <br />
          <span className=" Text_Regular text-[black]">
            {specifications?.map((specification, index) => <p key={index}>{specification}</p>)}
          </span>
        </span>
      </div>

      {cartProduct ? (
        <div className="flex justify-around py-[16px] border-1 bg-mainTheme rounded-2xl px-2">
          <button onClick={() => dispatch(addProduct(cartProduct))}>&#43;</button>
          <span>{cartProduct.quantity}шт</span>
          <button onClick={() => dispatch(removeProduct(cartProduct))}>&#8722;</button>
        </div>
      ) : (
        <MyBtn propsFunc={handleAddProduct} title={'ADD TO CART'} {...propsBtn}></MyBtn>
      )}
    </div>
  );
}
export default CardProduct;
