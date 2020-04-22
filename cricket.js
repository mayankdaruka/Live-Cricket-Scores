const cricObj = require('cric-live-json');
const LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');
cricObj.getRecentMatches().then((matches) => {
    localStorage.setItem('matches.txt', JSON.stringify(matches));
   for (var match of matches) {
       if (match.status) {
        // console.log('\n\n' + data);
        const matchType = match.type;
        const matchSeries = match.series;
        const matchStatus = match.status;
        const matchVenue = match.venue.name;
        const matchLocation = match.venue.location;
        const matchRunRate = match.score.runRate;
        const matchTarget = match.score.target;
        const matchTeamsPlaying = Object.keys(match.teams);
        const matchFirstTeam = match.teams[matchTeamsPlaying[0]].name;
        const matchSecondTeam = match.teams[matchTeamsPlaying[1]].name;
       }
   }
   console.log(JSON.stringify(matches));
});
