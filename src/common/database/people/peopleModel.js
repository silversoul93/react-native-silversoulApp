import DatabaseHelper from '../databaseHelper';

class PeopleModel {
    constructor(name, surname) {
        this.id = DatabaseHelper.guid();
        this.name = name;
        this.surname = surname;
    }
}

module.exports = PeopleModel;