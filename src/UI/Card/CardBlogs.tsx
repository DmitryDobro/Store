import MyBtn from '../Button/MyBtn';
import type {ICard} from './ICard';
import heartIcon from '@/assets/img/icons/likeProduct.svg';

function CardBlogs({name, text, img}: ICard) {
  const propsBtn = ['px-[16px] py-[16px] border-1 w-[100%]'];
  const isSale = true;
  return (
    <div className="grow-1 shrink-1 basis-[25%]">
      <div className="relative mb-[32px] bg-[rgb(236,236,236)]">
        {isSale && <span className="absolute m-[2%] top-0 left-0 bg-[rgb(189,186,186)]">SALE!</span>}
        <button className="absolute m-[2%] bottom-0 right-0" type="button">
          <img src={heartIcon} alt="" />
        </button>
        <div>
          <img className="object-cover  aspect-square w-[100%]" src={img} alt="" />
        </div>
      </div>
      <div className="mb-[12px]">
        <h4 className="Text_Big mb-[12px]">{name}</h4>
        <p className="Text_Regular">{text}</p>
      </div>
      <div>
        <MyBtn title={'ADD TO CART'} {...propsBtn}></MyBtn>
      </div>
    </div>
  );
}
export default CardBlogs;
