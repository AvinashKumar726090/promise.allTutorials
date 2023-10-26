function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const updatedTime = new Date();
            resolve(updatedTime);
        }, 1000);
    });
}

function createPost(post) {
    return new Promise((resolve) => {
        // Simulating post creation delay
        setTimeout(() => {
            resolve(post);
        }, 500);
    });
}

function deletePost(post) {
    return new Promise((resolve) => {
        // Simulating post deletion delay
        setTimeout(() => {
            resolve(post);
        }, 500);
    });
}

// Simulating the scenario
const user = {
    lastActivityTime: null,
    posts: []
};

// Simulating post creation
createPost("First Post")
    .then(post => {
        user.posts.push(post);
        return Promise.all([updateLastUserActivityTime(), post]);
    })
    .then(([updatedTime, post]) => {
        user.lastActivityTime = updatedTime;
        console.log("All Posts:", user.posts);
        document.write(user.posts)
        console.log("Last Activity Time:", user.lastActivityTime);
        return Promise.all([deletePost(user.posts.pop()), post]);
    })
    .then(([deletedPost, post]) => {
        console.log("Deleted Post:", deletedPost);
        document.write('</br>'+"Delete Post :"+deletedPost)
        console.log("Remaining Posts:", user.posts);
        
    })
    .catch(err => {
        console.error("Error:", err);
    });
