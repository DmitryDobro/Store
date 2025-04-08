import {Link} from 'react-router-dom';
import MyBtn from '../Button/MyBtn';
import type {ICard} from './ICard';
import heartIcon from '@/assets/img/icons/likeProduct.svg';
import {useAppSelector, useAppDispatch} from '@/hooks/redux';
import {addProduct} from '@/store/cartSlicer';
interface CardProductProps extends ICard {
  prise?: {
    mainPrise: number;
    salePrise?: number;
  };
  specifications?: string[];
  type: string;
}

function CardProduct({name, prise, specifications, text, img, type, id}: CardProductProps) {
  const propsBtn = ['px-[16px] py-[16px] border-1 w-[100%]'];

  const dispatch = useAppDispatch();
  const isSale = true;
  function test() {
    dispatch(addProduct({name, prise, img, id}));
  }
  return (
    <div className="grow-1 shrink-1 basis-[25%]">
      <div className="relative mb-[32px] bg-[rgb(236,236,236)]">
        {isSale && <span className="absolute m-[2%] top-0 left-0 bg-[rgb(189,186,186)]">SALE!</span>}
        <button className="absolute m-[2%] bottom-0 right-0" type="button" onClick={test}>
          <img src={heartIcon} alt="" />
        </button>
        <div>
          <img className="object-cover  aspect-square w-[100%]" src={img} alt="" />
        </div>
      </div>
      <div className="mb-[12px]">
        <h4 className="Text_Bold mb-[12px]">{name}</h4>
        <span>
          <span className="Text_Regular text-[rgb(136,136,136)] line-through">{prise?.mainPrise}</span>&nbsp;
          <span className="Text_Bold">{prise?.salePrise}</span>
        </span>
        <span className="">
          <span className="Text_Regular text-[rgb(136,136,136)]">Specification:</span> <br />
          <span className=" Text_Regular text-[black]">
            {specifications?.map((specification, index) => (
              <p key={index}>{specification}</p>
            ))}
          </span>
        </span>
        <p className="Text_Regular">{text}</p>
      </div>
      <div>
        <Link to={`/products/${type}`}>
          <MyBtn title={'ADD TO CART'} {...propsBtn}></MyBtn>
        </Link>
      </div>
    </div>
  );
}
export default CardProduct;
