class Item {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    static getSchema() {
        return {
            name: { type: String, required: true },
            description: { type: String, required: true }
        };
    }

    save() {
        // Logic to save the item to the database
    }

    static findAll() {
        // Logic to retrieve all items from the database
    }

    static findById(id) {
        // Logic to retrieve an item by its ID from the database
    }
}

module.exports = Item;