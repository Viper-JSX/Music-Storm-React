function SongJanreInput({ songJanre, janres, handleSongJanreChange }){
    return(
        <select className="songJanreInput" onChange={handleSongJanreChange} value={songJanre}>
            {
                janres.map((janre) =>  <option value={janre.name.toLowerCase()} >{janre.name}</option>)
            }
        </select>
    )
}

export default SongJanreInput;




