// --------------------------------------------------------------
import { useEffect } from 'react';
// --------------------------------------------------------------
import { TabTitleHandle } from '~/utils/titleDocHandle';
// --------------------------------------------------------------

const InforCourse = () => {
    useEffect(() => {
        TabTitleHandle('coures info');
    });
    return <div>Information course Page</div>;
};

export default InforCourse;
