import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div id="footer">
            <div className="container">
                <div className="row align-item-center pt-5">
                    <div className="col-md-5">
                        <div className="col-inner text-white">
                            <h3>Về Chúng tôi</h3>
                            <p className="pt-4">
                                Công ty <strong>dịch vụ hóa đơn</strong> được thành lập vào ngày 3 tháng 3 năm 2010 với
                                tiêu chí “Luôn đồng hành cùng thành công của bạn”. Cổ đông sáng lập{' '}
                                <strong>dịch vụ hóa đơn</strong> bao gồm các cá nhân và doanh nhân đang hoạt động thành
                                đạt tại Việt Nam.Với đội ngũ nhân viên trẻ,năng nổ,sáng tạo hứa hẹn một tương lai xa tốt
                                đẹp dành cho <strong>dịch vụ hóa đơn</strong>.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="col-inner text-white">
                            <h3>Menu</h3>
                            <div className="menu-footer pt-4">
                                <ul className="menu list-unstyled ">
                                    <li className="menu-ietm ">
                                        <Link className="text-decoration-none menu-ietm-footer">Trang chủ</Link>
                                    </li>
                                    <li className="menu-ietm ">
                                        <Link className="text-decoration-none menu-ietm-footer">Giới thiệu</Link>
                                    </li>
                                    <li className="menu-ietm ">
                                        <Link className="text-decoration-none menu-ietm-footer">Blog</Link>
                                    </li>
                                    <li className="menu-ietm ">
                                        <Link className="text-decoration-none menu-ietm-footer">Liên hệ</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="col-inner text-white">
                            <h3>Dịch Vụ</h3>
                            <div className="menu-footer pt-4">
                                <ul className="menu list-unstyled ">
                                    <li className="menu-ietm ">
                                        <Link className="text-decoration-none menu-ietm-footer">Công ty</Link>
                                    </li>
                                    <li className="menu-ietm ">
                                        <Link className="text-decoration-none menu-ietm-footer">Dịch vụ</Link>
                                    </li>
                                    <li className="menu-ietm ">
                                        <Link className="text-decoration-none menu-ietm-footer">Bảng giá</Link>
                                    </li>
                                    <li className="menu-ietm ">
                                        <Link className="text-decoration-none menu-ietm-footer">
                                            Chính sách bảo mật
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="col-inner text-white">
                            <h3>Liên Hệ</h3>
                            <div className="menu-footer pt-4">
                                <ul className="menu list-unstyled ">
                                    <li className="menu-ietm ">
                                        <Link className="text-decoration-none menu-ietm-footer">Thủ Đưc, Tp.HCM</Link>
                                    </li>
                                    <li className="menu-ietm ">
                                        <Link className="text-decoration-none menu-ietm-footer">098473283</Link>
                                    </li>
                                    <li className="menu-ietm ">
                                        <Link className="text-decoration-none menu-ietm-footer">dichvu@gamil.com</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="absolute-footer dark medium-text-center text-center">
                    <div class="container clearfix">
                        <div class="footer-primary pull-left">
                            <div class="copyright-footer text-white">
                                © Thiết kế và lập trình bởi
                                <img src="http://mona-media.com/logo.png" alt="MonaMedia" />
                                <Link href="" title="Mona Media">
                                    <strong>dvhd</strong>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
