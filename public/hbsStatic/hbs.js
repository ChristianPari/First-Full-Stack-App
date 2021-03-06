//? a href for each player to go to their specific page with more statistics
//? a sort system
//? a comparison tool

const body = document.body;

window.onload = () => { createPage(); };

function createPage() {

    const pageHead = createHeading({ id: 'pageHead', text: 'NFL Halfbacks', size: 1 }),
        searchDiv = createDiv({ id: 'searchDiv' }),
        searchIn = createInput({ id: 'searchIn', type: 'text', pHolder: 'Player Name' }),
        searchBtn = createInput({ id: 'searchBtn', type: 'button', value: 'Search', onClickFunc: playerSearch }),
        playersDiv = createDiv({ id: 'playersDiv' }),
        homeLink = createHREF({ id: 'homeLink', ref: `${window.location.origin}`, display: 'Back to Home Page' });

    body.appendChild(pageHead);
    body.appendChild(searchDiv);
    searchDiv.appendChild(searchIn);
    searchDiv.appendChild(searchBtn);
    body.appendChild(playersDiv);
    body.appendChild(homeLink);

    getPlayers(); // api req call

};

function displayPlayers(data) {

    data.players.forEach(player => {

        const playerDiv = createDiv({ id: player._id }),
            playerName = createHeading({ class: 'names', text: `${player.name.first} ${player.name.last}`, size: 3 }),
            statsDiv = createDiv({ class: 'statsDiv' }),
            teams = createHeading({ class: 'teams', text: `Current Team: ${player.teams.cur_team}\nPrevious Teams: ${player.teams.prev_teams.join(', ')}` }),
            rushingAttempts = createHeading({ class: 'rushingAttempts', text: `Rushing Attempts: ${player.rush_attempts}` }),
            rushingYards = createHeading({ class: 'rushingYards', text: `Rushing Yards: ${player.rushing_yards}` }),
            tds = createHeading({ class: 'tds', text: `Touchdowns: ${player.touchdowns}` });

        document.getElementById('playersDiv').appendChild(playerDiv);
        playerDiv.appendChild(playerName);
        playerDiv.appendChild(statsDiv);
        statsDiv.appendChild(teams);
        statsDiv.appendChild(rushingAttempts);
        statsDiv.appendChild(rushingYards);
        statsDiv.appendChild(tds);

    });

};

function playerSearch() {

    const searchIn = this.parentNode.childNodes[0],
        input = searchIn.value.toLowerCase(),
        inRegEx = new RegExp(`${input}`),
        playersDiv = this.parentNode.parentNode.childNodes[9];

    playersDiv.childNodes.forEach(div => {

        if (!inRegEx.test(div.childNodes[0].innerHTML.toLowerCase())) {

            div.style.display = 'none';

        } else {

            div.style.display = 'initial';

        }

    });

};