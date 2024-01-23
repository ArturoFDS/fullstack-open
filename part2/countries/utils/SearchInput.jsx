/* eslint-disable react/prop-types */
const SearchInput = ({onChange, placeHolder}) => {
  return (
    <div>
        <input type="text" onChange={onChange} placeholder={placeHolder} />
    </div>
  )
}

export default SearchInput