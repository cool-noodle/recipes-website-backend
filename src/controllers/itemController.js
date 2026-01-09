const Item = require("../model/itemModel");

const getAllItems = async (req, res) => {
    const result = await Item.find().sort({ _id: 1 });
    res.status(200).json(result);
}

const getSearchedItems = async (req, res) => {
    const { q } = req.query.q || req.query.query || '';

    try {
        const filter = q ? { name: { $regex: q, $options: 'i' } } : {};
        const items = await Item.find(filter);

        res.status(200).json(items);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }

    // try {
    //     let items;
    //     if (q) {
    //         items = await Item.find({ name: { $regex: q, $options: 'i' } })
    //     }

    //     res.status(200).json(items);

    // } catch (error) {
    //     res.status(500).json({ message: "No items found" })
    // }
}

const getSingleItem = async (req, res) => {
    const { id } = req.params;
    try {
        const item = await Item.findById(id);
        res.json(item);
    } catch (error) {
        req.status(500).json({ message: 'No items found' })
    }
}

module.exports = {
    getAllItems,
    getSearchedItems,
    getSingleItem
}