import styles from './CardList.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

import { FolderLink, FolderList, Link } from '../../types/type';

import Card from './Card';

interface Props {
  folderList?: FolderList[];
  folderInfo: FolderLink[] | Link[] | undefined;
  isIconVisible?: boolean;
}

const CardList = ({ folderList = [], folderInfo, isIconVisible = false }: Props) => {
  return (
    <div className={cn('cardlist')}>
      {folderInfo && folderInfo.length !== 0 ? (
        <>
          {folderInfo.map(card => (
            <Card card={card} folderList={folderList} key={card.id} isIconVisible={isIconVisible} />
          ))}
        </>
      ) : (
        <div className={cn('none-link')}>저장된 링크가 없습니다.</div>
      )}
    </div>
  );
};

export default CardList;
