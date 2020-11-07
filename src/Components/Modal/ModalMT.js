import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styled from 'styled-components';
import CalculatorPriceResultTable from '../../Routes/Calculator/CalculatorPriceResultTable';
import PaypalButton from '../PaypalButton';
import useInput from '../../Hooks/useInput';
import Input from '../InputForModal';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { toast } from 'react-toastify';

export const CREATE_ADDRESS = gql`
  mutation createAddress($address: String!, $post: String!) {
    createAddress(address: $address, post: $post) {
      id
    }
  }
`;

const Containerstyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MarginDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 60px;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const ModalStyled = styled(Modal)`
  margin-top: 0 auto;
  display: flex;
  overflow: scroll;
  justify-content: center;
  align-items: center;
`;

const PaperStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white;
  width: 60%;
  height: auto;
  min-height: 110rem;

  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  @media only screen and (min-width: 980px) and (max-width: 1500px) {
    width: 80%;
  }
  @media (max-width: 979px) {
    width: 100%;
  }
`;

const FirstWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const SelectedType = styled.div`
  text-align: center;
  font-size: 1.7rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const SelectServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ShopWeightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 3rem;
`;

const ShopWeightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin-top: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 60%;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  @media (max-width: 980px) {
    width: 100%;
  }
`;

const CloseBTNWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 0.4rem;
  margin-bottom: 3rem;
`;

const CloseBTN = styled.div`
  text-align: center;
  padding: 1rem;
  font-size: 1.3rem;
  font-weight: 800;
  width: 60%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  cursor: pointer;
  @media (max-width: 980px) {
    width: 100%;
  }
`;

const ShopWeightItem = styled.div``;

const SelectServiceBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 60%;
  @media (max-width: 980px) {
    font-size: 0.8rem;
    width: 100%;
  }
`;

const SelectServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  flex: 1;
  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  background-color: ${(props) =>
    props.checkboxIndex === true ? '#16a085' : 'white'};
  color: ${(props) => (props.checkboxIndex === true ? 'white' : 'black')};
  @media (max-width: 980px) {
    font-size: 0.8rem;
  }
  border-radius: 2px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const AddressesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  width: 100%;
`;
const BoxTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
`;
const AddressesItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 60%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  padding: 1rem;
  border-radius: 0.5rem;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  background-color: ${(props) =>
    props.checkboxIndex === true ? '#16a085' : 'white'};
  color: ${(props) => (props.checkboxIndex === true ? 'white' : 'black')};
  @media (max-width: 980px) {
    width: 100%;
    font-size: 0.8rem;
  }
`;

const PlusDivOne = styled.div`
  position: absolute;
  background-color: black;
  width: 2rem;
  height: 0.4rem;
  border-radius: 0.5rem;
`;

const PlusDivTwo = styled.div`
  display: absolute;
  background-color: black;
  width: 2rem;
  height: 0.4rem;
  border-radius: 0.5rem;
  transform: rotate(90deg);
`;

const AddressesPlusBTN = styled.div`
  display: ${(props) => (props.state === true ? 'none' : 'flex')};
  border-radius: 50%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  font-size: 1.5rem;
  font-weight: 800;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const AddressesItem = styled.div``;

const SelectServiceItemContent = styled.div`
  margin: 0 auto;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`;

const AddressInputWrapper = styled.div`
  display: ${(props) => (props.state === true ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 60%;
  @media (max-width: 980px) {
    width: 100%;
  }
`;

const NewAddressInput = styled(Input)`
  flex: 1;
  width: 100%;
  background-color: ${(props) => props.theme.bgColor};
  padding: 5px;
  font-size: 14px;
  border-radius: 3px;
  height: 3rem;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  &::placeholder {
    opacity: 1;
    font-weight: 200;
  }
`;

const NewPostInput = styled(Input)`
  flex: 1;
  background-color: ${(props) => props.theme.bgColor};
  width: 100%;
  padding: 5px;
  font-size: 14px;
  border-radius: 3px;
  height: 3rem;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  &::placeholder {
    opacity: 1;
    font-weight: 200;
  }
`;

const CompletBTN = styled.div`
  cursor: pointer;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  flex: 1;
  width: 100%;
  text-align: center;
  padding: 5px;
  font-size: 14px;
  border-radius: 3px;
  height: 3rem;
  font-size: 1.2rem;
  font-weight: 500;
`;

export default ({
  isModalOpen,
  closeModal,
  Title,
  firstExChangeRate,
  InputPrice,
  modalSelect,
  productWeight,
  secondExChangeRate,
  country,
  paypal,
  setPaypal,
  // shop
  shopId,
  shopEstimatesId,
  setisModalOpen,
  shopWeight,
  selectEstimate,
  setSelectEstimate,
  selectSecondPaypal,
  paypalMount,
  setPaypalMount,
  // order
  orderWeight,
  orderSelectWeight,
  setOrderSelectWeight,
  orderSelectSecondPaypal,
  orderId,
  orderEstimatesId,
  addresses,
}) => {
  const [addressId, setAddressId] = useState(addresses[0]?.id);

  const [addAddressID, setAddAddressID] = useState([]);
  const [addAddressName, setAddAddressName] = useState([]);
  const [addAddressPost, setAddAddressPost] = useState([]);

  const [checkboxIndex, setCheckboxIndex] = useState(0);
  const [plusBTNState, setPlusBTNState] = useState(false);

  const newAddress = useInput('');
  const newPost = useInput('');

  const handleSelectAddress = (id, index) => {
    setAddressId(id);
    setCheckboxIndex(index);
  };

  const [create_address] = useMutation(CREATE_ADDRESS, {
    variables: {
      address: newAddress.value,
      post: newPost.value,
    },
  });

  const updateAddAddress = async () => {
    const { data } = await create_address();
    let temp = [...addAddressID];
    temp.push(data?.createAddress?.id);

    setAddAddressID(temp);
    return data;
  };

  const [shippingType, setShippingType] = useState(0);

  const selectPaypal = (selectPaypal, index) => {
    setPaypalMount(selectPaypal);
    setShippingType(index);
  };

  // 고릴라

  const SHIPPING_TYPE = ['EMS', 'FLIGHT', 'SHIP'];
  return (
    <Containerstyled>
      <ModalStyled
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isModalOpen}
        onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isModalOpen}>
          <PaperStyled>
            <MarginDiv>
              {modalSelect === 'first' ? (
                <>
                  <FirstWrapper>
                    <CalculatorPriceResultTable
                      exchangeRate={firstExChangeRate || 0}
                      InputPrice={InputPrice || 0}
                      country={country || 'JP'}
                    />
                  </FirstWrapper>

                  <PaypalButton
                    orderId={orderId}
                    paypal={paypal}
                    checkWhichOrderConfirm={'first'}
                    setisModalOpen={setisModalOpen}
                    country={country}
                  />
                </>
              ) : modalSelect === 'second' ? (
                <>
                  <ShopWeightBox>
                    <BoxTitle>{`${orderWeight.length}${
                      orderWeight.length === 1 ? 'box' : 'boxes'
                    }`}</BoxTitle>

                    <ShopWeightWrapper>
                      {orderWeight.map((itemList, index) => {
                        return (
                          <ShopWeightItem
                            key={index}
                            onClick={() => {
                              return setSelectEstimate(itemList);
                            }}
                          >
                            {`${itemList}kg`}
                          </ShopWeightItem>
                        );
                      })}
                    </ShopWeightWrapper>
                  </ShopWeightBox>
                  <AddressesWrapper>
                    <BoxTitle>Address</BoxTitle>
                    {addresses.map((address, index) => {
                      return (
                        <AddressesItems
                          checkboxIndex={checkboxIndex === index ? true : false}
                          onClick={() => {
                            handleSelectAddress(address.id, index);

                            return;
                          }}
                          key={index}
                        >
                          <AddressesItem>{`${address.address} / ${address.post}`}</AddressesItem>
                        </AddressesItems>
                      );
                    })}

                    {addAddressName?.map((addressName, index) => {
                      return (
                        <AddressesItems
                          checkboxIndex={
                            checkboxIndex === index + addresses.length
                              ? true
                              : false
                          }
                          onClick={() => {
                            if (!addAddressID[index]) {
                              toast.error('Please wait for loading..try again');
                              handleSelectAddress(addresses[0]?.id, 0);
                            } else {
                              handleSelectAddress(
                                addAddressID[index],
                                index + addresses.length
                              );
                            }

                            return;
                          }}
                          key={index}
                        >
                          <AddressesItem>{`${addressName} / ${addAddressPost[index]}`}</AddressesItem>
                        </AddressesItems>
                      );
                    })}

                    <AddressesPlusBTN
                      state={plusBTNState}
                      onClick={() => {
                        setPlusBTNState(true);

                        return;
                      }}
                    >
                      <PlusDivOne></PlusDivOne>
                      <PlusDivTwo></PlusDivTwo>
                    </AddressesPlusBTN>
                    <AddressInputWrapper state={plusBTNState}>
                      <NewAddressInput
                        id={'addressInput'}
                        value={newAddress.value}
                        onChange={newAddress.onChange}
                        placeholder="enter address"
                      ></NewAddressInput>
                      <NewPostInput
                        id={'postInput'}
                        value={newPost.value}
                        onChange={newPost.onChange}
                        placeholder="Post Code"
                      ></NewPostInput>
                      <CompletBTN
                        onClick={() => {
                          if (newAddress.value !== '') {
                            let tempName = [...addAddressName];
                            tempName.push(newAddress.value);
                            setAddAddressName(tempName);

                            let tempPost = [...addAddressPost];
                            tempPost.push(newPost.value);
                            setAddAddressPost(tempPost);
                          }

                          updateAddAddress();

                          newAddress.setValue('');
                          newPost.setValue('');
                          setPlusBTNState(false);

                          return;
                        }}
                      >
                        add
                      </CompletBTN>
                    </AddressInputWrapper>
                  </AddressesWrapper>

                  <SelectServiceWrapper>
                    <BoxTitle>Shipping Type</BoxTitle>
                    <SelectServiceBox>
                      {orderSelectSecondPaypal.map(
                        (orderSelectSecondPaypal, index) => {
                          return (
                            <SelectServiceItem
                              checkboxIndex={
                                shippingType === index && paypalMount
                                  ? true
                                  : false
                              }
                              onClick={() => {
                                selectPaypal(orderSelectSecondPaypal, index);
                                return;
                              }}
                              key={index}
                            >
                              <SelectServiceItemContent>
                                {SHIPPING_TYPE[index]}
                              </SelectServiceItemContent>
                              <SelectServiceItemContent>
                                {`$${orderSelectSecondPaypal.toLocaleString()}`}
                              </SelectServiceItemContent>
                            </SelectServiceItem>
                          );
                        }
                      )}
                    </SelectServiceBox>
                  </SelectServiceWrapper>
                  <SelectedType>
                    {!paypalMount
                      ? 'Please select a delivery method'
                      : `$${paypalMount.toLocaleString()}`}
                  </SelectedType>
                  <PaypalButton
                    paypal={paypalMount}
                    orderId={orderId}
                    orderEstimatesId={orderEstimatesId}
                    setisModalOpen={setisModalOpen}
                    ShippingType={
                      shippingType === 0
                        ? 'EMS'
                        : shippingType === 1
                        ? 'FLIGHT'
                        : 'SHIP'
                    }
                    checkWhichOrderConfirm={'second'}
                    country={country}
                    addresses={addresses}
                    addressId={addressId}
                  />
                </>
              ) : modalSelect === 'shopSecond' ? (
                <>
                  <ShopWeightBox>
                    <BoxTitle>{`${shopWeight.length}${
                      shopWeight.length === 1 ? 'box' : 'boxes'
                    }`}</BoxTitle>
                    <ShopWeightWrapper>
                      {shopWeight.map((itemList, index) => {
                        return (
                          <ShopWeightItem
                            key={index}
                            onClick={() => {
                              return setSelectEstimate(itemList);
                            }}
                          >
                            {`${itemList}kg`}
                          </ShopWeightItem>
                        );
                      })}
                    </ShopWeightWrapper>
                  </ShopWeightBox>

                  <AddressesWrapper>
                    <BoxTitle>Address</BoxTitle>
                    {addresses.map((address, index) => {
                      return (
                        <AddressesItems
                          checkboxIndex={checkboxIndex === index ? true : false}
                          onClick={() => {
                            handleSelectAddress(address.id, index);
                            return;
                          }}
                          key={index}
                        >
                          <AddressesItem>{`${address.address} / ${address.post}`}</AddressesItem>
                        </AddressesItems>
                      );
                    })}

                    {addAddressName?.map((addressName, index) => {
                      return (
                        <AddressesItems
                          checkboxIndex={
                            checkboxIndex === index + addresses.length
                              ? true
                              : false
                          }
                          onClick={() => {
                            if (!addAddressID[index]) {
                              toast.error('Please wait for loading..try again');
                              handleSelectAddress(addresses[0].id, 0);
                            } else {
                              handleSelectAddress(
                                addAddressID[index],
                                index + addresses.length
                              );
                            }

                            return;
                          }}
                          key={index}
                        >
                          <AddressesItem>{`${addressName} / ${addAddressPost[index]}`}</AddressesItem>
                        </AddressesItems>
                      );
                    })}

                    <AddressesPlusBTN
                      state={plusBTNState}
                      onClick={() => {
                        setPlusBTNState(true);

                        return;
                      }}
                    >
                      <PlusDivOne></PlusDivOne>
                      <PlusDivTwo></PlusDivTwo>
                    </AddressesPlusBTN>
                    <AddressInputWrapper state={plusBTNState}>
                      <NewAddressInput
                        id={'addressInput'}
                        value={newAddress.value}
                        onChange={newAddress.onChange}
                        placeholder="enter address"
                      ></NewAddressInput>
                      <NewPostInput
                        id={'postInput'}
                        value={newPost.value}
                        onChange={newPost.onChange}
                        placeholder="Post Code"
                      ></NewPostInput>
                      <CompletBTN
                        onClick={() => {
                          if (newAddress.value !== '') {
                            let tempName = [...addAddressName];
                            tempName.push(newAddress.value);
                            setAddAddressName(tempName);

                            let tempPost = [...addAddressPost];
                            tempPost.push(newPost.value);
                            setAddAddressPost(tempPost);
                          }

                          updateAddAddress();

                          newAddress.setValue('');
                          newPost.setValue('');
                          setPlusBTNState(false);

                          return;
                        }}
                      >
                        add
                      </CompletBTN>
                    </AddressInputWrapper>
                  </AddressesWrapper>

                  <SelectServiceWrapper>
                    <BoxTitle>Shipping Type</BoxTitle>
                    <SelectServiceBox>
                      {selectSecondPaypal.map((selectSecondPaypal, index) => {
                        return (
                          <SelectServiceItem
                            checkboxIndex={
                              shippingType === index && paypalMount
                                ? true
                                : false
                            }
                            onClick={() => {
                              selectPaypal(selectSecondPaypal, index);
                              return;
                            }}
                            key={index}
                          >
                            <SelectServiceItemContent>
                              {SHIPPING_TYPE[index]}
                            </SelectServiceItemContent>
                            <SelectServiceItemContent>
                              {selectSecondPaypal.toLocaleString()}
                            </SelectServiceItemContent>
                          </SelectServiceItem>
                        );
                      })}
                    </SelectServiceBox>
                  </SelectServiceWrapper>
                  <SelectedType>
                    {!paypalMount
                      ? 'Please select a delivery method'
                      : paypalMount.toLocaleString() || 0}
                  </SelectedType>

                  <PaypalButton
                    addresses={addresses}
                    country={country}
                    paypal={paypalMount}
                    shopId={shopId}
                    shopEstimatesId={shopEstimatesId}
                    setisModalOpen={setisModalOpen}
                    ShippingType={
                      shippingType === 0
                        ? 'EMS'
                        : shippingType === 1
                        ? 'FLIGHT'
                        : 'SHIP'
                    }
                    addressId={addressId}
                  />
                </>
              ) : (
                'worng activate'
              )}
              <CloseBTNWrapper>
                <CloseBTN onClick={closeModal}>close</CloseBTN>
              </CloseBTNWrapper>
            </MarginDiv>
          </PaperStyled>
        </Fade>
      </ModalStyled>
    </Containerstyled>
  );
};
