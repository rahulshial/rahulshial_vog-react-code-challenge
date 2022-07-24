/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useGetAllCountriesQuery } from '../../../../redux/api/countryList.api';
import { countryList } from '../../data';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import * as Styled from './DropDown.styles';
import { setCountry, setCountrylist } from '../../../../redux/reducers/countryList/countryList.reducer';

interface Props {
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>
}
const DropDown = ({setSelectedCountry}: Props) => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState('Canada');
  const toggle = () => setOpen(!open);
  const countryListData = useAppSelector(state => state.countryList);
  const { data } = useGetAllCountriesQuery();

  useEffect(() => {
    if(data) {
      dispatch(setCountrylist(data));
    }
  }, [data, dispatch])
  
  const handleOnClick = (country: any) => {
    setSelectedCountry(country);
    // dispatch(setCountry(country))
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
              <Styled.Country key={country.name.common} onClick={() => handleOnClick(country)}>{country.name.common}
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