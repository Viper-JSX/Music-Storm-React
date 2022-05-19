import ProgressBar from "./Progress_bar";
import useUser from "../../../../hooks/useUser";

function Achievement({ achievement }){
	const user = useUser();
	
	return(
		<div className="achievement">
			<h4>{achievement.name}</h4>
			<ProgressBar completed={user.info[achievement.nameForCheck]} required={achievement.target} />
		</div>
	);
}

export default Achievement;