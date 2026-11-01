# PostIt – WAD Homework 2

The PostIt site from Homework 1, made dynamic with JavaScript. The posts are no longer hard coded in `index.html`; they are fetched as JSON and turned into HTML with the DOM API.

## Tasks

| Task | Where |
| ---- | ----- |
| 1. JSON file with 10 posts | `data/posts.json` (id, author, `createTime` as ISO 8601, body, image, likes) |
| 2. JSON validation | Validated with [JSONLint](https://jsonlint.com/) |
| 3. Online endpoint | The same JSON hosted on [npoint.io](https://www.npoint.io/) |
| 4. Fetch from the endpoint | `js/main.js` (the online `fetch` is kept, commented out) |
| 5. Fetch from the local file | `js/main.js` fetches `data/posts.json` |
| 6. Photos | JSON only stores text, so each post stores the **path** of its image (`"image": "images/lake.svg"`); posts without a photo use `null` |
| 7. Profile dropdown | Clicking the profile photo opens / closes a menu with name, email and logout |
| 8. Styling | `css/style.css` |
| 10. GitHub Pages | Deployed from the `main` branch root |

## Running locally

`fetch` does not work when `index.html` is opened directly as a file (`file://`). Open the project through a local server, for example the **Live Server** extension in VS Code.

## Structure

```
index.html
addPost.html
login.html
css/style.css
js/main.js
data/posts.json
images/
```
