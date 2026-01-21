import type {IRoute} from '../../types/IRoute';
import {Routes, Route} from 'react-router-dom';

import './Router.scss';

interface IRouterProps {
    routes: IRoute[],
}

function Router(props: IRouterProps) {
    return (
        <div className='Router'>
            <Routes>
                {props.routes.map((route) => {
                    return <Route
                        key={route.id}
                        path={route.path}
                        element={<route.component />}
                    />
                })}
            </Routes>
        </div>
    );
};

export default Router;
