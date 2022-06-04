import { createRef } from 'react';
import HideJanresList from './Hide_janres_list';
import Janre from './Janre';

function JanresList({ janres, janresListIsVisible, handleJanreChange, hanldeJanresListSlide, handleJanresListHide }){
	let janresListRef = createRef();
	
	return(
		<div id="janresListAndSlideButtons" className={`${janresListIsVisible ?  "visible" : "hidden"}`}>
			<HideJanresList handleJanresListHide={handleJanresListHide}  />
			<div id="slideLeft" onClick={(event) => hanldeJanresListSlide({ side: "left", janresListRef, event })}><b>&#60;&#60;</b></div>
			
			<div id="janresListWrapper">
				<div id="janresList" ref={janresListRef}>
					{
						janres.map((janre, index) => 
							<Janre janre={janre} handleJanreChange={handleJanreChange} handleJanresListHide={handleJanresListHide} />
						)
					}
				</div>
			</div>
			
			<div id="slideRight" onClick={(event) => hanldeJanresListSlide({ side: "right", janresListRef, event })}><b>&#62;&#62;</b></div>
		</div>
	)
}

export default JanresList;