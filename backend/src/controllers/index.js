class IndexController {
    getItems(req, res) {
        // Logic to retrieve items from the database
        res.send("Get items");
    }

    createItem(req, res) {
        // Logic to create a new item in the database
        res.send("Create item");
    }
}

module.exports = IndexController;