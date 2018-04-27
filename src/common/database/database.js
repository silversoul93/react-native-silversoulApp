import Realm from 'realm';

let repository = new Realm({
    schema: [
        {
            name: 'People',
            primaryKey: 'id',
            properties: {
                id: { type: 'string', indexed: true },
                name: 'string',
                surname: 'string'
            }
        }
    ]
});

let Database = {
    getRepository: function () {
        console.log("db path: ", repository.path);
        return repository;
    }
};

module.exports = Database;