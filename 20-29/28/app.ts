import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import mongoose from 'mongoose';
import _ from 'lodash';

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb://127.0.0.1:27017/todolistDB").then(function () {
  console.log("Successfully connected to MongoDB.");
}).catch(function (err) {
  console.log(err);
});

const itemsSchema = new mongoose.Schema({
  name: String
});

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
  name: "Welcome to your todolist!"
});

const item2 = new Item({
  name: "Hit the + button to add a new item."
});

const item3 = new Item({
  name: "<-- Hit this to delete an item."
});

const defaultItems = [item1, item2, item3];
const listSchema = new mongoose.Schema({
  name: String,
  items: [itemsSchema]
});

const List = mongoose.model("List", listSchema);

const url = (ejs: string) => path.join(__dirname, "views", ejs);

app.get("/", function (req, res) {

  Item.find({}).then(function (foundItem) {
    if (foundItem.length === 0) {
      Item.insertMany(defaultItems).then(function () {
        console.log("Successfully saved default items to DB.");
      }).catch(function (err) {
        console.log(err);
      });
      res.redirect("/");
    } else {
      res.render(url("list"), { listTitle: "Today", newListItems: foundItem });
    }
  }).catch(function (err) {
    console.log(err);
  });
});

app.get("/:customListName", function (req, res) {
  const customListName = _.capitalize(req.params.customListName);

  List.findOne({ name: customListName }).then(function (foundList) {
    if (!foundList) {
      // Create a new list
      const list = new List({
        name: customListName,
        items: defaultItems
      });

      list.save().then(function () {
        res.redirect("/" + customListName);
      }).catch(function (err) {
        console.log(err);
      });
    } else {
      // Show an existing list
      res.render(url("list"), { listTitle: foundList.name, newListItems: foundList.items });
    }
  }).catch(function (err) {
    console.log(err);
  });
});

app.post("/", function (req, res) {
  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new Item({
    name: itemName
  });

  if (listName === "Today") {
    item.save().then(function () {
      res.redirect("/");
    });
  } else {
    List.findOne({ name: listName }).then(function (foundList) {
      foundList!.items.push(item);
      foundList!.save();
      res.redirect("/" + listName);
    }).catch(function (err) {
      console.log(err);
    });
  }
});

app.post("/delete", function (req, res) {
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "Today") {
    Item.findByIdAndRemove(checkedItemId).then(function () {
      console.log("Successfully deleted checked item.");
      res.redirect("/");
    }).catch(function (err) {
      console.log(err);
    });
  } else {
    List.findOneAndUpdate(
      { name: listName },
      { $pull: { items: { _id: checkedItemId } } }
    ).then(function (foundList) {
      res.redirect("/" + listName);
    }).catch(function (err) {
      console.log(err);
    });
  }
});

app.get("/about", function (req, res) {
  res.render(url("about"));
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
