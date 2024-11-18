import React from 'react'
import { IoMdListBox } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoBagOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

// Import file css cho header. Dấu ../ cho phép lùi lại thư mục cha
import "../../styles/home/header.css"

function Header() {
  return (
    <div className='header-bgcolor'>
      <div className='header-container'>
        <div className='header-logo'>
          <img src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/logo_cps-1.png" 
          alt="logo-cellphones" />
        </div>

        <div className='header-listBox'>
          <IoMdListBox />
          <p>Danh mục</p>
        </div>

        <div className='header-locationPrice'>
          <CiLocationOn />
          <div>
            <div>
              <p>Xem giá tại</p>
              <MdKeyboardArrowDown />
            </div>
            <p>Hồ Chí Minh</p>
          </div>
        </div>

        <div className='header-search'>
          <FaSearch />
          <input type='text' placeholder='Bạn cần tìm gì?' />
        </div>

        <div className='header-phone'> 
          <FiPhone />
          <div>
            <p>Gọi mua hàng</p>
            <p>1800.2097</p>
          </div>
        </div>

        <div className='header-locationStore'>
          <CiLocationOn />
          <h2>Cửa hàng <br/> gần bạn</h2>
        </div>

        <div className='header-truckDelivery'>
          <LiaShippingFastSolid />
          <h2>Tra cứu <br/> đơn hàng</h2>
        </div>

        <div className='header-shoppingBag'>
          <IoBagOutline />
          <h2>Giỏ <br/> hàng</h2>
        </div>

        <div className='header-userLogin'>
          <FaRegUserCircle />
          <h2>Đăng nhập</h2>
        </div>
      </div>
    </div>
  )
}

export default Header