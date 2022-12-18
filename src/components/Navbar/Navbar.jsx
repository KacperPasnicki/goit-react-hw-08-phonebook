import {NavLink, Outlet}    from 'react-router-dom'
import { Suspense } from 'react'
// import {useAuth} from 'hooks;'
import css from './Navbar.module.css';

export const Navbar = () => {
  

return (

    <div >
        <header className={css.navBar}>
                <NavLink to='/' className="Link" onClick={() => window.scroll(0, 0)} end>
                    Home
                </NavLink>
                <NavLink to='/register' className="Link" onClick={() => window.scroll(0, 0)} end>
                    Register
                </NavLink>
                <NavLink to='/login' className="Link" onClick={() => window.scroll(0, 0)} end>
                    Log In
                </NavLink>

        </header>
        <Suspense fallback={<div>Loading...</div>}>
                 <Outlet /></Suspense>
    </div>
)

}
