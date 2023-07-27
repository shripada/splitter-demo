import { NumberInputFieldProps } from './types';
import styles from './NumberInputField.module.css';

function NumberInputField({
  label,
  value = 0,
  iconComponent,
  errorMessage,
  decimalInputNeeded,
}: NumberInputFieldProps) {
  const pattern = decimalInputNeeded ? '^d+(.d{1,2})?$' : '[0-9]*';
  let numVal = value;
  if (!decimalInputNeeded) {
    numVal = Math.round(value);
  }
  return (
    <div
      className={`${styles['number-input-field-container']} ${
        errorMessage ? styles['error'] : ''
      }`}
    >
      <div className={styles['label-container']}>
        <label htmlFor="cust-input">{label}</label>
        {errorMessage ? (
          <span className={styles['error-message']}>{errorMessage}</span>
        ) : null}
      </div>
      <div className={styles['icon-container']}>
        <input
          className={styles['custom-input']}
          type="number"
          id="cust-input"
          value={numVal}
          pattern={pattern}
        ></input>
        <div className={styles['icon-wrapper']}>{iconComponent}</div>
      </div>
    </div>
  );
}

export { NumberInputField };
