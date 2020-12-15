import { useEffect } from 'react';
import LogRocket from 'logrocket';

const useLogRocketTracking = (formState) => {
  // Used to update log rocket with the users customerType
  useEffect(() => {
    LogRocket.identify({
      CustomerType: formState.CustomerType,
      isPaperTicket: formState.formStatus.isPaperTicket,
      isSwiftOnMobile: formState.formStatus.isSwiftOnMobile,
    });
  }, [
    formState.CustomerType,
    formState.formStatus.isPaperTicket,
    formState.formStatus.isSwiftOnMobile,
  ]);
};

export default useLogRocketTracking;
