/* eslint-disable no-console */
const fs = require("fs");
(async () => {
    try {
        const execa = await import("execa");
        await execa.execa("git", ["checkout", "--orphan", "gh-pages"]);
        // eslint-disable-next-line no-console
        console.log("Building started...");
        await execa.execa("npm", ["run", "build"]);
        // Understand if it's dist or build folder
        const folderName = fs.existsSync("dist") ? "dist" : "build";
        await execa.execa("git", ["--work-tree", folderName, "add", "--all"]);
        await execa.execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
        console.log("Pushing to gh-pages...");
        await execa.execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
        await execa.execa("rd", ["/s", "/q", folderName]);
        await execa.execa("git", ["checkout", "-f", "master"]);
        await execa.execa("git", ["branch", "-D", "gh-pages"]);
        console.log("Successfully deployed, check your settings");
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e.message);
        process.exit(1);
    }
})();