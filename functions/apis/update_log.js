const { prisma, cors } = require('../application')

exports.createUpdateLog = async function(req, res) {
    cors(req, res, async() => {
        uid = "qwertyu"

        const newLogData = {
            id: req.params.id,
            orgId: req.params.orgId,
            old_processor_name: req.params.old_processor_name,
            new_processor_name: req.params.new_processor_name,
            old_ram: req.params.old_ram,
            new_ram: req.params.new_ram,
            old_ram_slots: req.params.old_ram_slots,
            new_ram_slots: req.params.new_ram_slots,
            old_graphics_card: req.params.old_graphics_card,
            new_graphics_card: req.params.new_graphics_card,
            old_vram: req.params.old_vram,
            new_vram: req.params.new_ram,
            old_peripheral_devices: req.params.old_peripheral_devices,
            new_peripheral_devices: req.params.new_peripheral_devices,
            last_date_of_update: req.params.last_date_of_update,
        };

        const newLog = await prisma.updated_components.create({
            data: newLogData,
        });

        res.send(newLog);
    });
}


exports.getAllUpdateLogs = async function(req, res) {
    cors(req, res, async() => {
        const r = await prisma.update_log.findMany();
        res.send(r);
    });
}

exports.getUpdateLogByDeviceId = async function(req, res) {
    cors(req, res, async() => {

        const r = await prisma.update_log.findMany({
            where: {
                OR: [{ id: { contains: req.params.device_id } }]
            }
        });
        res.send(r);
    });
}