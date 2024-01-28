// --------------------------------------------------------------
import classNames from 'classnames/bind';
// --------------------------------------------------------------
import Styles from './main.module.scss';
import { LearnCard } from '../../components';
// --------------------------------------------------------------
const cx = classNames.bind(Styles);

const listenCourses = [
    {
        title: 'Văn Phòng',
        img: 'https://www.voca.vn/assets/images/library/work.svg',
        link: '',
    },
    {
        title: 'Giao Tiếp',
        img: 'https://www.voca.vn/assets/images/library/communicative.svg',
        link: '',
    },
    {
        title: 'TOEIC',
        img: 'https://www.voca.vn/assets/images/library/toeic.svg',
        link: '',
    },
    {
        title: 'IELTS',
        img: 'https://www.voca.vn/assets/images/library/ielts.svg',
        link: '',
    },
    {
        title: 'Thương Mại',
        img: 'https://www.voca.vn/assets/images/library/commercial.svg',
        link: '',
    },
    {
        title: 'Học Sinh',
        img: 'https://www.voca.vn/assets/images/library/student.svg',
        link: '',
    },
    {
        title: 'Du Lịch',
        img: 'https://www.voca.vn/assets/images/library/travel.svg',
        link: '',
    },
    {
        title: 'Âm Nhạc',
        img: 'https://www.voca.vn/assets/images/library/music.svg',
        link: '',
    },
    {
        title: 'Văn Học',
        img: 'https://www.voca.vn/assets/images/library/grammar.svg',
        link: '',
    },
];

const ListenPage = () => {
    return (
        <div className={`container ${cx('')}`}>
            <h1 className={` ${cx('heading')}`}>Bài Nghe</h1>
            <div className={`row ${cx('')}`}>
                {listenCourses.map((item, index) => {
                    return (
                        <div className={`col-3 ${cx('card-box')}`}>
                            <LearnCard key={index} title={item.title} img={item.img} link={item.link} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ListenPage;
