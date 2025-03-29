import MyBtn from '@/UI/Button/MyBtn';
import {blogsData} from './mockData';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, A11y} from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import CardBlogs from '@/UI/Card/CardBlogs';
function Blogs() {
  const propsBtn = ['px-[16px] py-[16px] border-1 w-[100%]'];
  return (
    <section>
      <h3 className="TitleSection mb-6 text-center">BLOGS</h3>
      <div className="mb-18">
        <MyBtn title={'See all'} {...propsBtn}></MyBtn>
      </div>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{el: '.myPagination', clickable: true}}
        breakpoints={{
          1000: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },
        }}>
        {blogsData.map((blogData, index) => (
          <SwiperSlide key={index}>
            <CardBlogs name={blogData.name} text={blogData.text} img={blogData.img}></CardBlogs>
          </SwiperSlide>
        ))}
        <div className="myPagination flex justify-center gap-2 mt-6"></div>
      </Swiper>
    </section>
  );
}
export default Blogs;
