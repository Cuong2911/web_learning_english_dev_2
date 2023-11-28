// --------------------------------------------------------------
import { useEffect } from 'react';
// --------------------------------------------------------------
import { TabTitleHandle } from '~/utils/titleDocHandle';
// --------------------------------------------------------------

const LearningCourse = () => {
    useEffect(() => {
        TabTitleHandle('Learning');
    });
    return <div>Learning course Page</div>;
};

export default LearningCourse;
