import React from "react";


const SearchBox=({SearchField,searchChange})=>{
    return(
        <div className="pa2 ">
            <input className="tc pa3 ba b--green bg-lightest-blue "
            type="search" 
            placeholder="Introdu robotul"
            onChange={searchChange}
            />
        </div>
    )
}
export default SearchBox;
