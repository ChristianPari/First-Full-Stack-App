function getDB(reqParam) { // Retrieves all specific position players

    fetch(`${window.location}${reqParam}/all`, {
            method: 'GET'
        })
        .then((res) => {

            if (res.status !== 200) {

                return console.log(`Something went wrong\nStatus Code: ${res.status}\nResponse: ${res.statusText}`);

            }

            res.json()
                .then(displayPosition)

        })
        .catch(err => {

            console.log('Somethind went wrong, error:\n' + err);

        });

};