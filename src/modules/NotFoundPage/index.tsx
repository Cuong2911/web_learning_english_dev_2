// --------------------------------------------------------------
import { useEffect } from 'react';
// --------------------------------------------------------------
import { TabTitleHandle } from '~/utils/titleDocHandle';
// --------------------------------------------------------------

const NotFoundPage = () => {
    useEffect(() => {
        TabTitleHandle('404 error');
    });
    return <div>Not found pages 404</div>;
};

export default NotFoundPage;
