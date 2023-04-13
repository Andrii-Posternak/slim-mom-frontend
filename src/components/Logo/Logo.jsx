import { useMedia } from 'react-use';
import { Link } from 'react-router-dom';
import { routes } from 'utils/routes';
import style from './Logo.module.scss';
import logoMobile from '../../assets/images/logo/logoMobile.svg';
import logoTablet from '../../assets/images/logo/logoTablet.svg';
import logoDesktop from '../../assets/images/logo/logoDesktop.svg';

export const Logo = () => {
  const isMobile = useMedia('(max-width: 767px)');
  const isTablet = useMedia('(min-width: 768px) and (max-width: 1279px)');
  const isDesktop = useMedia('(min-width: 1280px)');

  const getLogo = () => {
    if (isMobile) {
      return logoMobile;
    } else if (isTablet) {
      return logoTablet;
    } else if (isDesktop) {
      return logoDesktop;
    }
  };
  const isAuth = true;
  return (
    <>
      <div className={style.wrapper}>
        <div>
          <Link to={isAuth ? routes.diary : routes.home}>
            <img src={getLogo()} alt="logo" />
          </Link>
        </div>
      </div>
      {isDesktop && <div className={style.line}></div>}
    </>
  );
};
