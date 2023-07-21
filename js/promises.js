const getLastCommitDate = username => {
    const url = `https://api.github.com/users/${username}/repos`;

    // Include your Personal Access Token in the headers to prevent rate limiting
    const headers = {
        'Authorization': 'GITHUB_API'
    };

    return fetch(url, { headers })
        .then(response => response.json())
        .then(repositories => {
            const latestRepo = repositories.reduce((latest, repo) => {
                return repo.pushed_at > latest.pushed_at ? repo : latest;
            });
            return latestRepo.pushed_at;
        });
}

// getLastCommitDate function
// const username = prompt("username");
// getLastCommitDate(username).then(date => {
//     console.log(`${username} last commit was on ${date}.`);
// }).catch(error => {
//     console.error(error.message);
// });

// Trying to make a prompt to get other user's information //
const entUsername = prompt("GitHub username:");

getLastCommitDate(entUsername).then(date => {
    console.log(`${entUsername} last commit was on ${date}.`);
}).catch(error => {
    console.error(error.message);
});


// TODO Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
const wait = ms => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

// Usage examples:
// wait(1000).then(ms => console.log(`You'll see this after ${ms} milliseconds`));
// wait(3000).then(ms => console.log(`You'll see this after ${ms} milliseconds`));
// wait(5000).then(ms => console.log(`You'll see this after ${ms} milliseconds`));