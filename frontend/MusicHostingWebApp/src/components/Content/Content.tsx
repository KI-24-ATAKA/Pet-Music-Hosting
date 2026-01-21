import Router from '../../components/Router';
import {ROUTES} from '../../constants/routes';

import './Content.scss';

function Content() {
    return(
        <div className='Content'>
           <Router routes={ROUTES} />
        </div>
    );
};

export default Content;
