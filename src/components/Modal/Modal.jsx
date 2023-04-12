import scss from './Modal.module.scss';
import { Button } from 'components/Button/Button';
import { GrClose } from 'react-icons/gr';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { createPortal } from 'react-dom';
// import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useWindowSize } from 'react-use';
const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, isModalOpen }) => {
  const { width } = useWindowSize();

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    const onModalClose = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onModalClose);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', onModalClose);
    };
  }, [onClose]);

  return createPortal(
    <>
      <div className={scss.overlay} onClick={handleBackdropClick}>
        {/* {error && <p> Oops, some error occured... Message: {error}</p>} */}
        {/* {isLoading === 'pending' ? (
          <Loader />
        ) : ( */}
        <div className={scss.modal}>
          {width < 768 ? (
            <div className={scss.btnContainer}>
              <BsArrowReturnLeft
                className={scss.icon}
                onClick={() => onClose()}
              />
            </div>
          ) : (
            <GrClose className={scss.closeIcon} onClick={() => onClose()} />
          )}

          <div className={scss.modalContainer}>
            <h2 className={scss.title}>
              Your recommended daily calorie intake is
            </h2>
            <div className={scss.caloriesContainer}>
              <span className={scss.calories}>
                {/* Replace */}
                2000
                <span className={scss.caloriesText}> ккал</span>
              </span>
            </div>
            <div className={scss.listCenter}>
              <h2 className={scss.secondaryTitle}>Foods you should not eat</h2>
              <ol className={scss.list}>
                {/* Replace */}
                <li className={scss.listItem}>Product 1</li>
                <li className={scss.listItem}>Product 2</li>
                <li className={scss.listItem}>Product 3</li>
                <li className={scss.listItem}>Product 4</li>
                <li className={scss.listItem}>Product 5</li>
                <li className={scss.listItem}>Product 6</li>
              </ol>
            </div>
          </div>
          <div className={scss.btnWrap}>
            <Button size={'large'} mainStyle={'active'} type={'button'}>
              {/* Replace */}
              Start losing weight
            </Button>
          </div>
        </div>
        {/* )} */}
      </div>
    </>,
    modalRoot
  );
};
