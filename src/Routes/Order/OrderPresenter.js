import React, { useState, useEffect } from 'react';
import useInput from '../../Hooks/useInput';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@material-ui/core';
import { toast } from 'react-toastify';
import OrderContentsBox from './OrderContentsBox';
import { useMutation } from '@apollo/react-hooks';
import { OrderContentDetail } from './OrderQueries';
import { Menu, MenuItem } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';
import {
  BoxWrapper,
  DropDownStyled,
  DropDownTitleWrapper,
  DropDownListText,
  CountBTNWarpper,
  BTNWrapper,
  SelectService,
  AlignDiv,
} from './Component/OrderContainer_StyledComponents';

function confirmFileExtension(file) {
  var reg = /(.*?)\.(jpg|jpeg|png|gif|bmp|heic|svg)$/;

  if (file.match(reg)) {
    return true;
  } else {
    return false;
  }
}

function refreshPage() {
  window.location = '/';
}

export default withRouter(
  ({
    match: {
      params: { username },
    },
    index,
    option,
    setOption,
    isSubmit,
    setIsSubmit,
    orderContentId,
    setOrderContentId,
    setState,
    nameInputValue,
    setNameInputValue,
    optionInputValue,
    setOptionInputValue,
    imageFileCheck,
    setImageFileCheck,
    selectCountry,
    check_Two,
    setCheck_Two,
  }) => {
    const ProductNameInput = useInput('');
    const ProductURL = useInput('');
    const ProductOption = useInput('');
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('');
    const [fileurl, setFileurl] = useState('');
    const [anchorSTEl, setAnchorSTEl] = useState(null);

    const [createOrderContentDetail] = useMutation(OrderContentDetail, {
      variables: {
        OrderContent: orderContentId,
        serviceType: option[index],
        productName: ProductNameInput.value,
        productURL: ProductURL.value,
        productOption: ProductOption.value,
        fileImageURL: fileurl,
      },
    });

    const handleSTClick = (event) => {
      setAnchorSTEl(event.currentTarget);
    };

    const handleSTClose = () => {
      setAnchorSTEl(null);
    };

    const onSubmit = async (e) => {
      e.preventDefault();
    };

    function handledFileOnChange(e) {
      try {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
      } catch (e) {
        setFile('');
        setFilename('');
      }
    }

    const countPlus = async (e) => {
      e.preventDefault();

      setOption([...option, 'Online']);
    };

    const countMinus = async (e) => {
      e.preventDefault();

      if (option.length < 2) {
        return;
      } else {
        var optionValue = [...option];
        optionValue.splice(index, 1);
        setOption([...optionValue]);
      }
    };

    useEffect(() => {
      if (orderContentId !== '' && isSubmit === true) {
        async function checkFunction() {
          const setValues = () => {
            ProductNameInput.setValue('');
            ProductURL.setValue('');
            ProductOption.setValue('');
            setFile('');
            setFilename('');
            setFileurl('');
            setOption(['Online']);
            setOrderContentId('');
            setIsSubmit(false);
            setCheck_Two(null);
          };
          const isImage = confirmFileExtension(filename);

          if (ProductNameInput.value !== '' && ProductOption.value !== '') {
            try {
              const formData = new FormData();
              formData.append('file', file);
              if (file !== '') {
                if (isImage !== true) {
                  setFilename('');
                  setFileurl('');
                  return;
                }

                await axios
                  .post('http://localhost:4000/api/upload', formData, {
                    headers: {
                      'content-type': 'multipart/form-data',
                    },
                  })
                  .then((res) => {
                    setFileurl(res?.data?.location);
                  })
                  .catch((err) => {
                    setFileurl('');
                  });
              }

              const check = await createOrderContentDetail();

              setValues();

              if (check?.data?.createOrderContentDetail === true) {
                toast.success('Thank you. we will be in touch with you soon.');
                setValues();
                setTimeout(refreshPage, 3000);
              }
            } catch (e) {
              console.log(e);
            }
          } else {
          }
        }
        checkFunction();
        setIsSubmit(false);
      }

      const setInputValue = () => {
        let tempNameInputValue = nameInputValue;

        if (ProductNameInput.value !== '') {
          tempNameInputValue.splice(index, 1, true);
        } else {
          tempNameInputValue.splice(index, 1, false);
        }
        setNameInputValue(tempNameInputValue);

        let tempOptionInputValue = optionInputValue;
        if (ProductOption.value !== '') {
          tempOptionInputValue.splice(index, 1, true);
        } else {
          tempOptionInputValue.splice(index, 1, false);
        }
        setOptionInputValue(tempOptionInputValue);

        let tempImageFileCheck = imageFileCheck;
        if (filename !== '') {
          if (confirmFileExtension(filename)) {
            tempImageFileCheck.splice(index, 1, true);
          } else {
            tempImageFileCheck.splice(index, 1, false);
          }
        } else {
          tempImageFileCheck.splice(index, 1, true);
        }
        setImageFileCheck(tempImageFileCheck);
      };
      return setInputValue();
    }, [
      ProductNameInput,
      ProductNameInput.value,
      ProductOption,
      ProductOption.value,
      ProductURL,
      check_Two,
      createOrderContentDetail,
      file,
      filename,
      imageFileCheck,
      index,
      isSubmit,
      nameInputValue,
      optionInputValue,
      orderContentId,
      setCheck_Two,
      setImageFileCheck,
      setIsSubmit,
      setNameInputValue,
      setOption,
      setOptionInputValue,
      setOrderContentId,
      setState,
    ]);

    const serviceTypeList = ['Online', 'Offline', 'Payment'];

    return (
      <BoxWrapper>
        <SelectService>
          <DropDownStyled>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleSTClick}
            >
              <DropDownTitleWrapper>
                <DropDownListText>{option[index]}</DropDownListText>
                <ExpandMoreIcon />
              </DropDownTitleWrapper>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorSTEl}
              keepMounted
              open={Boolean(anchorSTEl)}
              onClose={handleSTClose}
            >
              {serviceTypeList.map((CN, i) => (
                <MenuItem
                  key={i}
                  onClick={() => {
                    let optitonValue = option;
                    optitonValue[index] = `${
                      i === 0 ? 'Online' : i === 1 ? 'Offline' : 'Payment'
                    }`;

                    handleSTClose();
                    return setOption([...optitonValue]);
                  }}
                >
                  <DropDownListText>{CN}</DropDownListText>
                </MenuItem>
              ))}
            </Menu>
          </DropDownStyled>
        </SelectService>

        <OrderContentsBox
          username={username}
          filename={filename}
          ProductNameInput={ProductNameInput}
          ProductURL={ProductURL}
          ProductOption={ProductOption}
          onSubmit={onSubmit}
          handledFileOnChange={handledFileOnChange}
          isSubmit={isSubmit}
          setIsSubmit={setIsSubmit}
          option={option}
          setOption={setOption}
          index={index}
          setOrderContentId={setOrderContentId}
          setTitle={option[index]}
          selectCountry={selectCountry}
        />
        <CountBTNWarpper>
          <BTNWrapper onClick={countMinus}>
            <FontAwesomeIcon icon={faMinus} />
          </BTNWrapper>
          <BTNWrapper onClick={countPlus}>
            <FontAwesomeIcon icon={faPlus} />
          </BTNWrapper>
        </CountBTNWarpper>
        <AlignDiv>{index + 1}</AlignDiv>
      </BoxWrapper>
    );
  }
);
