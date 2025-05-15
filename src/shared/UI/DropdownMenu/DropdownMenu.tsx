import {Link} from 'react-router-dom';
import './DropdownMenu.css';
import Modal from '../Modals/Modal';
import {useState} from 'react';
interface DropdownMenuProps {
  title: string;
  subMenu: string[];
}
function DropdownMenu({title, subMenu}: DropdownMenuProps) {
  const [subMenuVisable, setSubMenuVisable] = useState(false);
  function handleMouseOn() {
    setSubMenuVisable(true);
  }
  function handleMouseOff() {
    setSubMenuVisable(false);
  }
  return (
    <div>
      <ul onMouseEnter={handleMouseOn} onMouseLeave={handleMouseOff} className="cursor-pointer ">
        <li className="relative">
          {title}
          <Modal isVisable={subMenuVisable} className="">
            <ul className="subMenu Text_Small">
              {subMenu.map((item, index) => (
                <li className="" key={index}>
                  <Link to={`/${item}`}>{item}</Link>
                </li>
              ))}
            </ul>
          </Modal>
        </li>
      </ul>
    </div>
  );
}
export default DropdownMenu;
