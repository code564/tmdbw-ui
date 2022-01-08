import './SearchInput.css';

const SearchInput = (props) => {
    return (
        <input
        type="search"
        value={props.name}
        onChange={props.filter}
        className="input"
        placeholder="Filter"
      />
    );
}

export default SearchInput;