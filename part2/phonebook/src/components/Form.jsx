const PhoneBookForm = ({
  onChangeName,
  valueName,
  valueNumber,
  onChangeNumber,
  addOnClick,
}) => {
  return (
    <div>
      <form>
        <div>
          name:
          <input value={valueName} onChange={onChangeName} />
        </div>
        <div>
          number
          <input value={valueNumber} onChange={onChangeNumber} />
        </div>
        <div>
          <button type="submit" onClick={addOnClick}>
            add
          </button>
        </div>
      </form>
    </div>
  );
};

export default PhoneBookForm;
