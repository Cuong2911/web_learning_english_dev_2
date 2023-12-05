interface IRoutes {
    path: string;
    component: (props: any) => JSX.Element;
    layout: (props: { children: JSX.Element | JSX.Element[] }) => JSX.Element;
    props: Object;
    isPrivate: boolean;
}

export type { IRoutes };
