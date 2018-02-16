const routes = (app, Moltin) => {

    app.get('/api/products', (req, res) => {
        Moltin.Products.All(data => {
            res.send(data);
        })
    });


}

module.exports = routes;