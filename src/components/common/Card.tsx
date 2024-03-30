import styles from './Card.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

import { createDate, intervalDate } from '../../utils/Date';
import { FolderLink, FolderList, Link } from '../../types/type';
import { useState } from 'react';
import { MODAL_ROLE } from '../../constants/constant';

import noneData from '../../assets/images/none-data.png';
import iconStar from '../../assets/icons/star-off.svg';
import iconKebab from '../../assets/icons/kebab.svg';

import CardPopover from '../FolderPage/CardPopover';
import ModalPortal from '../../utils/Portal';
import Modal from './modal/Modal';
import ModalDelete from './modal/ModalDelete';
import ModalAdd from './modal/ModalAdd';

interface Props {
  folderList: FolderList[];
  card: FolderLink | Link;
  isIconVisible: boolean;
}

const Card = ({ card, folderList, isIconVisible = true }: Props) => {
  const [popover, setPopover] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [role, setRole] = useState('');

  const { url, title, description, createdAt, imageSource } = card;
  const cardImage = imageSource ? imageSource : noneData;

  const handlePopover = () => {
    setPopover(!popover);
  };

  const handleClosePopover = () => {
    setPopover(false);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = noneData;
  };

  const handleOpenModal = (role: string) => {
    setOpenModal(true);
    setRole(role);
    setPopover(false);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      {openModal && (
        <ModalPortal>
          <Modal onClose={handleCloseModal} role={role}>
            {role === MODAL_ROLE.ADD && <ModalAdd folderList={folderList} />}
            {role === MODAL_ROLE.DELETE_LINK && <ModalDelete subTitle={url} />}
          </Modal>
        </ModalPortal>
      )}
      <div className={cn('card-container')}>
        {popover && <CardPopover onOpenModal={handleOpenModal} onClose={handleClosePopover} />}
        <div className={cn('card')}>
          {isIconVisible && (
            <>
              <img className={cn('star-icon')} src={iconStar} />
              <button className={cn('kebab-icon')} onClick={handlePopover}>
                <img src={iconKebab} />
              </button>
            </>
          )}
          <a href={url} target="_blank" rel="noreferrer">
            <div className={cn('card-image-content')}>
              <img
                className={cn('card-image')}
                src={cardImage}
                alt={title + '로 이동하기.'}
                onError={handleImageError}
              />
            </div>
            <div className={cn('card-content')}>
              <div className={cn('card-interval-date')}>{intervalDate(createdAt)}</div>
              <div className={cn('card-description')}>{description}</div>
              <div className={cn('card-create-date')}>{createDate(createdAt)}</div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
