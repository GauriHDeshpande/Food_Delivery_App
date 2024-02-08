const create = async (model, data) => {
    try {
        const response = await new model(data).save();
        return response;
    } catch (error) {
        console.log(error);
    }
};

const destroy = async (model, id) => {
    try {
        const response = await model.findByIdAndDelete(id);
        return response;
    } catch (error) {
        console.log(error);
    }
};

const update = async (model, id, data) => {
    try {
        const response = await model.findByIdAndUpdate(id, data);
        return response;
    } catch (error) {
        console.log(error);
    }
};

const getAll = async (model) => {
    try {
        const response = await model.find();
        return response;
    } catch (error) {
        console.log(error);
    }
};

const getById = async (model, id) => {
    try {
        const response = await model.findById(id);
        return response;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    create, destroy, update, getAll, getById
};