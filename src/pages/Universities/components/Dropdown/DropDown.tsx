/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useGetAllCountriesQuery } from '../../../../redux/api/countryList.api';
import { countryList } from '../../data';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import * as Styled from './DropDown.styles';
import { setCountrylist } from '../../../../redux/reducers/countryList/countryList.reducer';


const DropDown = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [localCountryList, setLocalCountryList] = useState([]);
  const [selection, setSelection] = useState('Canada');
  const toggle = () => setOpen(!open);
  const countryListData = useAppSelector(state => state.countryList);
  const { data } = useGetAllCountriesQuery();

  useEffect(() => {
    if(data) {
      dispatch(setCountrylist(data));
    }
  }, [data, dispatch])
  

  
  const handleOnClick = (countryName: string) => {
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