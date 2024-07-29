import React from 'react';
import InvoiceItem from '~/layouts/User/components/InvoiceItem';
import PageTitle from '~/layouts/User/components/PageTitle';

export default function Invoices() {
    const invoices = [
        {
            id: 1,
            title: 'Invoice Title 1',
            content: 'This is the content of the first Invoice.',
            img: 'https://coefficient.io/wp-content/uploads/2023/11/construction-invoice-3-768x1343.webp',
            linkUrl: 'http://link-to-blog-1.com',
        },
        {
            id: 2,
            title: 'Invoice Title 2',
            content: 'This is the content of the second Invoice.',
            img: 'https://coefficient.io/wp-content/uploads/2023/11/construction-invoice-3-768x1343.webp',
            linkUrl: 'http://link-to-Invoice-2.com',
        },
        {
            id: 3,
            title: 'Invoice Title 3',
            content: 'This is the content of the third Invoice.',
            img: 'https://coefficient.io/wp-content/uploads/2023/11/construction-invoice-3-768x1343.webp',
            linkUrl: 'http://link-to-Invoice-3.com',
        },
        {
            id: 1,
            title: 'Invoice Title 1',
            content: 'This is the content of the first Invoice.',
            img: 'https://coefficient.io/wp-content/uploads/2023/11/Freelance-invoice-4-768x835.webp',
            linkUrl: 'http://link-to-blog-1.com',
        },
        {
            id: 2,
            title: 'Invoice Title 2',
            content: 'This is the content of the second Invoice.',
            img: 'https://coefficient.io/wp-content/uploads/2023/10/freelance-consultant-invoice-template-768x828.webp',
            linkUrl: 'http://link-to-Invoice-2.com',
        },
        {
            id: 3,
            title: 'Invoice Title 3',
            content: 'This is the content of the third Invoice.',
            img: 'https://dhdlogistics.com/wp-content/uploads/2024/02/invoice-la-gi.jpg',
            linkUrl: 'http://link-to-Invoice-3.com',
        },
    ];
    return (
        <div className="main">
            <div className="content">
                <PageTitle title="INVOICES" />
                <div className="container gap-element">
                    <div className="d-flex">
                        <div className="col-12">
                            <div className="p-4">
                                <div className="row">
                                    {invoices.map((invoice) => (
                                        <InvoiceItem invoice={invoice} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
