import {Link} from 'react-router-dom';
import MyBtn from '../Button/MyBtn';
interface CardBlogsProps {
  name: string;
  text: string;
  img: string;
  id: number;
}

function CardBlogs({name, text, img, id}: CardBlogsProps) {
  const propsBtn = ['px-[16px] py-[16px] border-1 w-[100%]'];
  return (
    <div className="grow-1 shrink-1 basis-[25%]">
      <div className="relative bg-[rgb(236,236,236)]">
        <div>
          <img className="object-cover  aspect-square w-[100%]" src={img} alt="" />
        </div>
      </div>
      <div className="mb-[12px] bg-lightGrey pt-4">
        <h4 className="Text_Big mb-[12px] truncate">{name}</h4>
        <p className="Text_Regular ">{text}</p>
      </div>
      <div>
        <Link to={`/blogs/${id}`}>
          <MyBtn title={'SEE MORE...'} {...propsBtn}></MyBtn>
        </Link>
      </div>
    </div>
  );
}
export default CardBlogs;
