import axios from "axios";
require('dotenv').config();

class ServicesApi{
    constructor() {
        this.servicesApi = axios.create({
            baseURL: 'http://localhost5000/services',
            withCredentials: true
        });
    }

    createService (id, body) {
        return this.servicesApi.put(`/${id}`, body);
    }

    getServices() {
        return this.servicesApi.get(`/`).then(({data}) => data);
    }

    getService(id) {
        return this.servicesApi.get(`/${id}`).then(({ data }) => data);
    }

    editService(id, body) {
        return this.servicesApi.put(`/${id}`, body);
    }

    deleteService(id) {
        return this.servicesApi.delete(`/${id}`);
    }
}

const servicesApi = new ServicesApi();

export default servicesApi;