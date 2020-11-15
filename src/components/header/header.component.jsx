import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import {auth} from '../../firebase/firebase.utils';

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <Link className='option' to='/shop'>
            PARDUOTUVE
        </Link>
        <Link className='option' to='/shop'>
            KONTAKTAI
        </Link>
        {
            currentUser ?
            <div className='option' onClick={() => auth.signOut()}>ATSIJUNGTI</div>
            : <Link className='option' to='/prisijungti'>PRISIJUNGTI</Link>
        }
    </div>
)

export default Header;