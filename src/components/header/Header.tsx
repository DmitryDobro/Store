import React, {useState} from 'react';
import './Header.scss';
import logo from '@/assets/img/Logo.png';
import heart from '@/assets/img/icons/heart.svg';
import sms from '@/assets/img/icons/sms.svg';
import profile from '@/assets/img/icons/profile.svg';
import cart from '@/assets/img/icons/shopping-bag.svg';
import phone from '@/assets/img/icons/phone.svg';
import Input from '@/UI/Input/Input';
import {Link} from 'react-router-dom';
import {useAppSelector} from '@/hooks/redux';
import CartModal from '../modals/cartModal';
const data = [
  {
    icon: phone,
    info: '(804) 6623-9999',
    mobile: true,
  },
  {
    icon: sms,
    info: 'supportoursmallbusiness@g.com',
    mobile: true,
  },
  {
    icon: profile,
    info: '',
  },
  {
    icon: heart,
    info: '',
  },
  {
    icon: cart,
    info: '',
  },
];

function Header() {
  const cartProducts = useAppSelector(state => state.cartSlicer.selectProducts);
  const [modalVisable, setModalVisable] = useState(false);
  return (
    <header className=" header mb-6 flex gap-3 justify-around items-center relative">
      <div className=" md:lg:hidden w-5 h-5 bg-amber-400 basis-[30px]"></div>
      <Link to="/">
        <img className="flex-auto" src={logo} alt="" />
      </Link>
      <div className="input basis-[33%] shrink-0">
        <Input placeholder={'Поиск товаров'}></Input>
      </div>
      <div className="flex basis-[50%] justify-around gap-4">
        {data.map((item, index) => (
          <div
            onClick={() => item.icon === cart && setModalVisable(!modalVisable)}
            className={`${item.mobile && 'hidden'}
            lg:flex min-w-12 h-15 p-2 flex flex-auto items-center justify-center border border-black rounded-sm gap-1 relative`}
            key={index}>
            <img className="w-6 h-6 " src={item.icon} alt="" />
            {item.icon === cart && cartProducts.length ? <span className=" cartIcon">{cartProducts.length}</span> : ''}
            <p className="md:ld:hidden textMenu truncate">{item.info}</p>
          </div>
        ))}
      </div>
      <CartModal setVisableCart={setModalVisable} isVisable={modalVisable}></CartModal>
    </header>
  );
}
export default Header;
