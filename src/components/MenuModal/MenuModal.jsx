import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { routes } from 'utils/routes';
import style from './MenuModal.module.scss';

export const MenuModal = memo(({ isActive, onClick }) => {
  return (
    <>
      <div className={style.modal}>
        <ul className={style.list}>
          <li>
            <NavLink to={routes.diary} onClick={onClick} className={isActive}>
              Diary
            </NavLink>
          </li>
          <li>
            <NavLink
              to={routes.calculator}
              onClick={onClick}
              className={isActive}
            >
              Calculator
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
});

MenuModal.propTypes = {
  isActive: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
