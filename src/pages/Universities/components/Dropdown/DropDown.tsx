import React, { useState, useEffect } from 'react'
import { useGetAllCountriesQuery } from '../../../../redux/api/countryList.api';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import * as Styled from './DropDown.styles';
import { setCountrylist } from '../../../../redux/reducers/countryList/countryList.reducer';
import { updateSelectedCountry } from '../../../../redux/reducers/ui.reducer';

const DropDown = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const countryListData = useAppSelector(state => state.countryList);
  const { data } = useGetAllCountriesQuery();

  useEffect(() => {
    if(data) {
      dispatch(setCountrylist(data));
    }
  }, [data, dispatch])
  
  const handleOnClick = (country: any) => {
    dispatch(updateSelectedCountry(country))
    setOpen(false)
  }

  return (
    <Styled.SearchCountryContainer>
      <Styled.SearchCountryButton
        onKeyPress={() => toggle()}
        onClick={() => toggle()}>Search Country</Styled.SearchCountryButton>
        {open && (<ul className="dd-list">
          <Styled.Div>
          {countryListData && countryListData.map(country => {
            return (
              <Styled.Country key={country.name.common} onClick={() => handleOnClick(country.name.common)}>{country.name.common}
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