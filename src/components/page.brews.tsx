
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { iBrew } from '../interfaces/iBrew';
// import { iStore } from '../store/store';
import './page.brews.module.css';

export function PageBrews({ brew }: { brew: iBrew }) {
    
    
    
    
    return (
        <>
        
        <h2>{brew.name}</h2> 
        <Link to={'/brews'} state={{ brew }}>
            
        </Link>
        

        </>
    );
}
