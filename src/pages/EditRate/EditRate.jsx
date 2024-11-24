import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { modifyRate } from '../../redux/ratesSlice';
import { useRates } from '../../hooks/useRates';

import styles from './EditRate.module.css';

export default function EditRate() {
  const [rateValue, setRateValue] = useState('');
  const [currencyName, setCurrencyName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { currencyCode } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { rates, modifiedRates } = useRates();

  useEffect(() => {
    const existingRate =
      modifiedRates.find(rate => rate.cc === currencyCode) ||
      rates.find(rate => rate.cc === currencyCode);

    if (existingRate) {
      setRateValue(existingRate.rate);
      setCurrencyName(existingRate.txt);
    }
  }, [currencyCode, rates, modifiedRates]);

  const handleSubmit = e => {
    e.preventDefault();
    setErrorMessage('');

    if (isNaN(rateValue) || rateValue <= 0) {
      setErrorMessage('Будь ласка, введіть дійсний курс валют більше нуля.');
      return;
    }

    try {
      dispatch(modifyRate({ code: currencyCode, newRate: parseFloat(rateValue) }));

      const updatedModifiedRates = [
        ...modifiedRates.filter(r => r.cc !== currencyCode),
        { ...rates.find(r => r.cc === currencyCode), rate: parseFloat(rateValue) },
      ];

      try {
        localStorage.setItem('modifiedRates', JSON.stringify(updatedModifiedRates));
      } catch (storageError) {
        setErrorMessage('Помилка збереження даних у LocalStorage.');
        console.error(storageError);
        return;
      }

      navigate('/modified');
    } catch (error) {
      setErrorMessage('Виникла помилка при збереженні курсу валют.');
      console.error(error);
    }
  };

  return (
    <section>
      <div className="container">
        <h1>Редагування курсу валют</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.wrapperTitles}>
            <p className={styles.title}>
              Назва валюти: <span>{currencyName}</span>
            </p>
            <p className={styles.title}>
              Код валюти: <span>{currencyCode}</span>
            </p>
          </div>

          <div>
            <label htmlFor="newRate" className={styles.label}>
              Новий курс:
            </label>
            <input
              id="newRate"
              type="number"
              name="newRate"
              step="0.0001"
              value={rateValue}
              onChange={e => setRateValue(e.target.value)}
              required
              className={styles.input}
            />
          </div>

          {errorMessage && <p className="error">{errorMessage}</p>}

          <button type="submit" className={styles.submitButton}>
            Зберегти
          </button>
        </form>
      </div>
    </section>
  );
}
