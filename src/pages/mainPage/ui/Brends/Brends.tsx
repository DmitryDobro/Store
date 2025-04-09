import MyBtn from '@/shared/UI/Button/MyBtn';
import {brendData} from './mockData';

function Brends() {
  const propsBtn = ['px-[16px] py-[16px] border-1 w-[100%]'];
  return (
    <section>
      <h3 className="TitleSection mb-6 text-center items-center">BRENDS</h3>
      <div className="mb-18">
        <MyBtn title={'See all'} {...propsBtn}></MyBtn>
      </div>
      <div className="flex flex-nowrap sm:flex-wrap gap-10  sm:gap-3 justify-between overflow-hidden">
        {brendData.map((brend, index) => (
          <div key={index} className="basis-[28%] sm:basis-[30%] md:basis-[10%] grow-1 shrink-0 flex items-center justify-center">
            <img src={brend} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}
export default Brends;
