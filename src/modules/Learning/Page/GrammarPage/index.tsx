// --------------------------------------------------------------
import classNames from 'classnames/bind';
// --------------------------------------------------------------
import Styles from './main.module.scss';
import { LearnCard } from '../../components';
// --------------------------------------------------------------
const cx = classNames.bind(Styles);

const grammarCourses = [
    {
        title: 'Mới Bắt Đầu',
        img: 'https://www.voca.vn/assets/images/library/a0.svg',
        link: '',
    },
    {
        title: 'Sơ Cấp',
        img: 'https://www.voca.vn/assets/images/library/a1.svg',
        link: '',
    },
    {
        title: 'Tiền Trung Cấp',
        img: 'https://www.voca.vn/assets/images/library/a2.svg',
        link: '',
    },
    {
        title: 'Trung Cấp',
        img: 'https://www.voca.vn/assets/images/library/b1.svg',
        link: '',
    },
    {
        title: 'Cao Trung Cấp',
        img: 'https://www.voca.vn/assets/images/library/b2.svg',
        link: '',
    },
    {
        title: 'Cao Cấp',
        img: 'https://www.voca.vn/assets/images/library/c1.svg',
        link: '',
    },
    {
        title: 'Thành Thạo',
        img: 'https://www.voca.vn/assets/images/library/c2.svg',
        link: '',
    },
];

const GrammarPage = () => {
    return (
        <div className={`container ${cx('')}`}>
            <h1 className={` ${cx('heading')}`}>Ngữ Pháp</h1>
            <div className={`row ${cx('')}`}>
                {grammarCourses.map((item, index) => {
                    return (
                        <div className={`col-4 ${cx('card-box')}`}>
                            <LearnCard key={index} title={item.title} img={item.img} link={item.link} border={false} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default GrammarPage;
