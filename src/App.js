import trips from './components/myTrips/actions';

const appConfig = {
	Actions: update => ({
		...trips.Actions(update),
	}),
}

const createApp = (stream, merge, initialState = {}) => {
	const update = stream.stream();
	const states = stream.scan(merge, initialState, update);
	const actions = appConfig.Actions(update);

	return { states, actions };
}

export const getId = () =>  Math.floor(Math.random() * 1000000);


export const initState = {
	trips: [
		{
			id: getId(),
		 	name: 'Italy Trip',
			duration: 
				{
					start: Date.now(),
					end: Date.now(),
				},
			places: [
				{
					id: getId(),
					name: 'Italy',
					thingsToDo: {
							restaurants: [],
							hotels: [],
							attractions: [],
							others: [],
					},
				}
			],
			checkList: [],
		},
   	],
};

export default createApp;


