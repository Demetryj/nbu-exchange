import { useSelector } from 'react-redux';

import { selectRates, selectModifiedRates, selectStatus, selectError } from '../redux/selectors';

export const useRates = () => {
  const rates = useSelector(selectRates);
  const modifiedRates = useSelector(selectModifiedRates);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  return { rates, modifiedRates, status, error };
};
