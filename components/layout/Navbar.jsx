import { faBars, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                                <span className="nav-link">
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
                        <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    My Account
                                </span>
                                <ul className='dropdown-menu'>
                                    <li>
                                        <Link className="dropdown-item" href='/my-orders'>My Orders</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href='/cart'>Cart</Link>
                                    </li>
                                    <li>
                                        <hr className='dropdown-divider' />
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href='/profile'>Profile</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href='/shipping'>Shipping and Tracking</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href='/logout' passHref>
                                            <FontAwesomeIcon className='mx-2' icon={faLock} />
                                        </Link>
                                    </li>
                                </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;