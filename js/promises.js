function getLastCommitDate(username) {
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

// Test the getLastCommitDate function
getLastCommitDate('octocat').then(date => {
    console.log(`The last commit made by Octocat was on ${date}.`);
}).catch(error => {
    console.error(error.message);
});

function wait(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

// Usage examples:
wait(1000).then(ms => console.log(`You'll see this after ${ms} milliseconds`));
wait(3000).then(ms => console.log(`You'll see this after ${ms} milliseconds`));
wait(5000).then(ms => console.log(`You'll see this after ${ms} milliseconds`));