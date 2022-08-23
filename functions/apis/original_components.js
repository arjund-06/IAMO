const { prisma } = require('../application')

exports.createOriginalComponent = async function(req, res) {
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
        date_of_addition: req.body.date_of_addition,
    };

    const newComponent = await prisma.original_components.create({
        data: newComponentsData,
    });

    res.send(newComponent);
}


exports.getAllOriginalComponents = async function(req, res) {
    const r = await prisma.original_components.findMany()
    res.send(r);
}

exports.getOriginalComponentById = async function(req, res) {
    const r = await prisma.original_components.findMany({
        where: {
            OR: [{ id: { contains: req.params.id } }]
        }
    })
    res.send(r);
}