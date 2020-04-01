import React, { useState } from 'react';
// Import contexts
import { FormProvider } from 'globalState/FormContext';
// Import components
import Form from 'components/Form/Form';
import Introduction from 'components/Introduction/Introduction';
import SuccessPage from 'components/SuccessPage/SuccessPage';

function App() {
  const [isFormStarted, setIsFormStarted] = useState(false);
  const [formSubmitStatus, setFormSubmitStatus] = useState(null);

  return (
    <div className="wmnds-container wmnds-p-t-lg wmnds-p-b-lg wmnds-grid">
      <h1 className="wmnds-col-1 wmnds-col-md-3-4">
        Apply for a ticket refund due to Coronavirus (COVID-19)
      </h1>
      {/* If form isn't started, show intro...else show form */}
      {!isFormStarted && <Introduction setIsFormStarted={setIsFormStarted} />}

      {isFormStarted && (
        <FormProvider>
          <Form setFormSubmitStatus={setFormSubmitStatus} />
        </FormProvider>
      )}

      {formSubmitStatus && <SuccessPage />}
    </div>
  );
}

export default App;
