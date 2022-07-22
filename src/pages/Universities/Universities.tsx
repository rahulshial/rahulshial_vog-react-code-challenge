import React from 'react'
import { universities } from './data'
import DropDown from './components/Dropdown/DropDown';

import * as Styled from './Universities.styles';

const Universities = () => {
  return (
    <>
      <Styled.Header>
        <Styled.Title>Universities</Styled.Title>
        <DropDown />
      </Styled.Header>
    <Styled.Table>
      <Styled.TableHead>
        <Styled.TableRow>
          <Styled.TableHeader>Country</Styled.TableHeader>
          <Styled.TableHeader>Name</Styled.TableHeader>
          <Styled.TableHeader>Web Sites</Styled.TableHeader>
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
                      <a href={website}>
                        <h4>{website}</h4>
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