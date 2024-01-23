import SearchInput from "../../utils/SearchInput";

const Header = ({ onChange, dataLength }) => {
  return (
    <div>
      <nav>
        <SearchInput onChange={onChange} placeHolder="Search for countries" />
        {dataLength ? (
          <span> Too much countries, please be more specific in the query</span>
        ) : null}
      </nav>
    </div>
  );
};

export default Header;
