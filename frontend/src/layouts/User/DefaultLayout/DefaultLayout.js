import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';

function DefaultLayout({ children }) {
    return (
        <div className="main">
            <Header />
            <div className="">
                <div className="">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
