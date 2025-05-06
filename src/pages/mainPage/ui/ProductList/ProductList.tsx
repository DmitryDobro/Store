import CardProduct from '@/shared/UI/Card/CardProduct';
import {cardsData} from './mockData';
import MyBtn from '@/shared/UI/Button/MyBtn';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, A11y} from 'swiper/modules';
import './ProductList.css';
import 'swiper/swiper-bundle.css';
function ProductList() {
  const propsBtn = ['px-[16px] py-[16px] border-1 w-[100%]'];
  return (
    <section className="mb-15">
      <h3 className="TitleSection mb-6 text-center">FIND YOUR PERFECT PAIR</h3>
      <div className="mb-18">
        <MyBtn title={'See all'} {...propsBtn}></MyBtn>
      </div>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        pagination={{el: '.myPagination', clickable: true}}
        breakpoints={{
          834: {
            slidesPerView: 3,
          },
        }}>
        {cardsData.map((cardData, index) => (
          <SwiperSlide key={index}>
            <CardProduct
              key={index}
              name={cardData.name}
              prise={{
                mainPrise: cardData.prise.mainPrise,
                salePrise: cardData.prise.salePrise,
              }}
              specifications={cardData.specifications}
              img={cardData.img}
              type={cardData.type} id={index} sale={cardData.sale}></CardProduct>
          </SwiperSlide>
        ))}
        <div className="myPagination flex justify-center gap-2 mt-6"></div>
      </Swiper>
    </section>
  );
}
export default ProductList;
