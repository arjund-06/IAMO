const { prisma } = require('../application')

exports.createUpdatedComponent = async function(req, res) {
    uid = "qwertyu"
    const newComponentsData = {
        id: req.body.id,
        orgId: req.body.orgId,
        processor_name: req.body.processor_name,
        ram: req.body.ram,
        ram_slots: req.body.ram_slots,
        graphics_card: req.body.graphics_card,
        vram: req.body.vram,
        peripheral_devices: req.body.peripheral_devices,
        last_date_of_update: req.body.last_date_of_update,
    };

    const newComponent = await prisma.updated_components.create({
        data: newComponentsData,
    });

    res.send(newComponent);
}


exports.getAllUpdatedComponents = async function(req, res) {
    const r = await prisma.updated_components.findMany()
    res.send(r);
}

exports.getUpdatedComponents = async function(req, res) {
    const r = await prisma.updated_components.findMany({
        where: {
            OR: [{ id: { contains: req.params.id } }]
        }
    })
    res.send(r);
}