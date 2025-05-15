import {Link} from 'react-router-dom';
import MyBtn from '../Button/MyBtn';
import Product from '@/shared/models/IProduct';

function CardBlogs({name, text, img, id}: Product) {
  return (
    <div className="grow-1 shrink-1 basis-[25%]">
      <div className="relative bg-[rgb(236,236,236)]">
        <div>
          <img className="object-cover object-top  aspect-square w-[100%] max-h-[300px]" src={img} alt="" />
        </div>
      </div>
      <div className="mb-[12px] bg-lightGrey pt-4">
        <h4 className="Title_Medium mb-[12px] truncate">{name}</h4>
        <p className="Text_Small truncate_col">{text}</p>
      </div>
      <div>
        <Link to={`/blogs/${id}`}>
          <MyBtn title={'SEE MORE...'}></MyBtn>
        </Link>
      </div>
    </div>
  );
}
export default CardBlogs;
