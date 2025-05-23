import React, {useState} from 'react';
import './Header.css';
import logo from '@/assets/img/Logo.png';
import heart from '@/assets/img/icons/heart.svg';
import sms from '@/assets/img/icons/sms.svg';
import profile from '@/assets/img/icons/profile.svg';
import cart from '@/assets/img/icons/shopping-bag.svg';
import phone from '@/assets/img/icons/phone.svg';
import Input from '@/shared/UI/Input/Input';
import {Link} from 'react-router-dom';
import {useAppSelector} from '@/shared/hooks/redux';
import CartModal from './ui/cartModal';
import DropdownMenu from '@/shared/UI/DropdownMenu/DropdownMenu';

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
const menu = [
  {
    title: 'Men',
    subMenu: ['Casual', 'Sport', 'Sandal'],
  },
  {
    title: 'Women',
    subMenu: ['Casual', 'Sport', 'Sandal'],
  },
  {
    title: 'Kids',
    subMenu: ['Casual', 'Sport', 'Sandal'],
  },
];
function Header() {
  const cartProducts = useAppSelector(state => state.cartSlicer.selectProducts);
  const [cartVisable, setCartVisable] = useState(false);
  return (
    <header className=" relative mb-11">
      <div className="header  flex gap-3 justify-around items-center relative">
        <div className=" lg:hidden w-5 h-5 bg-amber-400 basis-[30px]"></div>
        <Link to="/">
          <img className="flex-auto" src={logo} alt="" />
        </Link>
        <div className="input basis-[33%] shrink-0">
          <Input placeholder={'Поиск товаров'}></Input>
        </div>
        <div className="flex basis-[50%] justify-around gap-4">
          {data.map((item, index) => (
            <div
              onClick={() => item.icon === cart && setCartVisable(!cartVisable)}
              className={`${item.mobile && 'hidden'}
            lg:flex min-w-12 h-15 p-2 flex flex-auto items-center justify-center border border-black rounded-sm gap-1 relative`}
              key={index}>
              <img className="w-6 h-6 " src={item.icon} alt="" />
              {item.icon === cart && cartProducts.length ? <span className=" cartIcon">{cartProducts.length}</span> : ''}
              <p className="md:ld:hidden Text_Small truncate">{item.info}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center bg-lightGrey">
        <div className="m-auto flex py-5 gap-4">
          {menu.map((item, index) => (
            <DropdownMenu key={index} title={item.title} subMenu={item.subMenu}></DropdownMenu>
          ))}
        </div>
      </div>
      <CartModal setModalVisable={setCartVisable} isVisable={cartVisable}></CartModal>
    </header>
  );
}
export default Header;
