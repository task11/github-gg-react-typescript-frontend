import Icons from '../../../../components/Icons';

import {
  StyledButton,
  StyledCancel,
  StyledIcon,
  StyledIconButton,
  StyledInput,
  StyledInputButtonWrapper,
  StyledInputWithLabel,
  StyledInputWrapper,
  StyledSearchForm,
  StyledSearchInputWrapper,
} from './SearchForm.style';

interface Props {
  isSearching: boolean;
  searchQuery: string;
  handleSearchQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
  initSearchQuery: () => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchForm({
  isSearching,
  searchQuery,
  handleSearchQuery,
  initSearchQuery,
  handleSubmit,
  setIsFocus,
}: Props) {
  return (
    <StyledSearchForm onSubmit={handleSubmit}>
      <StyledSearchInputWrapper>
        <StyledInputButtonWrapper>
          <StyledInputWrapper>
            <StyledInputWithLabel>
              <div className="search-input-wrapper">
                <div className="input-wrapper">
                  {!isSearching && (
                    <label
                      htmlFor="search_bar_main"
                      className="icon-placeholder-wrapper"
                    >
                      <div className="icon-placeholder">
                        <div className="search-icon">
                          <Icons.Search />
                        </div>
                        <div className="search-placeholder">
                          Enter github user.
                        </div>
                      </div>
                    </label>
                  )}
                  <StyledInput
                    type="search"
                    id="search_bar_main"
                    autoComplete="off"
                    spellCheck="false"
                    maxLength={25}
                    value={searchQuery}
                    onChange={handleSearchQuery}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                  />
                  {searchQuery.length > 0 && (
                    <StyledCancel onClick={initSearchQuery}>
                      <Icons.Close />
                    </StyledCancel>
                  )}
                </div>
              </div>
            </StyledInputWithLabel>
          </StyledInputWrapper>
          <StyledButton type="submit">
            <StyledIconButton>Search button</StyledIconButton>
            <StyledIcon>
              <Icons.Branch />
            </StyledIcon>
          </StyledButton>
        </StyledInputButtonWrapper>
      </StyledSearchInputWrapper>
    </StyledSearchForm>
  );
}
