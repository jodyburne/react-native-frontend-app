import trips from './components/myTrips/actions';
import user from './components/profile/actions';

const appConfig = {
	Actions: update => ({
		...trips.Actions(update),
		...user.Actions(update),
	}),
};

const createApp = (stream, merge, initialState = {}) => {
	const update = stream.stream();
	const states = stream.scan(merge, initialState, update);
	const actions = appConfig.Actions(update);

	return { states, actions };
};

export const getId = () =>  Math.floor(Math.random() * 1000000);


export const initState = {
	user: {
		id: getId(),
		name: 'Rose Alison',
		placesVisited: [
			{
				name: 'Costa Rica', 
				id: getId(),
			},
			{
				name: 'Vietnam',
				id: getId(),
			},
		]
	},
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


