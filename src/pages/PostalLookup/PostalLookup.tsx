import React from 'react';
import * as Styled from './PostalLookup.styles';

const data = {
  "post code": "90210",
  "country": "United States",
  "country abbreviation": "US",
  "places": [
      {
          "place name": "Beverly Hills",
          "longitude": "-118.4065",
          "state": "California",
          "state abbreviation": "CA",
          "latitude": "34.0901"
      }
  ]
};

const PostalLookup = () => {
  return (
    <>
      <Styled.Header>
        <Styled.AddPostButtonContainer>
          <Styled.AddPostButton onClick={() => console.log('Add Posts Clicked...')}>Postal Code Lookup</Styled.AddPostButton>
        </Styled.AddPostButtonContainer>
        <Styled.SearchBarContainer>
          <Styled.SearchFormContainer>
            <form>
              <Styled.Input placeholder="Search.." name="search"></Styled.Input>
              <Styled.SearchButton type="submit"><i className="fa fa-search"></i></Styled.SearchButton>
            </form>
          </Styled.SearchFormContainer>
        </Styled.SearchBarContainer>
      </Styled.Header>
        <Styled.DataContainer>
          <Styled.PostalCode>Postal Code: {data["post code"]}</Styled.PostalCode>
          <Styled.H6>Country: {data['country abbreviation']} - {data.country}</Styled.H6>
          <Styled.PlacesContainer>
            <Styled.PlacesTitleContainer>
              <Styled.H6>Place</Styled.H6>
            </Styled.PlacesTitleContainer>
            <Styled.PlacesDataContainer>
              <Styled.H6>{data.places[0]['place name']}, {data.places[0].state}, {data.places[0]['state abbreviation']}</Styled.H6>
              <Styled.H6></Styled.H6>
              <Styled.H6>Lat: {data.places[0].latitude}</Styled.H6>
              <Styled.H6>Lon: {data.places[0].longitude}</Styled.H6>
            </Styled.PlacesDataContainer>
          </Styled.PlacesContainer>
        </Styled.DataContainer>
    </>
  )
}

export default PostalLookup