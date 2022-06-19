import Achievement from './Achievement';

function Achievements({ userAchievements }){
	return(
		<div id="achievements">
			{
				userAchievements.map((achievement) => 
					<Achievement achievement={achievement} key={achievement.name} />
				)
			}
		</div>
	);
}

export default Achievements;