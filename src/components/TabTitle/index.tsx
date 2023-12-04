// ------------------------------------------------------------------------
import { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PATH } from '~/configs/routes';
// ------------------------------------------------------------------------
import { TabTitleHandle } from '~/utils/titleDocHandle';
// ------------------------------------------------------------------------
type Props = {
    children: string | JSX.Element | JSX.Element[];
};
// ------------------------------------------------------------------------

const TabTitle = (props: Props) => {
    const { children } = props;
    const pathCurrent = useLocation().pathname;
    const path = pathCurrent.indexOf('/', 1) > 0 ? pathCurrent.slice(0, pathCurrent.indexOf('/', 1)) : pathCurrent;
    useEffect(() => {
        const result = (Object.keys(PATH) as (keyof typeof PATH)[]).find((key) => {
            return PATH[key] === path;
        });

        TabTitleHandle(result);
    });

    return <Fragment>{children}</Fragment>;
};

export default TabTitle;
// ------------------------------------------------------------------------
