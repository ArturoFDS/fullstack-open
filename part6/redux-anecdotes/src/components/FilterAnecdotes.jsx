
const FilterAnecdotesInput = ({handleOnChangeF}) => {
  return (
    <div>
        <input onChange={(e) => handleOnChangeF(e)}/>
    </div>
  )
}

export default FilterAnecdotesInput