function SongJanreInput({ songJanre, janres, handleSongJanreChange }){
    console.log(songJanre, janres);
    return(
        <select className="songJanreInput" onChange={handleSongJanreChange} value={songJanre}>
            {
                janres.map((janre) =>  <option value={janre.name.toLowerCase()} >{janre.name}</option>)
            }
        </select>
    )
}

export default SongJanreInput;




