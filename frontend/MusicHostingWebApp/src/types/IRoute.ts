import type {FC} from 'react';

export interface IRoute {
    id: string,
    path: string,
    component: FC,
};
