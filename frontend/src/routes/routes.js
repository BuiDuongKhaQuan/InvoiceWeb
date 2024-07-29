import config from '~/config';
import ResetPass from '~/layouts/User/components/InnerProfile/ResetPass';
import Product from '~/layouts/User/components/InvoiceItem/Product';

import { Home, Login, Register, ForgotPassword } from '~/pages/User';
import AboutUs from '~/pages/User/AboutUs';
import Blog from '~/pages/User/Blog';
import Invoices from '~/pages/User/Invoices';
import PrivacyPolicy from '~/pages/User/PrivacyPolicy';
import Profile from '~/pages/User/Profile';
import Service from '~/pages/User/Service';

const { routes, roles } = config;

const publicRouters = [
    { path: routes.home, component: Home },
    { path: routes.login, component: Login },
    { path: routes.register, component: Register },
    { path: routes.forgotpass, component: ForgotPassword },
    { path: routes.blog, component: Blog },
    { path: routes.service, component: Service },
    { path: routes.about_us, component: AboutUs },
    { path: routes.profile, component: Profile },
    { path: routes.resetpass, component: ResetPass },
    { path: routes.privacypolicy, component: PrivacyPolicy },
    { path: routes.product, component: Product },
    { path: routes.invoices, component: Invoices },

    // { path: routes.re, component: Profile },
];

const privateRoutes = [
    // { path: routes.admin, roles: roles.admin, component: AdminHome },
    // { path: routes.admin_account, roles: roles.admin, component: AdminAccount },
    // { path: routes.admin_account_detail, roles: roles.admin, component: AdminAccountDetail },
    // { path: routes.admin_tour, roles: roles.admin, component: AdminTour },
    // { path: routes.admin_tour_detail, roles: roles.admin, component: AdminTourDetail },
    // {
    //     path: routes.admin_tour_creat,
    //     roles: roles.admin,
    //     component: (props) => <AdminTourDetail {...props} create={true} />,
    // },
    // { path: routes.admin_destination, roles: roles.admin, component: AdminDestination },
    // { path: routes.admin_destination_detail, roles: roles.admin, component: AdminDestinationDetail },
    // {
    //     path: routes.admin_destination_create,
    //     roles: roles.admin,
    //     component: (props) => <AdminDestinationDetail {...props} create={true} />,
    // },
    // { path: routes.admin_blog, roles: roles.admin, component: AdminBlog },
    // { path: routes.admin_blog_detail, roles: roles.admin, component: AdminBlogDetail },
    // {
    //     path: routes.admin_blog_create,
    //     roles: roles.admin,
    //     component: (props) => <AdminBlogDetail {...props} create={true} />,
    // },
    // { path: routes.admin_contact, roles: roles.admin, component: AdminContact },
    // { path: routes.admin_contact_detail, roles: roles.admin, component: AdminContactDetail },
    // { path: routes.admin_ticket, roles: roles.admin, component: AdminTicket },
    // { path: routes.admin_ticket_detail, roles: roles.admin, component: AdminTicketDetail },
    // {
    //     path: routes.admin_ticket_create,
    //     roles: roles.admin,
    //     component: (props) => <AdminTicketDetail {...props} create={true} />,
    // },
    // { path: routes.admin_deals, roles: roles.admin, component: AdminDeals },
    // { path: routes.admin_deals_detail, roles: roles.admin, component: AdminDealsDetail },
    // {
    //     path: routes.admin_deals_create,
    //     roles: roles.admin,
    //     component: (props) => <AdminDealsDetail {...props} create={true} />,
    // },
    // { path: routes.admin_company, roles: roles.admin, component: AdminCompany },
    // { path: routes.admin_order, roles: roles.admin, component: AdminOrder },
    // { path: routes.admin_order_detail, roles: roles.admin, component: AdminOrderDetail },
];

export { publicRouters, privateRoutes };
