import Database from './../database';
import PeopleModel from './peopleModel';

let repository = Database.getRepository();


let PeopleService = {
    findAll: function (sortBy) {
        if (!sortBy) sortBy = [['name', false], ['surname', true]];
        return repository.objects('People').sorted(sortBy);
    },

    save: function (person) {
        if (repository.objects('People').filtered("surname = '" + person.surname + "'").length) return;

        repository.write(() => {
            repository.create('People', person);
        })
    },

    update: function (callback) {
        if (!callback) return;
        repository.write(() => {
            callback();
        });
    }
};

PeopleService.save(new PeopleModel("Francesco", "Francomano"));

module.exports = PeopleService;