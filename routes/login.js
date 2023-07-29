module.exports = {
    route: (app, path) => {
       app.post('/login', function(req, res){

        if (!req.body) {
            return res.sendStatus(400)
        }
        var customer = {};
        customer.email = req.body.email;
        customer.upwd = req.body.upwd;
        if (req.bosy.email == "abc@com.au" && req.body.upwd == "123"){
            customer.valid = true;
        }else{
            customer.valid = false;
        }

        res.send(customer);
       })
    }
}