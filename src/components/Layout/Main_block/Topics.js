function Topics({ topics, handleTagChange }){
	return(
		<div id="topicsList">
			{
				topics.map((topic) => 
					<div key={topic} onClick={() => handleTagChange(topic)}>
						<span>{topic}</span>
					</div>
				)
			}
		</div>
	);
}

export default Topics;