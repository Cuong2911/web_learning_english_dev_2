// ------------------------------------------------------------------------
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
// ------------------------------------------------------------------------
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { ROUTES } from '~/configs/routes';
// ------------------------------------------------------------------------
const cx = classNames.bind(styles);
// ------------------------------------------------------------------------

const Footer = () => {
    return (
        <footer className={`${cx('footer')}`}>
            <div className={`container`}>
                {/* footer head  */}
                <div className={`row`}>
                    <div className={`col-12 display-center ${cx('footer-start')}`}>
                        <h4 className={`me-3`}>Học tiếng Anh Ngay Lúc Này! </h4>
                        <button type="button" className={`btn btn-dark`}>
                            <a href={ROUTES.login}>Bắt đầu</a>
                        </button>
                    </div>
                </div>
                {/* footer body  */}
                <div className={`row ${cx('footer-body')}`}>
                    <div className={`col-6 display-left`}>
                        <ul className={`${cx('footer-body-contact-list')}`}>
                            <li className={`${cx('footer-body-contact-item')}`}>
                                <a
                                    className={`display-left ${cx('footer-body-contact-link')}`}
                                    href="https://www.google.com/maps/d/u/0/viewer?mid=1_ilgwk72A5kCPDKkkBQFtGQBiu8&hl=en&ll=21.00481002515562%2C105.84479649999999&z=16"
                                >
                                    <FaLocationDot size={24} />
                                    <span>1 Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội</span>
                                </a>
                            </li>
                            <li className={`display-left ${cx('footer-body-contact-item')}`}>
                                <a
                                    className={`display-left ${cx('footer-body-contact-link')}`}
                                    href="https://www.facebook.com/profile.php?id=100006065266848"
                                >
                                    <FaPhone size={24} />
                                    <span>(+84) 688 688 688</span>
                                </a>
                            </li>
                            <li className={`display-left ${cx('footer-body-contact-item')}`}>
                                <a
                                    className={`display-left ${cx('footer-body-contact-link')}`}
                                    href="https://www.facebook.com/profile.php?id=100006065266848"
                                >
                                    <div className={`${cx('icon')}`}>
                                        <BiLogoGmail size={24} />
                                    </div>
                                    <span>Nguyendung@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={`col-6 ${cx('footer-body-about')}`}>
                        <h1>Website Learning English là gì?</h1>
                        <p>
                            Website Learning English là một website chuyên về học tiếng anh dành cho mọi lứa tuổi. Chúng
                            tôi cung cấp các bài học, bài tập, môi trường học tập hoàn toàn miễn phí và tạo ra một cộng
                            đồng về học tiếng anh dành cho người Việt Nam.
                        </p>
                        <div className={`${cx('footer-body-social')}`}>
                            <a href="https://www.facebook.com/profile.php?id=100006065266848">
                                <FaFacebookSquare size={32} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100006065266848">
                                <FaTwitterSquare size={32} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100006065266848">
                                <FaInstagramSquare size={32} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100006065266848">
                                <FaLinkedin size={32} />
                            </a>
                        </div>
                    </div>
                </div>
                {/* footer end  */}
                <div className={`row`}>
                    <div className={`col-12 display-center ${cx('footer-end')}`}>Bản quyền thuộc @Nguyễn Dũng</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
