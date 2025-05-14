import MyBtn from '@/shared/UI/Button/MyBtn.js';
import fotoMen from '@/assets/img/category/menCategory.jpg';
import fotoWomen from '@/assets/img/category/womenCategory.jpg';
import fotoKids from '@/assets/img/category/kidsCategory.jpg';
import {Link} from 'react-router-dom';

function CategoryList() {
  const classBtn = 'absolute bottom-0 left-0 m-[4%] px-[10px] py-[10px] bg-[rgb(255,255,255)]';
  return (
    <section>
      <h3 className="TitleSection text-center">FIND YOUR PERFECT PAIR</h3>
      <div className="flex justify-between flex-wrap gap-[15px] mb-[100px] ">
        <div className="relative flex-auto max-h-[380px]">
          <Link to="/products/men">
            <MyBtn title={'MEN'} className={classBtn} variant="custom"></MyBtn>
          </Link>
          <img className=" w-[100%] h-[100%]" src={fotoMen} alt="" />
        </div>
        <div className="relative  flex-auto max-h-[380px]">
          <Link to="/products/women">
            <MyBtn title={'WOMEN'} className={classBtn} variant="custom"></MyBtn>
          </Link>
          <img className="w-[100%] h-[100%]" src={fotoWomen} alt="" />
        </div>
        <div className="relative  flex-auto max-h-[380px]">
          <Link to="/products/kids">
            <MyBtn title={'KIDS'} className={classBtn} variant="custom"></MyBtn>
          </Link>

          <img className="w-[100%] h-[100%]" src={fotoKids} alt="" />
        </div>
      </div>
    </section>
  );
}
export default CategoryList;
