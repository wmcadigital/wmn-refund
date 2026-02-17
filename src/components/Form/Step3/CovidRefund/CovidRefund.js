import { useEffect, useContext } from 'react';
import { FormDataContext } from 'globalState/FormDataContext';

const CovidRefund = () => {
  const [, formDispatch] = useContext(FormDataContext);

  // Automatically set CovidRefund to "false" when the component is rendered
  useEffect(() => {
    formDispatch({
      type: 'UPDATE_FORM_DATA',
      payload: { CovidRefund: 'false' },
    });
  }, [formDispatch]);

  // NOTE: This component previously rendered a question to the user about Covid-related refunds.
  // The question has been removed, and the field is now permanently set to "false" to preserve
  // downstream data processing. If necessary, this component can be updated to reintroduce the 
  // question to the user.

  // Do not render anything
  return null;
};

export default CovidRefund;
