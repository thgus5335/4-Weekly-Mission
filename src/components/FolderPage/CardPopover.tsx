import styles from './CardPopover.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

import { MouseEventHandler } from 'react';

interface Props {
  onOpenModal: (role: string) => void;
  onClose: MouseEventHandler<HTMLDivElement>;
}

const CardPopover = ({ onOpenModal, onClose }: Props) => {
  const ModalRole = {
    Add: '폴더에 추가',
    DeleteLink: '링크 삭제',
  };

  return (
    <>
      <div className={cn('card-popover')}>
        <div className={cn('card-popover-menu')} onClick={() => onOpenModal(ModalRole.DeleteLink)}>
          <p>삭제하기</p>
        </div>
        <div className={cn('card-popover-menu')} onClick={() => onOpenModal(ModalRole.Add)}>
          <p>폴더에 추가</p>
        </div>
      </div>
      <div className={cn('popover-mask')} onClick={onClose}></div>
    </>
  );
};

export default CardPopover;
