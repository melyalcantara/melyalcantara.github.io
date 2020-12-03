const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

const searchEvents = async searchText => {
    const res = await fetch ('..data/events.json');
    const events = await res.json();

    let matches = events.filter(events => {
        const regex = new RegExp(`^${SearchText}`, 'gi');
        return event.name.match(regex) || event.abbr.match(regex);
    });

    console.log(matches);

};

search.addEventListener('input', () => searchEvents(search.value));