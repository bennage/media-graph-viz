const fs = require('fs');
const path = require('path');
const hb = require('handlebars');
const { exec } = require('child_process');

// load template for dot files
const templateFile = fs.readFileSync('templates/template.dot', 'utf-8');
const template = hb.compile(templateFile);

fs.readdir('input', (err, files) => {
    if (err)
        console.log(err);
    else {
        files.forEach(file => {

            if (path.extname(file) == ".json") {
                const baseFileName = path.basename(file, '.json');
                const source = fs.readFileSync(path.resolve('input', file), 'utf-8');
                const graph = JSON.parse(source);
                fs.writeFileSync(`tmp/${baseFileName}.dot`, template(graph));

                exec(`dot -Tsvg tmp/${baseFileName}.dot > out/${baseFileName}.svg`, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`exec error: ${error}`);
                        return;
                    }
                    // console.log(`stdout: ${stdout}`);
                    // console.error(`stderr: ${stderr}`);
                });
            }
        })
    }
});

