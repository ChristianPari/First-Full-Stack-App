function getPlayer() {

    fetch(`${window.location}/stats`, {
            method: 'GET'
        })
        .then(res => {

            if (res.status !== 200) {

                return console.log(`Something went wrong\nStatus Code: ${res.status}\nResponse: ${res.statusText}`);

            }

            res.json()
                .then(createPage)
                .catch(err => { console.log('Something went wrong, error:\n', err); });

        })
        .catch(err => {

            console.log('Something went wrong, error:\n', err);

        });

};

function deletePlayer() {

    fetch(`${window.location}`, {
            method: 'DELETE'
        })
        .then(res => {

            if (res.status !== 200) {

                return console.log(`Something went wrong\nStatus Code: ${res.status}\nResponse: ${res.statusText}`);

            }

            res.json()
                .then(newPage)
                .catch(err => { console.log('Something went wrong, error:\n', err); })

        })
        .catch(err => {

            console.log('Something went wrong, error:\n', err);

        });

};