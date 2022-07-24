import React, { useEffect, useState } from 'react';
import { useGetAreaDetailsByPostalCodeQuery } from '../../redux/api/postalLookup.api';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setAreaDetailsByPostalCode } from '../../redux/reducers/postalLookup/postalLookup.reducer';
import * as Styled from './PostalLookup.styles';

const PostalLookup = () => {
  const dispatch = useAppDispatch();
  const [searchCode, setSearchCode] = useState(0)

  const areaDetails = useAppSelector(state => state.postalLookup);
  const { data } = useGetAreaDetailsByPostalCodeQuery(searchCode);

  useEffect(() => {
    if(data && searchCode) {
      dispatch(setAreaDetailsByPostalCode(data))
    }
  }, [data, dispatch, searchCode])

  const handleSearchCodeChange = (event: any) => {
    setSearchCode(event.target.value);
  };

  return (
    <>
      <Styled.Header>
        <Styled.Title>Postal Code Lookup</Styled.Title>
        <Styled.SearchBarContainer>
          <Styled.SearchFormContainer>
            <form>
              <Styled.Input                     
                type="text"
                placeholder="Search.."
                name="searchCode"
                value={searchCode}
                onChange={handleSearchCodeChange}
              >
              </Styled.Input>
            </form>
          </Styled.SearchFormContainer>
        </Styled.SearchBarContainer>
      </Styled.Header>
      {areaDetails['post code'] && 
        (
        <>
          <Styled.DataContainer>
            <Styled.PostalCode>Postal Code: {areaDetails['post code']}</Styled.PostalCode>
            <Styled.H6>Country: {areaDetails['country abbreviation']} - {areaDetails.country}</Styled.H6>
            <Styled.PlacesContainer>
              <Styled.PlacesTitleContainer>
                <Styled.H6>Place</Styled.H6>
              </Styled.PlacesTitleContainer>
              <Styled.PlacesDataContainer>
                <Styled.H6>{areaDetails.places[0]['place name']}, {areaDetails.places[0].state}, {areaDetails.places[0]['state abbreviation']}</Styled.H6>
                <Styled.H6></Styled.H6>
                <Styled.H6>Lat: {areaDetails.places[0].latitude}</Styled.H6>
                <Styled.H6>Lon: {areaDetails.places[0].longitude}</Styled.H6>
              </Styled.PlacesDataContainer>
            </Styled.PlacesContainer>
          </Styled.DataContainer>
        </>
      )
    }
    </>
  )
}

export default PostalLookup