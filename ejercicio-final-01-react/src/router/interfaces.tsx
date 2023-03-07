export interface Routes {
    root: string;
    list: string;
    detail: string;
};


export const switchRoutes: Routes = {
  root: "/",
  list: "/list",
  detail: "/detail/:id",
};

export const {root, list, detail} = switchRoutes;