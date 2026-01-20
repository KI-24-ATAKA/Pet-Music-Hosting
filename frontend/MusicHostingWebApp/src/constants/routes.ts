import {PROFILE_PAGE_PATH, CHART_PAGE_PATH, FEED_PAGE_PATH, MY_MUSIC_PAGE_PATH} from './paths';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import type {IRoute} from '../types/IRoute';

export const ROUTES: IRoute[]= [
    {
        id: 'profile',
        path: PROFILE_PAGE_PATH,
        component: ProfilePage,
    },
]