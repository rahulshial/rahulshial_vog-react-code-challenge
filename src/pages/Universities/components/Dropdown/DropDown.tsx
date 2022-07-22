import React, { useState } from 'react'
import { countryList } from '../../data';
import * as Styled from './DropDown.styles';

const DropDown = () => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState('Canada');
  const toggle = () => setOpen(!open);
  
  function handleOnClick(countryName: string) {
    setSelection(countryName);
    setOpen(false)
  }

  return (
    <Styled.SearchCountryContainer>
      <Styled.SearchCountryButton
        onKeyPress={() => toggle()}
        onClick={() => toggle()}>Search Country</Styled.SearchCountryButton>
        {open && (<ul className="dd-list">
          <Styled.Div>
          {countryList.map(country => {
            return (
              <Styled.Country  onClick={() => handleOnClick(country.name.common)}>{country.name.common}
              </Styled.Country>
            )
          })}
          </Styled.Div>
      </ul>
       )}
    </Styled.SearchCountryContainer>
    )
}

export default DropDown;