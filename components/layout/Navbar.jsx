import { faBars, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link href='/' passHref>
                    <span className="navbar-brand">
                        Ci-Commerce
                    </span>
                </Link>
                <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon className='navbar-toggler-icon' icon={faBars} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href='/' passHref>
                                <span className="nav-link active">
                                    Home
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/shop' passHref>
                                <span className="nav-link">
                                    Products
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">
                                My Account
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;