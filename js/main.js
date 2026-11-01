// ---------- Task 4: fetch the posts from the online endpoint ----------
// (commented out for Task 5, the posts are now loaded from the local JSON file)
//
// const ONLINE_URL = "https://api.npoint.io/280042d522a85a47963b";

// fetch(ONLINE_URL)
//     .then((response) => response.json())
//     .then((posts) => showPosts(posts))
//     .catch((err) => showError(err));

// ---------- Task 5: fetch the posts from the JSON file in the project ----------
const LOCAL_URL = "data/posts.json";

fetch(LOCAL_URL)
    .then((response) => {
        if (!response.ok) {
            throw new Error("HTTP " + response.status);
        }
        return response.json();
    })
    .then((posts) => showPosts(posts))
    .catch((err) => showError(err));


// Create one <article class="post"> for every post object and add it to the feed
function showPosts(posts) {
    const feed = document.getElementById("feed");

    // newest post first
    posts.sort((a, b) => new Date(b.createTime) - new Date(a.createTime));

    for (const post of posts) {
        feed.appendChild(createPost(post));
    }
}

function createPost(post) {
    const article = document.createElement("article");
    article.className = "post";

    // header: author avatar + creation date
    const header = document.createElement("header");
    header.className = "post-header";

    const avatar = document.createElement("img");
    avatar.className = "avatar";
    avatar.src = post.author.avatar;
    avatar.alt = post.author.name;
    avatar.title = post.author.name;

    const time = document.createElement("time");
    time.dateTime = post.createTime;
    time.textContent = formatDate(post.createTime);

    header.appendChild(avatar);
    header.appendChild(time);
    article.appendChild(header);

    // Task 6: JSON can only hold text, so the photo is stored as a path (URL)
    // to the image file, and the <img> loads the picture from that path
    if (post.image) {
        const image = document.createElement("img");
        image.className = "post-image";
        image.src = post.image;
        image.alt = post.imageAlt;
        article.appendChild(image);
    }

    // every post has a text / message
    const body = document.createElement("p");
    body.textContent = post.body;
    article.appendChild(body);

    // footer: like button
    const footer = document.createElement("footer");
    footer.className = "post-footer";

    const like = document.createElement("button");
    like.type = "button";
    like.className = "like";

    const likeIcon = document.createElement("img");
    likeIcon.src = "images/like.svg";
    likeIcon.alt = "Like";
    like.appendChild(likeIcon);

    const likeCount = document.createElement("span");
    likeCount.className = "like-count";
    likeCount.textContent = post.likes;

    footer.appendChild(like);
    footer.appendChild(likeCount);
    article.appendChild(footer);

    return article;
}

// "2026-10-30T14:20:00Z" -> "Oct 30, 2026"
function formatDate(isoString) {
    return new Date(isoString).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });
}

function showError(err) {
    const feed = document.getElementById("feed");
    const message = document.createElement("p");
    message.className = "error";
    message.textContent = "Could not load the posts (" + err.message + ").";
    feed.appendChild(message);
}


// ---------- Task 7: dropdown menu that opens / closes on the profile photo ----------
const profileButton = document.getElementById("profile-button");
const profileMenu = document.getElementById("profile-menu");

profileButton.addEventListener("click", function () {
    profileMenu.classList.toggle("open");
});

// clicking anywhere outside the menu closes it as well
document.addEventListener("click", function (ev) {
    if (!profileButton.contains(ev.target) && !profileMenu.contains(ev.target)) {
        profileMenu.classList.remove("open");
    }
});
