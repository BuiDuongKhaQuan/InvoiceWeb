import React from "react";
import "./styles.css";
import Button from "../Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="top-bar bg-dark py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="left-top-bar d-flex justify-content-start">
            <ul className="list-unstyled d-flex mb-0">
              <li className="me-3">
                <i className="bi bi-facebook text-white"></i>
              </li>
              <li className="me-3">
                <i className="bi bi-instagram text-white"></i>
              </li>
              <li className="me-3">
                <i className="bi bi-twitter text-white"></i>
              </li>
            </ul>
          </div>
          <div className="right-top-bar d-flex justify-content-end align-items-center">
            <ul className="list-unstyled d-flex mb-0 me-3">
              <li className="d-flex align-items-center me-3 text-white">
                <i className="bi bi-house-door me-2"></i>
                <p className="mb-0">Hồ Chí Minh</p>
              </li>
              <li className="d-flex align-items-center me-3 text-white">
                <i className="bi bi-telephone me-2"></i>
                <p className="mb-0">02849384374</p>
              </li>
            </ul>
            <Button text="Tư vấn ngay" />
          </div>
        </div>
      </div>
      <div className="main-header bg-light py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="main-header-left">
            <Link to="/">
              <img
                src="http://mauweb.monamedia.net/seosieucap/wp-content/uploads/2019/02/logo-seosieucap-01.png"
                alt="Logo"
                className="header-logo"
              />
            </Link>
          </div>
          <div className="main-header-right text-uppercase fw-bold">
            <ul className="list-unstyled d-flex mb-0">
              <li className="menu-item">
                <Link to="/">Trang chủ</Link>
              </li>
              <li className="menu-item">
                <Link to="/">Giới thiệu</Link>
              </li>
              <li className="menu-item">
                <Link to="/">Dịch vụ</Link>
              </li>
              <li className="menu-item">
                <Link to="/">Bảng giá</Link>
              </li>
              <li className="menu-item">
                <Link to="/">Blog</Link>
              </li>
              <li className="menu-item">
                <Link to="/">Liên hệ</Link>
              </li>
              <li className="menu-item">
                <Link to="/">Chính sách bảo mật</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
