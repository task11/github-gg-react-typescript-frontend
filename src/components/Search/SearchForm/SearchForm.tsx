import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { searchQueryAtom } from '../../../store';

import Icons from '../../Icons';
import useHandleSearch from '../../../utils/hooks/useHandleSearch';
import useSearchQuery from '../../../utils/hooks/useSearchQuery';

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
} from './styles';

export default function SearchForm() {
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryAtom);

  const { isSearching, setIsFocus, handleSearchQuery, initSearchQuery } =
    useSearchQuery();

  const { handleSubmit } = useHandleSearch();

  useEffect(() => {
    return () => {
      setSearchQuery('');
    };
  }, []);

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
