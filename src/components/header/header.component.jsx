import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo.svg';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='option' to='/shop'>
            PARDUOTUVE
        </div>
        <div className='option' to='/shop'>
            KONTAKTAI
        </div>
    </div>
)

export default Header;