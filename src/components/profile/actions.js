const Actions = update => ({
    addPlaces: places => update({user: user => ({...user, placesVisited: places})}),
});

const user = { Actions };

export default user;

