import { Route, Routes } from 'react-router-dom';

import useUser from '../../hooks/useUser.js';

import Header from './Header/Header';
import HomePage from './Home_page/Home_page';
import MainBlock from './Main_block/Main_block';
import SongsViewer  from './Main_block/Songs_viewer';
import Topics from './Main_block/Topics';

import Playlist from './Main_block/Playlists/Playlist';
import FavouriteSongs from './Favourite_songs';
import UserPlaylists from './Main_block/Playlists/User_playlists';


import Profile from './Profile/Profile';
import ProfileInfo from './Profile/Profile_info/Profile_info.js';
import About  from './Profile/About.js';

import AuthForm from './Auth_form/Auth_form';
import Login from './Auth_form/Login';
import Register from './Auth_form/Register';
import Achievements from './Profile/Achievements/Achievements';

import JanresList from './Janres_list/Janres_list.js';
import Player from '../Player/Player.js';
import Footer from './Footer/Footer';
import SongCreator from './Main_block/Song_creator/Song_creator.js';
import WeeklyMusicListenintChart from './Profile/Weekly_music_listening_chart/Weekly_music_listening_chart.js';

function Layout({ songsToDisplay, favSongs, topics, handlePlay, handlePlaylistOpen, handleTagChange, janres, displayJanresRange, janresListIsVisible, handleJanreChange, hanldeJanresListSlide, handleJanresListToggle, handleJanresListHide, newsList, homePageHasBeenScrolled,  handleSearch, handleThemeChange, playingSong, playerRef, handleDurationProgress, handleControlPlay, handleDurationChange, handleVolumeChange, about, handleAddToFavourite, handleRemoveFromFavourite, handleSongCreate, handleSongEdit, handleAddToPlaylist, handleRemoveFromPlaylist, handleLogin, handleRegister }){
	const user = useUser();
	const LayoutMainBlock = (<MainBlock songsToDisplay={songsToDisplay} topics={topics} handlePlay={handlePlay} handleTagChange={handleTagChange} handleAddToFavourite={handleAddToFavourite} />);
	
	return(
		<div id="layoutWindow">
			<Header handleThemeChange={handleThemeChange}/>
			<Routes>
				<Route path="/" element={<HomePage newsList={newsList} homePageHasBeenScrolled={homePageHasBeenScrolled} handlePlay={handlePlay} handleAddToFavourite={handleAddToFavourite} />} />
				<Route path="/music" element={LayoutMainBlock} >
					<Route path="music-list" element={
						<>
							{/*<Topics topics={topics} handleTagChange={handleTagChange} />*/}
							<JanresList janres={janres} displayJanresRange={displayJanresRange} janresListIsVisible={janresListIsVisible} handleJanreChange={handleJanreChange} hanldeJanresListSlide={hanldeJanresListSlide} handleJanresListHide={handleJanresListHide} />
							<SongsViewer songsToDisplay={songsToDisplay} handlePlay={handlePlay} handleSearch={handleSearch} handleAddToFavourite={handleAddToFavourite} handleJanresListToggle={handleJanresListToggle} />
						</>
					}>

					</Route>
					<Route path="music-list/create" element={<SongCreator handleSongCreate={handleSongCreate} janres={janres} />} />
					<Route path="music-list/edit/:songName" element={<SongCreator handleSongEdit={handleSongEdit} janres={janres} />} />
					
					<Route path="playlists" >
						<Route path="" element={<UserPlaylists handlePlaylistOpen={handlePlaylistOpen} />} />

						{
							user ? 
							user.playlists.map((playlist) => {
								return(
									<Route path={playlist.name} element={<Playlist playlist={playlist} handlePlay={handlePlay} handleRemoveFromPlaylist={handleRemoveFromPlaylist} />} />
								)
							})
							: null
						}
					</Route>

					<Route path="add-to-playlist" element={<UserPlaylists handleAddToPlaylist={handleAddToPlaylist} />} />					
				</Route>
				<Route path="/favourite" element={<FavouriteSongs favSongs={favSongs} handlePlay={handlePlay} handleRemoveFromFavourite={handleRemoveFromFavourite} />} />
				
				<Route path="/profile" element={<Profile />}>
					<Route path="" element={<ProfileInfo />} />
					<Route path="info" element={<ProfileInfo />} index />
					<Route path="weekly-music-listening-chart" element={<WeeklyMusicListenintChart />} index />
					<Route path="achievements" element={<Achievements userAchievements={user?.achievements} />} />
					<Route path="about" element={<About />} />
				</Route>
			
				<Route path="/authorization" element={<AuthForm />}>
					<Route path="login" element={<Login handleLogin={handleLogin} />} />
					<Route path="register" element={<Register handleRegister={handleRegister} />} />
				</Route>
			</Routes>
			

			<Player playingSong={playingSong} playerRef={playerRef} handleDurationProgress={handleDurationProgress} handleControlPlay={handleControlPlay} handleDurationChange={handleDurationChange} handleVolumeChange={handleVolumeChange}/>
            <Footer about={about} />
		</div>
	);
}

export default Layout;