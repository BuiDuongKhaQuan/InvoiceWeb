import React from 'react';
import PageTitle from '~/layouts/User/components/PageTitle';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function PrivacyPolicy() {
    return (
        <div className="main">
            <div className="content">
                <PageTitle title="Chính sách bảo mật" />
                <Container className="gap-element">
                    <Row>
                        <Col>
                            <div className="col-inner">
                                <h3>Chính sách bảo mật của Dịch vụ hóa đơn</h3>
                                <p>
                                    Khi bạn sử dụng dịch vụ của Dịch Vụ Hóa đơn, chúng tôi cảm thấy vinh hạnh khi bạn
                                    tin tưởng cung cấp thông tin của bạn cho chúng tôi. Chính sách bảo mật này nhằm mục
                                    đích giúp bạn hiểu rõ những dữ liệu nào chúng tôi thu thập, tại sao chúng tôi thu
                                    thập và những gì chúng tôi làm với dữ liệu đó. Chính sách này có ý nghĩa quan trọng;
                                    chúng tôi hy vọng bạn sẽ dành thời gian để đọc cẩn thận. Và hãy nhớ, bạn có thể tìm
                                    thấy các biện pháp kiểm soát để quản lý thông tin và bảo vệ quyền riêng tư và bảo
                                    mật của bạn và doanh nghiệp của bạn.
                                </p>
                                <div className="figure-wrap my-5">
                                    <Row className="justify-content-center">
                                        <Col xs="auto">
                                            <Image
                                                src="https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2018/12/chinh-sach-bao-mat.png"
                                                alt="figure"
                                                fluid
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-center">
                                        <Col xs="auto" className="fst-italic text-center">
                                            Chính sách bảo mật tuyệt đối dịch vụ hóa đơn.
                                        </Col>
                                    </Row>
                                </div>
                                <h4>Chính sách bảo mật</h4>
                                <p>
                                    Bạn có thể sử dụng các dịch vụ của chúng tôi theo nhiều cách khác nhau – để tìm kiếm
                                    và chia sẻ thông tin, để giao tiếp với người khác hoặc để tạo nội dung mới. Khi bạn
                                    chia sẻ thông tin với chúng tôi, ví dụ như bằng cách tạo tài khoản{' '}
                                    <strong>Dịch vụ hóa đơn</strong>, chúng tôi có thể làm cho các dịch vụ đó trở nên
                                    tốt hơn nữa – để hiển thị cho bạn nhiều kết quả tìm kiếm và quảng cáo liên quan hơn,
                                    để giúp bạn kết nối với mọi người hoặc để làm cho việc chia sẻ với người khác trở
                                    nên nhanh hơn và dễ dàng hơn. Khi bạn sử dụng dịch vụ hóa đơn của chúng tôi, chúng
                                    tôi muốn bạn biết rõ cách chúng tôi đang sử dụng thông tin và cách bạn có thể bảo vệ
                                    sự riêng tư của mình. Chính sách của chúng tôi về sự riêng tư giải thích:
                                </p>
                                <ul>
                                    <li>Loại thông tin chúng tôi thu thập và lý do thu thập.</li>
                                    <li>Cách chúng tôi sử dụng thông tin đó.</li>
                                    <li>
                                        Các lựa chọn mà chúng tôi cung cấp, bao gồm cả cách truy cập và cập nhật thông
                                        tin.
                                    </li>
                                </ul>
                                <p>
                                    <strong>Dịch vụ hóa đơn</strong> – Chúng tôi cố gắng trình bày một cách đơn giản
                                    nhất có thể được. Tuy nhiên, nếu bạn không quen thuộc với các thuật ngữ như cookie,
                                    địa chỉ IP, thẻ pixel và trình duyệt, thì hãy đọc về các thuật ngữ chính này trước.
                                    Sự riêng tư của bạn quan trọng đối với <strong>Dịch vụ hóa đơn</strong>. Vì vậy, cho
                                    dù bạn là người mới sử dụng <strong>Dịch vụ hóa đơn</strong>
                                    hay người đã sử dụng lâu rồi, vui lòng dành thời gian để tìm hiểu cách thực hành của
                                    chúng tôi – và nếu bạn có bất kỳ câu hỏi nào, hãy liên hệ với chúng tôi.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
