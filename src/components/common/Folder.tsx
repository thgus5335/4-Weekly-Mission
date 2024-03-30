import styles from './Folder.module.css';
import classNames from 'classnames/bind';
const cn = classNames.bind(styles);

import { FolderList } from '../../types/type';

interface Props {
  folder: FolderList;
  isSelected: boolean;
  onClickFolder: (id: string, name: string) => void;
}

const Folder = ({ folder, isSelected, onClickFolder }: Props) => {
  const { name } = folder;
  return (
    <a className={cn('folder', isSelected ? 'folder-selected' : '')} onClick={() => onClickFolder}>
      {name}
    </a>
  );
};

export default Folder;
