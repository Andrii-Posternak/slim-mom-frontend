import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMedia } from 'react-use';
import { useSelector } from 'react-redux';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross1 } from 'react-icons/rx';
import { selectAuthStatus } from 'redux/auth/authSlice';
import { routes } from 'utils/routes';
import { MenuModal } from 'components/MenuModal/MenuModal';
import style from './Navigation.module.scss';

const getActive = ({ isActive }) =>
  isActive ? `${style.active} ${style.link}` : style.link;

const getActiveReg = ({ isActive }) =>
  isActive ? `${style.activeReg} ${style.regLink}` : style.regLink;

export const Navigation = () => {
  const isAuth = useSelector(selectAuthStatus);
  const isTablet = useMedia('(max-width: 1279px)');

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const isToggle = () => {
    setIsBurgerMenuOpen(state => !state);
  };

  return (
    <nav className={style.nav}>
      {isAuth ? (
        isTablet ? (
          <button type="button" className={style.menu} onClick={isToggle}>
            {!isBurgerMenuOpen ? <RxHamburgerMenu /> : <RxCross1 />}
          </button>
        ) : (
          <>
            <ul className={style.list}>
              <li>
                <NavLink to={routes.diary} className={getActive}>
                  Diary
                </NavLink>
              </li>
              <li>
                <NavLink to={routes.calculator} className={getActive}>
                  Calculator
                </NavLink>
              </li>
            </ul>
          </>
        )
      ) : (
        <ul className={style.regList}>
          <li>
            <NavLink className={getActiveReg} to={routes.login}>
              Log in
            </NavLink>
          </li>
          <li>
            <NavLink className={getActiveReg} to={routes.register}>
              Registration
            </NavLink>
          </li>
        </ul>
      )}
      {isBurgerMenuOpen && (
        <MenuModal isActive={getActive} onClick={isToggle} />
      )}
    </nav>
  );
};
