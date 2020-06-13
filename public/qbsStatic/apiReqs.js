function getPlayers() {

    fetch(`${window.location}all`, {
            method: 'GET'
        })
        .then(res => {

            if (res.status !== 200) {

                return console.log(`Something went wrong\nStatus Code: ${res.status}\nResponse: ${res.statusText}`);

            }

            res.json()
                .then(displayPlayers)
                .catch(err => { console.log('Something went wrong, error:\n' + err); });

        })
        .catch(err => {

            console.log('Something went wrong, error:\n' + err);

        });

};