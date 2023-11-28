// --------------------------------------------------------------
import { useEffect } from 'react';
// --------------------------------------------------------------
import { TabTitleHandle } from '~/utils/titleDocHandle';
// --------------------------------------------------------------

const ListCourses = () => {
    useEffect(() => {
        TabTitleHandle('list course');
    });
    return <div>List Courses Page</div>;
};

export default ListCourses;
