import {PROFILE_PAGE_PATH, CHART_PAGE_PATH, FEED_PAGE_PATH, MY_MUSIC_PAGE_PATH} from './paths';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import ChartPage from '../pages/ChartPage';
import FeedPage from '../pages/FeedPage';
import MyMusicPage from '../pages/MyMusicPage';
import type {IRoute} from '../types/IRoute';

export const ROUTES: IRoute[]= [
    {
        id: 'profile',
        path: PROFILE_PAGE_PATH,
        component: ProfilePage,
    },
    {
        id: 'chart',
        path: CHART_PAGE_PATH,
        component: ChartPage,
    },
    {
        id: 'feed',
        path: FEED_PAGE_PATH,
        component: FeedPage,
    },
    {
        id: 'my_music',
        path: MY_MUSIC_PAGE_PATH,
        component: MyMusicPage,
    },
]