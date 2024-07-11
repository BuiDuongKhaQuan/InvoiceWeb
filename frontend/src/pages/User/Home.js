import React from "react";
import Header from "../../components/Header";
import "../../assets/css/styles.css";
import Button from "../../components/Button";

export default function Home() {
  return (
    <div>
      <Header />
      <div id="content" className="content-area">
        <div className="banner  position-relative">
          <div className="main-content position-relative">
            <div className="position-relative">
              <div className="banner-inner fill">
                <div className="banner-bg fill">
                  <div className="bg fill bg-fill bg-loaded"></div>
                </div>
              </div>
              <div className="banner-layer container">
                <div data-animate="fadeInLeft" data-animated="true">
                  <div className="text-white text-container">
                    <div className="text-inner text-left">
                      <h2>Dẫn đầu trong chiến lược Marketing</h2>
                      <p>
                        Sau khi đã sở hữu một website chuyên nghiệp thì chắn
                        chắn rằng công việc kinh doanh của bạn sẽ được giảm nhẹ
                        gánh rất nhiều, tuy nhiên phải làm sao để đưa website
                        của bạn và khách hàng đến gần nhau hơn? Dịch vụ SEO của
                        chúng tôi sẽ giúp bạn thực hiện điều đó.
                      </p>

                      <Button text="KHÁM PHÁ THÊM" customBtn="btn" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="cloud-container">
                <div className="img has-hover cloud cloud-1">
                  <div className="img-inner dark">
                    <img
                      width="137"
                      height="85"
                      src="https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2019/02/SEO-Small-Cloud-Pic-003.png"
                      className="attachment-original size-original"
                      alt=""
                    />
                  </div>
                </div>
                <div className="img has-hover cloud cloud-2">
                  <div className="img-inner dark">
                    <img
                      width="174"
                      height="107"
                      src="https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2019/02/SEO-Small-Cloud-Pic-002.png"
                      className="attachment-original size-original"
                      alt=""
                    />
                  </div>
                </div>
                <div className="img has-hover cloud cloud-3">
                  <div className="img-inner dark">
                    <div class="img-inner dark">
                      <img
                        width="2387"
                        height="449"
                        src="https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2019/02/sky-1.png"
                        class="attachment-original size-original"
                        alt=""
                        srcset="https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2019/02/sky-1.png 2387w, https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2019/02/sky-1-300x56.png 300w, https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2019/02/sky-1-768x144.png 768w, https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2019/02/sky-1-1024x193.png 1024w, https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2019/02/sky-1-600x113.png 600w"
                        sizes="(max-width: 2387px) 100vw, 2387px"
                      />
                    </div>
                  </div>
                </div>
                <div className="img has-hover cloud cloud-3">
                  <div className="img-inner dark">
                    <img
                      width="174"
                      height="107"
                      src="https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2019/02/SEO-Small-Cloud-Pic-001.png"
                      className="attachment-original size-original"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
