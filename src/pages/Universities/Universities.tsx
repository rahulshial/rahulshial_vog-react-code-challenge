import React, { useState } from 'react'
import { universities } from './data'
import DropDown from './components/Dropdown/DropDown';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import * as Styled from './Universities.styles';
import { useGetUniversitiesByCountryQuery } from '../../redux/api/universities.api';

const Universities = () => {
  const dispatch = useAppDispatch();
  const [selectedCountry, setSelectedCountry] = useState('Canada');
  const universitiesData = useAppSelector(state => state.universities);
  const { data } = useGetUniversitiesByCountryQuery(selectedCountry)

  return (
    <>
      <Styled.Header>
        <Styled.Title>Universities</Styled.Title>
        <DropDown setSelectedCountry={setSelectedCountry}/>
      </Styled.Header>
    <Styled.Table>
      <Styled.TableHead>
        <Styled.TableRow>
          <Styled.TableHeader>Country</Styled.TableHeader>
          <Styled.TableHeader>Name</Styled.TableHeader>
          <Styled.TableHeader>Web Sites</Styled.TableHeader>
          <Styled.TableHeader>Domains</Styled.TableHeader>
        </Styled.TableRow>
      </Styled.TableHead>
      <Styled.TableBody>
        {universities.map((university) => {
          return (
            <>
              <Styled.TableRow key={university.name}>
                <Styled.TableDetail>{university.country}</Styled.TableDetail>
                <Styled.TableDetail>{university.name}</Styled.TableDetail>
                <Styled.TableDetail>
                  {university.web_pages.map((website) => {
                    return (
                      <a key={website} href={website}>
                        <h4>{website}</h4>
                      </a>
                    )
                  })}
                </Styled.TableDetail>
                <Styled.TableDetail>
                  {university.domains.map((domain) => {
                    return (
                      <a key={domain} href={domain}>
                        <h4>{domain}</h4>
                      </a>
                    )
                  })}
                </Styled.TableDetail>
              </Styled.TableRow>
            </>
          )
          })}

      </Styled.TableBody>
    </Styled.Table>
    </>
  )
}

export default Universities