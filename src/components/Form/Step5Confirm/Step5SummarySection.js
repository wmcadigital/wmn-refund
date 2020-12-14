import React, { useContext } from 'react';
// Context
import { FormDataContext } from 'globalState/FormDataContext';
// Style
import style from './Step5Confirm.module.scss';
// Components
import ChangeLink from './Step5ChangeLink';
import dateValidationHelpers from '../../shared/FormElements/Date/dateValidationHelpers';

function Step5SummarySection() {
  const [formDataState] = useContext(FormDataContext);
  const {
    CustomerType,
    CustomerTypeStep2,
    DirectDebitNumber,
    CardNumber,
    TicketNumber,
    CompanyName,
    LastUsedDate,
    Firstname,
    Lastname,
    DateOfBirth,
    AddressLine1,
    AddressLine2,
    AddressLine3,
    AddressTown,
    AddressPostcode,
    Email,
    PhotoBase64,
    PhotoBase64Extension,
    PhoneNumber,
    CovidRefund,
  } = formDataState.Application;

  const { getDateFormatted } = dateValidationHelpers;

  // regex fn to spit out phone number in better format
  const formatPhone = (num) => {
    let tel;
    if (num && num.indexOf('+44') === 0) {
      tel = `0${num.substring(3)}`;
    } else {
      tel = num;
    }
    if (tel.indexOf('07') === 0) {
      tel = tel.replace(/(\d{5})(\d{6})/, '$1 $2');
    } else {
      tel = tel.replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3');
    }
    return tel;
  };

  // return the text for the CustomerType field
  const CustomerTypeText = () => {
    let text;
    // if CustomerTypeStep2 exists then CustomerType won't be SwiftPortal
    if (CustomerTypeStep2) {
      if (CustomerType !== 'PaperTicket') {
        text = 'Swift Card';
      } else {
        text = 'Paper Ticket';
      }
    } else {
      switch (CustomerType) {
        case 'ClassPass':
          text = 'Class pass';
          break;
        case 'Scratchcard':
          text = 'Scratchcard';
          break;
        default:
          text = 'Swift on Mobile app';
          break;
      }
    }
    return text;
  };

  // returns the text for the CustomerTypeStep2 field
  const CustomerTypeStep2Text = () => {
    let text;
    if (CustomerTypeStep2) {
      switch (CustomerTypeStep2) {
        case 'DirectDebit':
          text = 'Direct Debit';
          break;
        case 'SwiftPortal':
          text = 'West Midlands Network, Swift website or Swift kiosk';
          break;
        case 'Corporate':
          text = 'My company';
          break;
        case 'Workwise':
          text = 'Workwise scheme';
          break;
        default:
          text =
            'West Midlands Network travel shop, railway station ticket office or Payzone shop';
          break;
      }
    }
    return text;
  };

  return (
    <div className={`wmnds-col-1 ${style.summary}`}>
      <h2>Check your answers</h2>

      <h3>Ticket</h3>
      <table className="wmnds-table wmnds-m-b-xl wmnds-table--without-header">
        <tbody>
          {CustomerType && (
            <tr>
              <th scope="row">Type of ticket</th>
              <td>{CustomerTypeText()}</td>
              <td className="wmnds-text-align-right wmnds-p-r-none">
                <ChangeLink changeStepTo={1} />
              </td>
            </tr>
          )}
          {CustomerTypeStep2 && (
            <tr>
              <th scope="row">Paid through</th>
              <td>
                {CustomerTypeStep2Text()}{' '}
                {CustomerTypeStep2 === 'Corporate' && `(${CompanyName})`}
              </td>
              <td className="wmnds-text-align-right wmnds-p-r-none">
                <ChangeLink changeStepTo={2} />
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {(CustomerType !== 'Scratchcard' || CustomerType !== 'ClassPass') && (
        <>
          <div
            className={`wmnds-m-b-sm wmnds-m-t-xl wmnds-grid wmnds-grid--justify-between ${style.serviceAdded}`}
          >
            <div className="wmnds-col-2-3">
              <h3>Ticket Details</h3>
            </div>
            <div className="wmnds-col-1-3 wmnds-text-align-right">
              <ChangeLink changeStepTo={3} />
            </div>
          </div>
          <table className="wmnds-table wmnds-m-b-xl wmnds-table--without-header">
            <tbody>
              {DirectDebitNumber && (
                <tr>
                  <th scope="row">Direct Debit reference</th>
                  <td className={`${style.tableColspan2}`}>
                    {DirectDebitNumber === 'null'
                      ? `I can't find my Direct Debit reference`
                      : DirectDebitNumber}
                  </td>
                </tr>
              )}
              {CardNumber && (
                <tr>
                  <th scope="row">Swift card number</th>
                  <td className={`${style.tableColspan2}`}>{CardNumber}</td>
                </tr>
              )}
              {TicketNumber && (
                <tr>
                  <th scope="row">Ticket number</th>
                  <td className={`${style.tableColspan2}`}>{TicketNumber}</td>
                </tr>
              )}
              {LastUsedDate && (
                <tr>
                  <th scope="row">Ticket last used</th>
                  <td className={`${style.tableColspan2}`}>
                    {getDateFormatted(LastUsedDate)}
                  </td>
                </tr>
              )}
              {CovidRefund && (
                <tr>
                  <th scope="row">
                    Did you stop using your ticket to travel because of the
                    coronavirus (COVID-19) pandemic?
                  </th>
                  <td className={`${style.tableColspan2}`}>
                    {CovidRefund === 'true' ? 'Yes' : 'No'}
                  </td>
                </tr>
              )}
              {PhotoBase64 && (
                <tr>
                  <th scope="row">Photo of ripped ticket</th>
                  <td width="60%">
                    {/* Render image from base64 (generated in file upload step) */}
                    <img
                      src={`data:image/${PhotoBase64Extension};base64, ${PhotoBase64}`}
                      alt="Ticket upload"
                    />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      )}
      <div
        className={`wmnds-m-b-sm wmnds-m-t-xl wmnds-grid wmnds-grid--justify-between ${style.serviceAdded}`}
      >
        <div className="wmnds-col-2-3">
          <h3>Personal Details</h3>
        </div>
        <div className="wmnds-col-1-3 wmnds-text-align-right">
          <ChangeLink changeStepTo={4} />
        </div>
      </div>
      <table className="wmnds-table wmnds-m-b-xl wmnds-table--without-header">
        <tbody>
          {Firstname && (
            <tr>
              <th scope="row">Name</th>
              <td className={`${style.tableColspan2}`}>
                {Firstname} {Lastname}
              </td>
            </tr>
          )}
          {DateOfBirth && (
            <tr>
              <th scope="row">Date of birth</th>
              <td className={`${style.tableColspan2}`}>
                {getDateFormatted(DateOfBirth)}
              </td>
            </tr>
          )}
          {CompanyName && (
            <tr>
              <th scope="row">Company name</th>
              <td className={`${style.tableColspan2}`}>{CompanyName}</td>
            </tr>
          )}
          {Email && (
            <tr>
              <th scope="row">Email</th>
              <td className={`${style.tableColspan2}`}>{Email}</td>
            </tr>
          )}
          {PhoneNumber && (
            <tr>
              <th scope="row">Phone number</th>
              <td className={`${style.tableColspan2}`}>
                {formatPhone(PhoneNumber)}
              </td>
            </tr>
          )}
          {AddressLine1 && (
            <tr>
              <th scope="row">Address</th>
              <td className={`${style.tableColspan2}`}>
                {AddressLine1}, {AddressLine2.length > 0 && `${AddressLine2}, `}
                {AddressTown}, {AddressLine3.length > 0 && `${AddressLine3}, `}
                {AddressPostcode}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Step5SummarySection;
