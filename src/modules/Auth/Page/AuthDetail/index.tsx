// --------------------------------------------------------------
import classNames from 'classnames/bind';
// --------------------------------------------------------------
import Styles from './main.module.scss';
// --------------------------------------------------------------
const cx = classNames.bind(Styles);

const AuthDetail = () => {
    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className={`${cx('wrap')}`}>
                        <div className="row g-0">
                            <div className={`col-md-4 gradient-custom text-center text-white ${cx('avatar-box')}`}>
                                <img
                                    src="https://i.pinimg.com/564x/a1/ae/ff/a1aeff688cc6ad5ae43c9a9fa5a1a531.jpg"
                                    alt="Avatar"
                                    className={`img-fluid my-5 ${cx('avatar')}`}
                                />
                                <h5 className={`${cx('avatar-name')}`}>Profile</h5>
                                <p className={`${cx('avatar-desc')}`}>@Cuong2911</p>
                                <i className="far fa-edit mb-5"></i>
                            </div>
                            <div className="col-md-8">
                                <div className={`card-body p-4 ${cx('profile-detail')}`}>
                                    <h6 className={`${cx('head')}`}>Thông tin</h6>
                                    <hr className="mt-0 mb-4" />
                                    <div className="row pt-1">
                                        <div className="col-6 mb-3">
                                            <h6>Email</h6>
                                            <p className="text-muted">hvcuong29112001@gmail.com</p>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <h6>Phone</h6>
                                            <p className="text-muted">0335077681</p>
                                        </div>
                                    </div>
                                    <hr className="mt-0 mb-4" />
                                    <div className="row pt-1">
                                        <div className="col-6 mb-3">
                                            <h6>Họ</h6>
                                            <p className="text-muted">Hoang Van</p>
                                        </div>
                                        <div className="col-6 mb-3">
                                            <h6>Tên</h6>
                                            <p className="text-muted">Cuong</p>
                                        </div>
                                    </div>
                                    <hr className="mt-0 mb-4" />
                                    <div className="row pt-1">
                                        <div className="col-12 mb-3">
                                            <h6>Địa Chỉ</h6>
                                            <p className="text-muted">Hòa Sơn, Hiệp Hòa, Bắc Giang</p>
                                        </div>
                                    </div>
                                    <hr className="mt-0 mb-4" />
                                    <div className="row pt-1">
                                        <div className="col-12 mb-3">
                                            <h6>Học vấn</h6>
                                            <p className="text-muted">Đại Học Kinh Tế Quốc Dân</p>
                                        </div>
                                    </div>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => {
                                            alert('Thay đổi thành công');
                                        }}
                                    >
                                        Lưu Thay Đổi
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuthDetail;
