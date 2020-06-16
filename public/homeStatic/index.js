const body = document.body;

window.onload = () => { createHomePage(); };

function createHomePage() {

    const homeHead = createHeading({ id: 'homeHead', text: 'NFL Player Reference App', size: 1 });

    const navBarDiv = createDiv({ id: 'navBarDiv' }),
        navBarUL = document.createElement('ul');
    navBarUL.id = 'positionsBar';

    const positions = [{ id: 'qbs', text: 'Quarterbacks' }, { id: 'hbs', text: 'Halfbacks' }];

    positions.forEach(tab => {

        const li = document.createElement('li');
        li.id = tab.id;
        li.innerText = tab.text;
        li.onclick = tabClick;

        navBarUL.appendChild(li);

    });

    const displayDiv = createDiv({ id: 'displayDiv' }),
        initialHead = createHeading({ id: 'initialHead', text: 'Click a Position to Display Player Statistics for that Position!', size: 2 });

    body.appendChild(homeHead);
    body.appendChild(navBarDiv);
    navBarDiv.appendChild(navBarUL);
    body.appendChild(displayDiv);
    displayDiv.appendChild(initialHead);

};

function tabClick() { getDB(this.id); };

function displayPosition(data) {

    if (document.getElementById('displayDiv')) { document.getElementById('displayDiv').innerHTML = ''; }

    switch (data.message) {

        case 'Quarterbacks':

            createQBs(data);

            const qbsPageLink = createHREF({ id: 'qbsLink', ref: `${window.location}qbs`, display: 'View All' });
            displayDiv.appendChild(qbsPageLink); //! can turn into a function later

            break;

        case 'Halfbacks':

            createHBs(data);

            const hbsPageLink = createHREF({ id: 'hbsLink', ref: `${window.location}hbs`, display: 'View All' });
            displayDiv.appendChild(hbsPageLink); //! can turn into a function later

            break;

    }

};

function createQBs(data) {

    data.players.forEach(player => {

        const playerDiv = createDiv({ id: player._id }),
            playerName = createHeading({ class: 'names', text: `${player.name.first} ${player.name.last}`, size: 3 }),
            statsDiv = createDiv({ class: 'statsDiv' }),
            teams = createHeading({ class: 'teams', text: `Current Team: ${player.teams.cur_team}\nPrevious Teams: ${player.teams.prev_teams.join(', ')}` }),
            record = createHeading({ class: 'record', text: `Wins: ${player.record.wins} / Losses: ${player.record.losses}` }),
            yards = createHeading({ class: 'yards', text: `Passing Yards: ${player.passing_yards}` }),
            tds = createHeading({ class: 'tds', text: `Touchdowns: ${player.touchdowns}` }),
            playerPageLink = createHREF({ class: 'playerPageLink', display: 'View Player Page', ref: `${window.location}qbs/${playerDiv.id}` });

        document.getElementById('displayDiv').appendChild(playerDiv);
        playerDiv.appendChild(playerName);
        playerDiv.appendChild(statsDiv);
        statsDiv.appendChild(teams);
        statsDiv.appendChild(record);
        statsDiv.appendChild(yards);
        statsDiv.appendChild(tds);
        playerDiv.appendChild(playerPageLink);

    });

};

function createHBs(data) {

    data.players.forEach(player => {

        const playerDiv = createDiv({ id: player._id }),
            playerName = createHeading({ class: 'names', text: `${player.name.first} ${player.name.last}`, size: 3 }),
            statsDiv = createDiv({ class: 'statsDiv' }),
            teams = createHeading({ class: 'teams', text: `Current Team: ${player.teams.cur_team}\nPrevious Teams: ${player.teams.prev_teams.join(', ')}` }),
            rushingAttempts = createHeading({ class: 'rushingAttempts', text: `Rushing Attempts: ${player.rush_attempts}` }),
            rushingYards = createHeading({ class: 'rushingYards', text: `Rushing Yards: ${player.rushing_yards}` }),
            tds = createHeading({ class: 'tds', text: `Touchdowns: ${player.touchdowns}` }),
            playerPageLink = createHREF({ class: 'playerPageLink', display: 'View Player Page', ref: `${window.location}hbs/${playerDiv.id}` });

        document.getElementById('displayDiv').appendChild(playerDiv);
        playerDiv.appendChild(playerName);
        playerDiv.appendChild(statsDiv);
        statsDiv.appendChild(teams);
        statsDiv.appendChild(rushingAttempts);
        statsDiv.appendChild(rushingYards);
        statsDiv.appendChild(tds);
        playerDiv.appendChild(playerPageLink);

    });

};