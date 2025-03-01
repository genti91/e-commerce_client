import { useState } from "react"
import { useDispatch } from "react-redux";
import { clear, searchProduct, setCurrentPage } from "../../redux/actions.js"
import "./SearchBar.css"

const SearchBar = ({button}) => {
  let [name, setName] = useState("");
  let dispatch = useDispatch();

  function handleChange(e) {
    e.preventDefault();
      setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchProduct(name));
    dispatch(setCurrentPage(1));
    setName("");
  }

  function handleClick(e) {
    dispatch(clear())
  }
  var buttonStyle = 'btn-secondary'
  if(button === 'admin'){
    buttonStyle = 'btn-secondary'
  }

  return (
    <div class="d-flex">
      <div>
        <form class="d-flex" role="search" onSubmit={handleSubmit}>
          <input class="form-control me-2 searchBar" type="search" placeholder="Search a video game..." required aria-label="Search" value={name} onChange={handleChange} />
          <button class={`btn ${buttonStyle} searchButton`} type="submit">Search</button>
        </form>
      </div>
      <div className="clear">
        <button class={`btn ${buttonStyle} searchButton`} onClick={handleClick}>Clear</button>
      </div>
    </div>
  )
}

export default SearchBar
