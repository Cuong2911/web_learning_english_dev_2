// --------------------------------------------------------------
import classNames from 'classnames/bind';
// --------------------------------------------------------------
import Styles from './main.module.scss';
import { LearnCard } from '../../components';
// --------------------------------------------------------------
const cx = classNames.bind(Styles);

const vocaCourses = [
    {
        title: 'Daily News',
        img: 'https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_300,h_300,dpr_1/https://assets.app.engoo.com/images/wpShaNew2xW3xwgNYFMTtcrJghq6zhWV40kte3cxMtf.png',
        link: '',
    },
    {
        title: 'Conversation',
        img: 'https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_300,h_300,dpr_1/https://assets.app.engoo.com/images/EpsB8OMwLslM7jw5Bu0QO7Y5BCYF0rsFG0l4SJRKegl.png',
        link: '',
    },
    {
        title: 'Travel & Culture',
        img: 'https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_300,h_300,dpr_1/https://assets.app.engoo.com/images/cz9DT8TAlNMvxjiWZstZ6uz6k5xYwImFxEHJkkie9Wv.png',
        link: '',
    },
    {
        title: 'Business',
        img: 'https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_300,h_300,dpr_1/https://assets.app.engoo.com/images/Qm6o5eedid9w3WniHLVn0oVe1IMy5XCgAh5NxS3Ss8G.png',
        link: '',
    },
    {
        title: 'Health & Lifestyle',
        img: 'https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_300,h_300,dpr_1/https://assets.app.engoo.com/images/SX40cap5bvPvcFkHzKBXTdVkAISZKF16cMl3AAAy8a3.png',
        link: '',
    },
    {
        title: 'English for Kids',
        img: 'https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_300,h_300,dpr_1/https://assets.app.engoo.com/images/M668ENKzTlSk2WeJv3uFT5mlYgczRzzdscyNChpb35X.png',
        link: '',
    },
];

const VocaPage = () => {
    return (
        <div className={`container ${cx('')}`}>
            <h1 className={` ${cx('heading')}`}>Từ Vựng</h1>
            <div className={`row ${cx('')}`}>
                {vocaCourses.map((item, index) => {
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

export default VocaPage;
