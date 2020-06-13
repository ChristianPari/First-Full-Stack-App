function getDB(reqParam) { // Retrieves all specific position players

    fetch(`${window.location}${reqParam}/all`, {
            method: 'GET'
        })
        .then(res => {

            if (res.status !== 200) { // if response status comes back bad

                return console.log(`Something went wrong\nStatus Code: ${res.status}\nResponse: ${res.statusText}`);

            }

            res.json()
                .then(displayPosition)
                .catch(err => { console.log('Something went wrong, error:\n' + err); });

        })
        .catch(err => {

            console.log('Something went wrong, error:\n' + err);

        });

};