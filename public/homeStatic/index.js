const body = document.body;

window.onload = () => { createHomePage(); };

function createHomePage() {

    const homeHead = createHeading({ id: 'homeHead', text: 'NFL Player Reference App', size: 1 });

    const navBarDiv = createDiv({ id: 'navBarDiv' }),
        navBarUL = document.createElement('ul');
    navBarUL.id = 'positionsBar';

    const positions = [{ id: 'qbs', text: 'Quarterbacks' }];

    positions.forEach(tab => {

        const li = document.createElement('li');
        li.id = tab.id;
        li.innerText = tab.text;
        li.onclick = tabClick;

        navBarUL.appendChild(li);

    });

    body.appendChild(homeHead);
    body.appendChild(navBarDiv);
    navBarDiv.appendChild(navBarUL);

};

function tabClick() { getDB(this.id); };

function displayPosition(data) {

    const displayDiv = createDiv({ id: 'displayDiv' });
    body.appendChild(displayDiv);

    switch (data.message) {

        case 'Quarterbacks':

            createQBs(data);

            const qbsPageLink = createHREF({ id: 'qbsLink', ref: `${window.location}qbs`, display: 'View All' });
            displayDiv.appendChild(qbsPageLink);

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
            tds = createHeading({ class: 'tds', text: `Touchdowns: ${player.passing_tds}` });

        document.getElementById('displayDiv').appendChild(playerDiv);
        playerDiv.appendChild(playerName);
        playerDiv.appendChild(statsDiv);
        statsDiv.appendChild(teams);
        statsDiv.appendChild(record);
        statsDiv.appendChild(yards);
        statsDiv.appendChild(tds);

    });

};