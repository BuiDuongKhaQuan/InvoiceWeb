import React from 'react';
import { Link } from 'react-router-dom';

export default function ItemCurent({ blogcurents }) {
    return (
        <li className="recent-blog-post p-2 list-unstyled">
            <div className="d-flex align-items-center">
                <div className="me-3">
                    <img
                        className="img-fluid rounded-circle"
                        src={blogcurents.img}
                        alt="blog1"
                        style={{ width: '75px', height: '75px', objectFit: 'cover' }}
                    />
                </div>
                <div>
                    <Link className="text-decoration-none text-dark fw-bold" to={blogcurents.linkUrl}>
                        {blogcurents.title}
                    </Link>
                </div>
            </div>
        </li>
    );
}
