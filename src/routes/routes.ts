
import { Home, Profile, Collectibles, QRCode, Create, Get } from './'

const routes = [
    {
      key: 'home',
      path: "/",
      exact: true,
      component: Home
    },
    {
      key: 'profile',
      path: "/profile",
      component: Profile
    },
    {
      key: 'collectibles',
      path: "/collectibles",
      component: Collectibles
    },
    {
      key: 'qrcode',
      path: "/qrcode/:id",
      exact: true,
      component: QRCode
    },
    {
      key: 'create',
      path: "/create",
      component: Create
    },
    {
      key: 'get',
      path: "/qrcode/get/:id",
      exact: true,
      component: Get
    }
];

export default routes