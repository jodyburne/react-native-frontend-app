const Actions = update => ({
    addTrip: trip => update({trips: trips => [...trips, trip]}),
    deleteTrip: trip => update({trips: trips => trips.filter(t => t.id !== trip.id)}),
    editTrip: trip => update({trips: trips => trips.map(t => t.id === trip.id ? trip : t)})
});

const trips = { Actions };

export default trips;

