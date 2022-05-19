function Search({ handleSearch }){
	return(
		<input id="songSearchInput" type="text" placeholder="Find songs" onChange={handleSearch}/>
	)
}

export default Search;