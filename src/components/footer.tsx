// import { Link } from 'react-router-dom';
import { iRouterItem } from '../interfaces/iRouterItem';
import './footer.module.css';

export function Footer() {
    return (
        <div className='footer'>
                        
            <div className='bot'>
                <p className='copy'>&copy; Pablo da Cunha</p>
                <p className='msg'>
                “Humankind was built on beer. From the world’s first writing to its first laws, in rituals social, religious, and political, civilization is soaked in beer.” - William Bostwick
                </p>
            </div>
        </div>
    );
}
