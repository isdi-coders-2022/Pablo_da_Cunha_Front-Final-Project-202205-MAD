import { Link } from 'react-router-dom';
import { iBar } from '../interfaces/iBar';
import './page.bars.module.css';

export function PageBars({ bar }: { bar: iBar }) {
    
       
    return (
        <>
                
        <Link to={'/bars'} state={{ bar }}>
            
        </Link>
        

        </>
    );
}
