import styles from './Select.module.css'

const Select = ({ text, name, option, handleOnChange, value }) => {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} value={value} text={text} option={option} handleOnChange={handleOnChange}>
                <option>Selecione uma opção</option>
            </select>
        </div>
    );
}

export default Select;