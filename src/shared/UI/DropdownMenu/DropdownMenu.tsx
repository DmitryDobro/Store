import {Link} from 'react-router-dom';
import './DropdownMenu.css';
import Modal from '../Modals/Modal';
import { useState } from 'react';
interface DropdownMenuProps {
  title: string;
  subMenu: string[];
}
function DropdownMenu({title, subMenu}: DropdownMenuProps) {
      const [subMenuVisable, setSubMenuVisable] = useState(false);
    function handleMouseOn(){
        setSubMenuVisable(true)
    }
      function handleMouseOff(){
        setSubMenuVisable(false)
    }
  return (
    <div>
      <ul className="flex gap-3 mainMenu" onMouseEnter={handleMouseOn} onMouseLeave={handleMouseOff}>
        <li className="relative" >
          {title}
          <Modal isVisable={subMenuVisable}>
            <ul className="subMenu absolute top-9">
              {subMenu.map(item => (
                <li className="list-disc">
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
