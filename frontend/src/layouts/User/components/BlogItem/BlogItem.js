import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogItem({ blog }) {
    return (
        <div className="col-4 p-2">
            <div className="box-swap border border-1">
                <div className="col post-item">
                    <div className="col-inner p-3">
                        <Link to={blog.linkUrl} className="text-decoration-none">
                            <div className="box-image">
                                <img className="img-fluid" src={blog.img} alt="post1" />
                            </div>
                            <div className="box-text text-black">
                                <div className="box-text-inner">
                                    <h5> {blog.title}</h5>
                                    <div className="is-divider"> </div>
                                    <p>{blog.content}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
