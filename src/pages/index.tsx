import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes, routesEnum } from './types';
import PrivateRoute from './PrivateRoute';
import { OfferType } from '../shared/interface';

interface IAppRouterProps {
  offersMockData: OfferType[];
}
const AppRouter: FC<IAppRouterProps> = (props: IAppRouterProps) => (
  <Routes>
    {publicRoutes.map((myRoute) => <Route key={myRoute.path} element={<myRoute.Component {...props}/>} path={myRoute.path} />)}
    {privateRoutes.map((myRoute) =>(
      <Route key={myRoute.path} path={myRoute.path}
        element={<PrivateRoute key={myRoute.path}>{<myRoute.Component {...props}/>}</PrivateRoute>}
      />
    )
    )}
    <Route path="*" element={<Navigate to={routesEnum.NOT_FOUND} />} />
  </Routes>);

export default AppRouter;
