import Achievement from './Achievement';

function Achievements({ userAchievements }){
	return(
		<div id="achievements">
			{
				userAchievements.map((achievement) => 
					<Achievement achievement={achievement} />
				)
			}
		</div>
	);
}

export default Achievements;