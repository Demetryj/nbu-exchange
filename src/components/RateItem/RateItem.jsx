import { useNavigate } from 'react-router-dom';

import styles from './RateItem.module.css';

export const RateItem = ({ rate }) => {
  const navigate = useNavigate();

  const handleRowClick = () => navigate(`/edit/${rate.cc}`);

  return (
    <tr className={styles.row} onClick={handleRowClick}>
      <td>
        {rate.txt} ({rate.cc})
      </td>

      <td>{rate.rate}</td>
    </tr>
  );
};
