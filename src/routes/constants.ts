interface IpublicRoutes {
    path: string;
    component: (props: any) => JSX.Element;
    props: Object;
}
interface IprivateRoutes {}

export type { IpublicRoutes, IprivateRoutes };
