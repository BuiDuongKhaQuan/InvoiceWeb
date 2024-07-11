import React from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import "../../assets/css/styles.css";
import "../../assets/css/responsive.css";
import Outstanding from "../../components/Outstanding";
import Quality from "../../components/Quality";
import InputField from "../../components/InputField";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div id="main">
        <div id="content" className="content-area">
          <div className="banner1">
            <div className="bg section-bg fill bg-fill bg-loaded"></div>
            <div className="main-content">
              <div className="banner-content" id="banner-903234804">
                <div className="banner-inner fill">
                  <div className="banner-bg fill">
                    <div className="bg fill bg-fill bg-loaded"></div>
                  </div>
                </div>
                <div className="banner-layer container gap-element">
                  <div data-animate="fadeInLeft" data-animated="true">
                    <div className="text-white text-container d-flex">
                      <div className=" col-md-8 text-inner ">
                        <h2>Dẫn đầu trong chiến lược Thanh toán</h2>
                        <p>
                          Sau khi đã sở hữu một 1 cửa hàng chuyên nghiệp thì
                          chắn chắn rằng công việc kinh doanh của bạn sẽ cần
                          phải dược quản lý một cách chặt chẽ và phức tạp, tuy
                          nhiên phải làm sao để đưa cửa hàng của bạn và khách
                          hàng đến gần nhau hơn? Dịch vụ Hóa đơn của chúng tôi
                          sẽ giúp bạn thực hiện điều đó.
                        </p>
                        <Button text="KHÁM PHÁ THÊM" customBtn="btn" />
                      </div>
                      <div className=" justify-content-end img-inner  ">
                        <img
                          src="https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2019/02/SEO-Performance-Icon.png"
                          alt="slide"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner second-banner gap-element">
            <div className="container ">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-8 mx-auto d-flex justify-content-center align-items-center">
                  <div className="col-inner text-center">
                    <h3>Tối ưu hóa Invoice</h3>
                    <p>
                      <strong>Invoice Siêu Cấp</strong> là đơn vị cung cấp dịch
                      vụ Hóa đơn uy tín và an toàn nhất hiện nay, với đội ngũ
                      kinh nghiệm, chúng tôi cam kết mang đến hiệu quả cho
                      website của bạn sau khi kết thúc dịch vụ Hóa đơn, giúp cửa
                      hàng của bạn dễ dàng tính toàn và quản lý khách hàng
                    </p>
                  </div>
                </div>
              </div>
              <div className="row row-collapse justify-content-center align-items-center">
                <Outstanding
                  customLayout="customLayout"
                  title="Sáng Tạo"
                  content="Dễ dàng tiếp cận giao dịch"
                  image="https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2019/02/SEO-Performance-Icon.png"
                  backgroundCustome="backgroundCustome1"
                />
                <Outstanding
                  customLayout="customLayout"
                  title="An Toàn, Uy Tín"
                  content="Dễ dàng tiếp cận giao dịch"
                  image="https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2019/02/Best-Solutions-Icon.png"
                  backgroundCustome="backgroundCustome2"
                />
                <Outstanding
                  customLayout="customLayout"
                  title="Tiếp cận dễ dàng"
                  content="Dễ dàng tiếp cận giao dịch"
                  image="https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2019/02/Network-Protection-Icon.png"
                  backgroundCustome="backgroundCustome3"
                />
                <Outstanding
                  customLayout="customLayout"
                  title="Hỗ trợ CSKH"
                  content="Dễ dàng tiếp cận giao dịch"
                  image="https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2019/02/SEO-Performance-Icon.png"
                  backgroundCustome="backgroundCustome4"
                />
              </div>
            </div>
          </div>
          <div className="banner third-banner gap-element">
            <div className="container ">
              <div className="row d-flex justify-content-center align-items-center ">
                <div className="col-8 mx-auto d-flex justify-content-center align-items-center">
                  <div className="col-inner text-center">
                    <h3>Đứng Top & Uy tín giao dịch</h3>
                    <p className="pt-3">
                      Chuyên cung cấp dịch vụ hóa đơn điện tử đảm bảo chất lượng
                      và đáng tin cậy. Chúng tôi cung cấp các giải pháp toàn
                      diện từ khâu phát hành, quản lý đến lưu trữ hóa đơn điện
                      tử. Dịch vụ của chúng tôi giúp doanh nghiệp tiết kiệm chi
                      phí, nâng cao hiệu quả quản lý, và đảm bảo tuân thủ các
                      quy định pháp luật. Với đội ngũ chuyên gia giàu kinh
                      nghiệm, chúng tôi cam kết mang lại sự hài lòng tối đa cho
                      khách hàng, giúp doanh nghiệp phát triển bền vững và nâng
                      cao uy tín trên thị trường.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row pt-5">
                <Quality
                  icon="https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2019/02/Content-Submission-Icon.png"
                  title="Tạo hóa đơn"
                  content="Thực hiện đơn giản, mới giao diện dễ tiếp cận với người dùng."
                />
                <Quality
                  icon="https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2019/02/Real-Time-Analytics-Icon.png"
                  title="Tạo hóa đơn"
                  content="Thực hiện đơn giản, mới giao diện dễ tiếp cận với người dùng."
                />
                <Quality
                  icon="https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2019/02/Local-Search-Strategy-Icon.png"
                  title="Tạo hóa đơn"
                  content="Thực hiện đơn giản, mới giao diện dễ tiếp cận với người dùng."
                />
              </div>
              <div className="row pt-2">
                <Quality
                  icon="https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2019/02/Conversion-Optimization-Icon.png"
                  title="Tạo hóa đơn"
                  content="Thực hiện đơn giản, mới giao diện dễ tiếp cận với người dùng."
                />
                <Quality
                  icon="https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2019/02/Local-SEO-Icon.png"
                  title="Tạo hóa đơn"
                  content="Thực hiện đơn giản, mới giao diện dễ tiếp cận với người dùng."
                />
                <Quality
                  icon="https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2019/02/Keyword-Research-Icon-3.png"
                  title="Tạo hóa đơn"
                  content="Thực hiện đơn giản, mới giao diện dễ tiếp cận với người dùng."
                />
              </div>
            </div>
          </div>
          <div className="banner four-banner gap-element">
            <div className="container ">
              <div className="row d-flex justify-content-center align-items-center ">
                <div className="col-md-6 mx-auto d-flex justify-content-center align-items-center">
                  <div className="img-inner">
                    <img
                      src="https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2019/02/Home-1-Expert-Image.png"
                      alt="connect"
                    />
                  </div>
                </div>
                <div className="col-md-6 mx-auto d-flex justify-content-center align-items-center">
                  <div className="col-inner ">
                    <div className="col-inner ">
                      <h3>Dịch vụ hóa đơn</h3>
                      <p>
                        Công ty cung cấp dịch vụ hóa đơn được thành lập vào ngày
                        3 tháng 3 năm 2010 với tiêu chí “Luôn đồng hành cùng
                        thành công của bạn”. Cổ đông sáng lập Invoice Siêu Cấp
                        bao gồm các cá nhân và doanh nhân đang hoạt động thành
                        đạt tại Việt Nam. Với đội ngũ nhân viên trẻ, năng nổ,
                        sáng tạo, chúng tôi hứa hẹn mang đến một tương lai tốt
                        đẹp dành cho Invoice Siêu Cấp.
                      </p>
                      <p>
                        Với lợi thế chiều sâu nghiên cứu và phát triển từ năm
                        2007, Invoice Siêu Cấp đã khẳng định uy tín trên thị
                        trường dịch vụ hóa đơn điện tử. Chúng tôi cung cấp các
                        dịch vụ toàn diện về hóa đơn điện tử bao gồm phát hành,
                        quản lý và lưu trữ hóa đơn với giá cả hợp lý. Khả năng
                        thành công và hiệu quả trong công việc của Invoice Siêu
                        Cấp đã nhận được sự tin tưởng của nhiều đối tác trên
                        khắp cả nước.
                      </p>
                      <Button text="Xem thêm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner five-banner gap-element">
            <div className="container ">
              <div className="row d-flex justify-content-center align-items-center ">
                <div className="col-12 mx-auto d-flex justify-content-center align-items-center">
                  <div className="col-inner  text-center  text-white">
                    <div className="col-inner ">
                      <h3>Đăng ký để nhận tư vấn</h3>
                      <p>
                        Gói tư vấn miễn phí. Chúng tôi rất vui khi được hỗ trợ
                        cho bạn. Cung cấp những giải pháp tốt nhất cho website
                        của bạn.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center align-item-center ">
                <div className="col-6 pb-3">
                  <form>
                    <div className="row align-items-center text-white">
                      <div className="col">
                        <InputField label="Email" type="email" name="email" />
                      </div>
                      <div className="col">
                        <Button text="Đăng ký" customBtn=" btnCus" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="banner sĩx-banner gap-element mb-5">
            <div className="container ">
              <div className="row d-flex justify-content-center align-items-center ">
                <div className="col-8 mx-auto d-flex justify-content-center align-items-center">
                  <div className="col-inner  text-center">
                    <div className="col-inner ">
                      <h3>Chia sẻ dịch vụ</h3>
                      <p>
                        Dịch vụ Hóa Đơn chúng tôi cam kết cung cấp giải pháp
                        quản lý hóa đơn chuyên nghiệp và hiệu quả nhất cho doanh
                        nghiệp của bạn. Với sự kết hợp giữa công nghệ tiên tiến
                        và đội ngũ nhân viên giàu kinh nghiệm, chúng tôi đảm bảo
                        mọi hóa đơn của bạn được xử lý một cách nhanh chóng và
                        chính xác, từ đó giúp bạn tập trung hơn vào hoạt động
                        kinh doanh chính. Đội ngũ chuyên gia của chúng tôi sẵn
                        sàng hỗ trợ và tư vấn về các vấn đề liên quan đến hóa
                        đơn, giúp bạn giảm thiểu rủi ro và tối ưu hóa quy trình
                        kế toán của công ty.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center align-item-center">
                <Outstanding
                  title="Sáng Tạo Nội Dung"
                  content="Dễ dàng tiếp cận giao dịch"
                  image="https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2019/02/SEO-Performance-Icon.png"
                  backgroundCustome="backgroundCustome1"
                />
                <Outstanding
                  title="Sáng Tạo Nội Dung"
                  content="Dễ dàng tiếp cận giao dịch"
                  image="https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2019/02/Best-Solutions-Icon.png"
                  backgroundCustome="backgroundCustome2"
                />
                <Outstanding
                  title="Sáng Tạo Nội Dung"
                  content="Dễ dàng tiếp cận giao dịch"
                  image="https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2019/02/Network-Protection-Icon.png"
                  backgroundCustome="backgroundCustome3"
                />
                <Outstanding
                  title="Sáng Tạo Nội Dung"
                  content="Dễ dàng tiếp cận giao dịch"
                  image="https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2019/02/SEO-Performance-Icon.png"
                  backgroundCustome="backgroundCustome4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
