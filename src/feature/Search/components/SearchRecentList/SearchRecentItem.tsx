import { StyledRecentItem } from './SearchRecentList.style';

interface Props {
  onSearchQuery: (query: string) => void;
}

export default function SearchRecentItem({ onSearchQuery }: Props) {
  return (
    <StyledRecentItem onMouseDown={() => onSearchQuery('task2')}>
      task2
    </StyledRecentItem>
  );
}
