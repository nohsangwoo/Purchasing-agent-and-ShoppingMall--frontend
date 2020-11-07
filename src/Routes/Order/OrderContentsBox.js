import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import InputTextArea from '../../Components/InputTextArea';
import 'rbx/index.css';
import { File, Field, Button } from 'rbx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { Country } from '../Help/emsData.json';
import {
  Title,
  ArountCountryName,
  ArountCountryNameInText,
  BoxFormDiv,
  BoxFormDivLabel,
  InputAroundStyled,
  InputStyled,
  OptionBlock,
  FormStyled,
  NoneArea,
} from './Component/OrderContainer_StyledComponents';

export default withRouter(
  ({
    setTitle,
    ProductNameInput,
    ProductURL,
    ProductOption,
    onSubmit,
    filename,
    handledFileOnChange,
    isSubmit,
    index,
    selectCountry,
  }) => {
    useEffect(() => {
      if (isSubmit === true) {
        document.getElementById(`btnSubmitId${index}`).click();
      }
    }, [index, isSubmit]);

    return (
      <>
        <Title>
          {setTitle === 'Online'
            ? 'Online Shopping agency'
            : setTitle === 'Offline'
            ? 'Offline Shopping agency'
            : 'Payment Agency'}
        </Title>
        <ArountCountryName>
          {!Array.isArray(Country['EMS'][selectCountry]) ? (
            <h2>{Country['EMS'][selectCountry]}</h2>
          ) : (
            Country['Parcel(Ship)'][selectCountry].map((m, index) => (
              <ArountCountryNameInText key={index}>
                {m} {' |'}{' '}
              </ArountCountryNameInText>
            ))
          )}
        </ArountCountryName>

        <BoxFormDiv name="signUp">
          <FormStyled id="submit" className="SubmitForm" onSubmit={onSubmit}>
            <InputAroundStyled>
              <BoxFormDivLabel> Name</BoxFormDivLabel>
              <InputStyled
                placeholder={'Product Name'}
                {...ProductNameInput}
                type="text"
              />
            </InputAroundStyled>

            <InputAroundStyled>
              <BoxFormDivLabel>URL</BoxFormDivLabel>
              <InputStyled
                required={false}
                placeholder={'https://...'}
                {...ProductURL}
                type="text"
              />
            </InputAroundStyled>

            <InputAroundStyled>
              <BoxFormDivLabel>Details</BoxFormDivLabel>
              <InputTextArea
                placeholder={'size, color, whatever...'}
                {...ProductOption}
                type="text"
                minRows={5}
              />
            </InputAroundStyled>

            <InputAroundStyled>
              <OptionBlock
                props={{ align: 'centered', boxed: true, hasName: true }}
              >
                <Field>
                  <File
                    align="centered"
                    size="small"
                    hasName
                    boxed
                    color="success"
                  >
                    <File.Label>
                      <File.Input
                        name="resume"
                        onChange={handledFileOnChange.bind(this)}
                      />
                      <File.CTA>
                        <File.Icon>
                          <FontAwesomeIcon icon={faUpload} />
                        </File.Icon>
                        <File.Label as="span">Upload Image</File.Label>
                      </File.CTA>
                      <File.Name>{filename}</File.Name>
                    </File.Label>
                  </File>
                </Field>
              </OptionBlock>
            </InputAroundStyled>
            <NoneArea>
              <Button id={`btnSubmitId${index}`}>Submit</Button>
            </NoneArea>
          </FormStyled>
        </BoxFormDiv>
      </>
    );
  }
);
