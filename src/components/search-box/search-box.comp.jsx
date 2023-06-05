import './search-box.styles.scss';

const SearchBox = ({ onChangeHandler, placeholder, className }) => (
  <div>
    <input 
      type='search'
      name={ className }
      className={ `search-box ${className}` }
      placeholder={ placeholder }
      onChange={ onChangeHandler }
    />
  </div>
);

export default SearchBox;