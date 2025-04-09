import MyBtn from '../Button/MyBtn';
import type {ICard} from './ICard';

function CardBlogs({name, text, img}: ICard) {
  const propsBtn = ['px-[16px] py-[16px] border-1 w-[100%]'];
  return (
    <div className="grow-1 shrink-1 basis-[25%]">
      <div className="relative mb-[32px] bg-[rgb(236,236,236)]">
        <div>
          <img className="object-cover  aspect-square w-[100%]" src={img} alt="" />
        </div>
      </div>
      <div className="mb-[12px]">
        <h4 className="Text_Big mb-[12px]">{name}</h4>
        <p className="Text_Regular">{text}</p>
      </div>
      <div>
        <MyBtn title={'SEE MORE...'} {...propsBtn}></MyBtn>
      </div>
    </div>
  );
}
export default CardBlogs;
