// Form abandonment tracking (https://www.simoahava.com/analytics/track-form-abandonment-with-google-tag-manager/)
import { useEffect, useContext, useState } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';

const useTrackFormAbandonment = (formRef, currentStep, formSubmitStatus) => {
  const [formState] = useContext(FormContext); // Get the state of form data from FormContext
  const [fieldsChanged, setFieldsChanged] = useState([]);

  useEffect(() => {
    const refundForm = formRef.current;

    const lastChangedEle = (e) => {
      setFieldsChanged([
        ...fieldsChanged,
        `Step${currentStep}: ${e.target.getAttribute('name')}`,
      ]);
    };

    refundForm.addEventListener('change', lastChangedEle);

    return () => {
      refundForm.removeEventListener('change', lastChangedEle);
    };
  }, [currentStep, fieldsChanged, formRef]);

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    const formAbandoned = () => {
      if (formState.CustomerType && !formSubmitStatus) {
        window.dataLayer.push({
          event: 'formAbandonment',
          eventCategory: 'Refund form abandonment',
          eventAction: fieldsChanged.join(' > '),
        });
      }
    };
    formAbandoned();
    // window.addEventListener('beforeunload', formAbandoned);

    // return () => {
    //   window.removeEventListener('beforeunload', formAbandoned);
    // };
  }, [fieldsChanged, formState.CustomerType, formSubmitStatus]);
};

export default useTrackFormAbandonment;
