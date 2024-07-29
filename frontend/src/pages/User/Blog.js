import React from 'react';

import { Link } from 'react-router-dom';
import InputField from '~/components/InputField';
import BlogItem from '~/layouts/User/components/BlogItem/BlogItem';
import ItemCurent from '~/layouts/User/components/BlogItem/ItemCurent';
import PageTitle from '~/layouts/User/components/PageTitle';
export default function Blog() {
    const blogs = [
        {
            id: 1,
            title: 'Blog Title 1',
            content: 'This is the content of the first blog.',
            img: 'https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2018/07/thiet-ke-website-truong-hoc-1.jpg',
            linkUrl: 'http://link-to-blog-1.com',
        },
        {
            id: 2,
            title: 'Blog Title 2',
            content: 'This is the content of the second blog.',
            img: 'https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2018/07/thiet-ke-website-truong-hoc-1.jpg',
            linkUrl: 'http://link-to-blog-2.com',
        },
        {
            id: 3,
            title: 'Blog Title 3',
            content: 'This is the content of the third blog.',
            img: 'https://mauweb.monamedia.net/seosieucap/wp-content/uploads/2018/07/thiet-ke-website-truong-hoc-1.jpg',
            linkUrl: 'http://link-to-blog-3.com',
        },
    ];

    return (
        <div className="main">
            <div className="content">
                <PageTitle title="Blog" />
                <div className="container gap-element">
                    <div className="header-blog">
                        <h4 className="text-uppercase text-center">Chia sẻ về dịch vụ hóa đơn hiện nay</h4>
                        <p>
                            Dịch vụ SEO hiện nay đang có nhiều biến động cũng như ngày càng nhận được sự quan tâm của
                            Google. Các chính sách mới của Google ảnh hưởng đến phương pháp và làm thay đổi những cách
                            SEO từ trước đến nay. Với mục địch chia sẻ một số kiến thức cũng như cập nhật những thay đổi
                            về thuật toán của Google một cách nhanh chóng nhất, chúng tôi xây dựng cộng đồng trao đổi về
                            SEO để mọi người có thể chia sẻ những kiến thức của mình với cộng đồng, đồng thời tự nâng
                            cao kiến thức chuyên môn. Mọi ý kiến chia sẻ về dịch vụ SEO hiện nay, bạn có thể gửi về cho
                            công ty SEO Siêu Cấp của chúng tôi xem xét, nếu bài chia sẻ của bạn là có ích, chúng tôi sẽ
                            đăng lên website để chia sẻ cho mọi người.
                        </p>
                    </div>
                    <div className="main-blog d-flex">
                        <div className="col-3">
                            <div className="border-end">
                                <div className="p-4">
                                    <div className="search">
                                        <InputField placeholder="Tìm kiếm..." icon />
                                    </div>
                                    <div className="new-post border border-1">
                                        <div className="wrap-post p-3">
                                            <div className="widget-title text-uppercase fw-bold">
                                                <span>Bài viết mới nhất</span>
                                            </div>
                                            <ul className="list-unstyled">
                                                {blogs.map((blog) => (
                                                    <ItemCurent key={blog.id} blogcurents={blog} />
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="p-4">
                                <div className="row">
                                    {blogs.map((blog) => (
                                        <BlogItem key={blog.id} blog={blog} />
                                    ))}
                                </div>
                            </div>
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-center">
                                    <li class="page-item">
                                        <Link class="page-link " to="" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </Link>
                                    </li>
                                    <li class="page-item active">
                                        <Link class="page-link" to="">
                                            1
                                        </Link>
                                    </li>
                                    <li class="page-item">
                                        <Link class="page-link" to="">
                                            2
                                        </Link>
                                    </li>
                                    <li class="page-item">
                                        <Link class="page-link" to="">
                                            3
                                        </Link>
                                    </li>
                                    <li class="page-item">
                                        <Link class="page-link" to="" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
