import Home from './page/Home/Home'
import Shop from './page/Shop/Shop'
import Account from './page/Account/Account'
import Contact from './page/Contact/Contact'
import Basket from './page/Basket/Basket'
import LoginSingin from './page/LoginSingin/LoginSingin'
import AboutUs from './page/AboutUs/AboutUs'
import Product from './components/Product/Product'

let routes = [
    {path: '/' , element: <Home/>},
    {path: '/Shop' , element: <Shop/>},
    {path: '/Account' , element: <Account/>},
    {path: '/LoginSingin' , element: <LoginSingin/>},
    {path: '/Basket' , element: <Basket/>},
    {path: '/Contact' , element: <Contact/>},
    {path: '/AboutUs' , element: <AboutUs/>},
    {path: '/Product/:id' , element: <Product/>, },
]


export {routes}