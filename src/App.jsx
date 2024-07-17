import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './ui/Home'
import Error from './ui/Error'
import Menu, { loader as munuLoader } from './features/menu/Menu'
import CreateOrder, { action as createOrderAction } from './features/order/CreateOrder'
import Cart from './features/card/Cart'
import Order, { loader as orderLoader } from './features/order/Order'
import  { action as updateOrderAction } from './features/order/UpdateOrder'

import AppLayout from './ui/AppLayout';
const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/menu',
          element: <Menu />,
          loader: munuLoader,
          errorElement: <Error />,
        },
        {
          path: '/order/new',
          element: <CreateOrder />,
          action: createOrderAction,
        },
        {
          path: '/cart',
          element: <Cart />
        },
        {
          path: '/order/:orderId',
          element: <Order />,
          loader: orderLoader,
          errorElement: <Error />,
          action:updateOrderAction, 
        }
      ]
    }

  ]
)
function App() {
  return <RouterProvider router={router} />
}
export default App;
