import Icons from '../Icons';
import {
  StyledBackground,
  StyledClose,
  StyledContainer,
  StyledModalBlock,
  StyledModalContents,
} from './ModalFrame.style';

type Props = {
  handleModal: (e: React.MouseEvent<HTMLDivElement>) => void;
  state: boolean;
  children: React.ReactNode;
};

export default function ModalFrame({ handleModal, state, children }: Props) {
  return state ? (
    <StyledContainer>
      <StyledBackground onClick={(e) => handleModal(e)} />
      <StyledModalBlock>
        <StyledModalContents>{children}</StyledModalContents>
        <StyledClose onClick={(e) => handleModal(e)}>
          <Icons.Close />
        </StyledClose>
      </StyledModalBlock>
    </StyledContainer>
  ) : (
    <></>
  );
}
