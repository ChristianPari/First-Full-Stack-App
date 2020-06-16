const body = document.body,
    idRegEx = /\/\w+\//,
    playerID = window.location.pathname.replace(idRegEx, '');

window.onload = () => { getPlayer() };

function createPage(res) {

    const playerData = res.hb_data,
        playerHead = createHeading({ id: 'playerHead', text: `${playerData.name.first} ${playerData.name.last}`, size: 1 }),
        statDiv = createDiv({ id: 'statDiv' }),
        teams = createHeading({ id: 'teams', text: `Current Team: ${playerData.teams.cur_team}\nPrevious Teams: ${playerData.teams.prev_teams.join(', ')}`, size: 2 }),
        rushingAttempts = createHeading({ class: 'rushingAttempts', text: `Rushing Attempts: ${playerData.rush_attempts}`, size: 2 }),
        rushingYards = createHeading({ class: 'rushingYards', text: `Rushing Yards: ${playerData.rushing_yards}`, size: 2 }),
        tds = createHeading({ id: 'tds', text: `Touchdowns: ${playerData.touchdowns}`, size: 2 }),
        deleteBtn = createButton({ id: 'deleteBtn', text: 'Delete', onClickFunc: deletePlayer }),
        linksDiv = createDiv({ id: 'linksDiv' }),
        hbsPage = createHREF({ id: 'qbsPage', ref: `${window.location.origin}/hbs`, display: 'Back to all Halfbacks' }),
        homeLink = createHREF({ id: 'homeLink', ref: `${window.location.origin}`, display: 'Back to Home Page' });

    body.appendChild(playerHead);
    body.appendChild(deleteBtn);
    body.appendChild(statDiv);
    statDiv.appendChild(teams);
    statDiv.appendChild(rushingAttempts);
    statDiv.appendChild(rushingYards);
    statDiv.appendChild(tds);
    body.appendChild(linksDiv);
    linksDiv.appendChild(hbsPage);
    linksDiv.appendChild(homeLink);

};

function newPage() {

    body.innerHTML = '';

    const noPlayer = createHeading({ text: "This player doesn't exist anymore", size: 1 }),
        homeLink = createHREF({ id: 'homeLink', ref: `${window.location.origin}`, display: 'Back to Home Page' });

    body.appendChild(noPlayer);
    body.appendChild(homeLink);


};