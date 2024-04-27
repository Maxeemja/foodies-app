import React from 'react';

function MealPage({ params }) {
	return (
		<>
			<div>MealPage</div>
			<div>{params.id}</div>
		</>
	);
}

export default MealPage;
