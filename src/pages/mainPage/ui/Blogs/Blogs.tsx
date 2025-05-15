import MyBtn from '@/shared/UI/Button/MyBtn';
import {blogsData} from './mockData';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, A11y} from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import CardBlogs from '@/shared/UI/Card/CardBlogs';
import {Link} from 'react-router-dom';
function Blogs() {
  return (
    <section>
      <h3 className="Title_Large mb-6 text-center">BLOGS</h3>
      <div className="mb-18">
        <Link to={'/blogs'}>
          <MyBtn title={'See all'} ></MyBtn>
        </Link>
      </div>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={2}
        pagination={{el: '.myPagination', clickable: true}}
        breakpoints={{
          834: {
            slidesPerView: 3,
          },
        }}>
        {blogsData.map((blogData) => (
          <SwiperSlide key={blogData.id}>
            <CardBlogs name={blogData.name} text={blogData.text} img={blogData.img} id={blogData.id}></CardBlogs>
          </SwiperSlide>
        ))}
        <div className="myPagination flex justify-center gap-2 mt-6"></div>
      </Swiper>
    </section>
  );
}
export default Blogs;
