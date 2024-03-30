import styles from './Modal.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

import { MouseEventHandler, ReactNode, useEffect } from 'react';

import buttonClose from '../../../assets/icons/button-close.svg';
import ModalPortal from '../../../utils/Portal';

interface Props {
  role: string;
  children: ReactNode;
  onClose: MouseEventHandler<HTMLDivElement>;
}

const Modal = ({ role, children, onClose }: Props) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <ModalPortal>
      <div className={cn('modal-mask')} onClick={onClose}></div>
      <div className={cn('modal-container')} onClick={event => event.stopPropagation()}>
        <h2 className={cn('modal-title')}>{role}</h2>
        <a className={cn('modal-button-close')}>
          <img src={buttonClose} onClick={onClose} alt="닫기" />
        </a>
        {children}
      </div>
    </ModalPortal>
  );
};

export default Modal;
