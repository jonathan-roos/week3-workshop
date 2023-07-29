module.exports = {
    route: (app, path) => {
        app.get('/test', function(req, res){
            let filepath = path.resolve('./www/test.html');
            res.sendFile(filepath);
        });
    }
}