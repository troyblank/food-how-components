import Chance from 'chance';

const chance = new Chance();

export default {
    button: chance.word(),
    checked: chance.word(),
    'no-result-message': chance.word(),
    'shopping-list': chance.word()
};
