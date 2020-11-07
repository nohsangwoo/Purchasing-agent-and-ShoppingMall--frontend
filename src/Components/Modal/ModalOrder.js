import React from 'react';
import './Modal.scss';
import ReactTransitionGroup from 'react-addons-css-transition-group';
import CalculatorPriceResultTable from '../../Routes/Calculator/CalculatorPriceResultTable';
import CalculatorShippingResultTable from '../../Routes/Calculator/CalculatorShippingResultTable';
import PaypalButton from '../PaypalButton';

const Modals = ({
  isOpen,
  close,
  Title,
  firstExChangeRate,
  InputPrice,
  modalSelect,
  productWeight,
  secondExChangeRate,
  country,
  paypal,
}) => {
  return (
    <>
      {isOpen ? (
        <ReactTransitionGroup
          transitionName={'Modal-anim'}
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          <div className="Modal-overlay" onClick={close} />

          <div className="Modal">
            <p className="title">{Title}</p>
            <div className="content">
              {modalSelect === 'first' ? (
                <>
                  <CalculatorPriceResultTable
                    exchangeRate={firstExChangeRate || 0}
                    InputPrice={InputPrice || 0}
                  />
                  <PaypalButton paypal={paypal} />
                </>
              ) : (
                <>
                  <CalculatorShippingResultTable
                    selectCountry={country || 'JP'}
                    exchangeRate={secondExChangeRate || 0}
                    InputWeight={productWeight || 0}
                  />
                  <PaypalButton paypal={paypal} />
                </>
              )}
            </div>
            <div className="button-wrap">
              <button onClick={close}>Confirm</button>
            </div>
          </div>
        </ReactTransitionGroup>
      ) : (
        <ReactTransitionGroup
          transitionName={'Modal-anim'}
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        />
      )}
    </>
  );
};
export default Modals;
