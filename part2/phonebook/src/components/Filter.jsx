const Filter = ( { onChangeHandler } ) => {
  return (
    <div>
      <input  
        type="text"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default Filter;
