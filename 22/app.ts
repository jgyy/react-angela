const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dates = require(__dirname + '/date.ts');

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const items: string[] = ["Buy Food", "Cook Food", "Eat Food"];
const workItems: string[] = [];
const ejsFile = (file: string) => path.join(__dirname, "views", file);

app.get('/', (_: any, res: any) => {
    const day = dates.getDate();
    res.render(ejsFile("list.ejs"), { listTitle: day, newListItems: items });
});

app.post('/', (req: any, res: any) => {
    const item = req.body.newItem;
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect('/work');
    } else {
        items.push(item);
        res.redirect('/');
    }
});

app.get('/work', (_: any, res: any) => {
    res.render(ejsFile("list.ejs"), { listTitle: "Work List", newListItems: workItems });
});

app.post('/work', (req: any, res: any) => {
    const item = req.body.newItem;
    workItems.push(item);
    res.redirect('/work');
});

app.get('/about', (_: any, res: any) => {
    res.render(ejsFile("about.ejs"));
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
