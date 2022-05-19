import { Outlet } from 'react-router-dom';

function MainBlock({ songsToDisplay, topics, handleTagChange, handlePlay, handleAddToFavourite }){
	return(
		<div id="mainBlockWrapper">
			{/*<p id="mainBlockInfo"><b>Here you can find anything you want</b></p>*/}
			{/*<MainBlockNavigation />*/}

			<div id="mainBlock">
				<Outlet />
			</div>
		</div>
	);
}

export default MainBlock;