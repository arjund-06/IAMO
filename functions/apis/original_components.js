const { connection } = require('../application')

exports.createComponent = function(req, res) {
    uid = "qwertyu"
    const newComponents = {
        id: req.body.id,
        processor_name: req.body.processor_name,
        ram: req.body.ram,
        ram_slots: req.body.ram_slots,
        graphics_card: req.body.graphics_card,
        vram: req.body.vram,
        peripheral_devices: req.body.peripheral_devices,
        date_of_addition: req.body.date_of_addition,
        last_date_of_update: req.body.last_date_of_update,
    };
    connection.query(`INSERT INTO original_components SET ?`, newComponents, function(error, results, fields) {
        if (error) throw error;
        r = results;
        res.send({ r: r, data: newComponents });
        return;
    });
}


exports.getAllComponents = function(req, res){
    let r;
    connection.query(`SELECT * FROM original_components`,function(error,results,fields){
        if(error) throw error;
        r=results;
        res.send(r);
        return;
    });
}

exports.getComponentById = function(req,res){
    let r;
    connection.query(`SELECT * FROM original_components WHERE id = '${req.params.id}'`,function(error,results,fields) {
        if(error) throw error;
        r = results;
        // console.log("R",r);
        res.send(r);
        return;
    });
}