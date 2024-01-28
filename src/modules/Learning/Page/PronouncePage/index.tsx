// --------------------------------------------------------------
import classNames from 'classnames/bind';
// --------------------------------------------------------------
import Styles from './main.module.scss';
import { useState } from 'react';
// --------------------------------------------------------------
const cx = classNames.bind(Styles);

interface iListVideo {
    title: string;
    link: string;
}
const listVideo: Array<iListVideo> = [
    {
        title: 'English Pronunciation Training | Improve Your Accent & Speak Clearly',
        link: 'https://www.youtube.com/embed/n4NVPg2kHv4',
    },
    {
        title: 'English Imitation Lessons | Speak More Clearly & Confidently',
        link: 'https://www.youtube.com/embed/dZGf8JY5_ck?list=RDCMUCrRiVfHqBIIvSgKmgnSY66g',
    },
    {
        title: 'Advanced speaking practice: English Imitation Lesson',
        link: 'https://www.youtube.com/embed/FfhZFRvmaVY?list=RDCMUCrRiVfHqBIIvSgKmgnSY66g',
    },
    {
        title: 'Learn All English Sounds & Pronounce Words Perfectly with the IPA!',
        link: 'https://www.youtube.com/embed/Ft17a7tyjMM?list=RDCMUCrRiVfHqBIIvSgKmgnSY66g',
    },
    {
        title: 'Làm thế nào để có được ngữ điệu Tiếng Anh như người bản xứ ? Luyện phát âm mỗi ngày!',
        link: 'https://www.youtube.com/embed/-P-5RC17BHw?list=RDCMUCrRiVfHqBIIvSgKmgnSY66g',
    },
];

const PronouncePage = () => {
    const [video, setVideo] = useState(listVideo[0]);
    return (
        <div className={`container ${cx('wrap')}`}>
            <h1 className={` ${cx('heading')}`}>Phát Âm</h1>
            <div className={`row ${cx('content')}`}>
                <ul className={`col-3 ${cx('list')}`}>
                    {listVideo.map((item, index) => {
                        return (
                            <li
                                className={`${video.title === item.title ? cx('active') : ''}`}
                                onClick={() => setVideo(item)}
                            >
                                Bài phát âm {index + 1}: {item.title}
                            </li>
                        );
                    })}
                </ul>
                <div className={`col-9 ${cx('video-wrap')}`}>
                    <iframe
                        className={` ${cx('video')}`}
                        src={video.link}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <span>{video.title}</span>
                </div>
            </div>
        </div>
    );
};

export default PronouncePage;
