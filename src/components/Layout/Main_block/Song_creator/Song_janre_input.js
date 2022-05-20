function SongJanreInput({ janres, handleSongJanreChange }){
    return(
        <select className="songJanreInput" onChange={handleSongJanreChange}>
            {
                janres.map((janre) => <option value={janre.name} >{janre.name}</option>)
            }
        </select>
    )
}

export default SongJanreInput;




