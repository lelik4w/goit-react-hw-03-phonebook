import styles from './Filter.module.css';

const Filter = ({ value, onFilter }) => {
  return (
    <div className={styles.filterWarpper}>
      <label htmlFor="filterField">Find contacts by name</label>
      <input id="filterField" type="text" value={value} onChange={onFilter} />
    </div>
  );
};

export default Filter;
