const toDalk = require("ent2dalk");
const fs = require("fs");
fs.readFile("project.json", (err, data) => {
    var {project, idList} = toDalk(JSON.parse(data.toString()));
    project.run({
        Entry: {
            project: data,
            idList,
        },
        backend: {
            port: process.env.PORT || 8080,
        }
    });
})
