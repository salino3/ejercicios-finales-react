interface Routes {
 root: string;
 shop: string;
 form: string;
 info: string;
 orders: string;
};


export const SwitchRouter: Routes = {
 root: "/",
 shop: "/shop",
 form: '/form',
 info: "/info/:id",
 orders: '/orders'

};

export const { root, shop, form, info, orders } = SwitchRouter;