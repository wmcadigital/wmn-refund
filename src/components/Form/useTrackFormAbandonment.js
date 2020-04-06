// Form abandonment tracking (https://www.simoahava.com/analytics/track-form-abandonment-with-google-tag-manager/)
import { useEffect, useState } from 'react';
// Import contexts

const useTrackFormAbandonment = (formRef, currentStep, formSubmitStatus) => {
  const [fieldsChanged, setFieldsChanged] = useState([]); // Track fields the user has touched/changed

  // This useEffect is used to track form changes and update the fieldsChanged state as the user progresses
  useEffect(() => {
    const refundForm = formRef.current; // Get DOM node of form
    // Function to work out last changed element in form
    const lastChangedEle = (e) => {
      // Update fields changed array with step number and last changed field name i.e. Step1: CustomerType > Step3: CardNumber
      setFieldsChanged([
        ...fieldsChanged,
        `Step${currentStep}: ${e.target.name}`,
      ]);
    };
    // Listen to changes in form and run above function
    refundForm.addEventListener('change', lastChangedEle);
    // On unmount, remove listener
    return () => {
      refundForm.removeEventListener('change', lastChangedEle);
    };
  }, [currentStep, fieldsChanged, formRef]);

  // Used to update Google Tag Manager
  useEffect(() => {
    window.dataLayer = window.dataLayer || []; // Set datalayer (GA thing)
    // Function for updating datalayer with correct data
    const formAbandoned = () => {
      // If there is a current step and no form submit status then it means the user is still in progress of filling in the form, so we can log that as a true abandonment
      if (currentStep && !formSubmitStatus) {
        // Push abandoned event to GA/Tag Manager
        window.dataLayer.push({
          event: 'formAbandonment',
          eventCategory: 'Refund form abandonment',
          eventAction: fieldsChanged
            ? fieldsChanged.join(' > ')
            : 'Clicked start, but abandoned straight away.', // If fieldsChanged (set in first useEffect) is available then use that and join with ' > ' so it logs as 'Step1: ... > Step2: ... >' ELSE the user must of abandoned without updating the form in step 1 so log message
        });
      }
    };

    window.addEventListener('beforeunload', formAbandoned); // Run above function only when the user is leaving the page

    // On unmount, remove listener
    return () => {
      window.removeEventListener('beforeunload', formAbandoned);
    };
  }, [currentStep, fieldsChanged, formSubmitStatus]);
};

export default useTrackFormAbandonment;