// Form abandonment tracking (https://www.simoahava.com/analytics/track-form-abandonment-with-google-tag-manager/)
import { useEffect, useContext } from 'react';
// Import contexts
import { FormContext } from 'globalState/FormContext';

const useTrackFormAbandonment = () => {
  const [formState] = useContext(FormContext); // Get the state of form data from FormContext
  // Set intial state of when
  const initialFormState = {
    CustomerType: '',
    Application: {},
  };

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    const formAbandoned = () => {
      if (formState !== initialFormState) {
        window.dataLayer.push({
          event: 'formAbandonment',
          eventCategory: 'Form Abandonment',
          eventAction: true,
        });
      }
    };
    formAbandoned();
    // window.addEventListener('beforeunload', formAbandoned);

    // return () => {
    //   window.removeEventListener('beforeunload', formAbandoned);
    // };
  }, []);
};

export default useTrackFormAbandonment;
