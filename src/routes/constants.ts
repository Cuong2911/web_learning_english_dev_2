interface IpublicRoutes {
    path: string;
    component: (props: any) => JSX.Element;
    layout: (props: { children: JSX.Element | JSX.Element[] }) => JSX.Element;
    props: Object;
}
interface IprivateRoutes {}

export type { IpublicRoutes, IprivateRoutes };
