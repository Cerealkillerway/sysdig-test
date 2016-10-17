import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
    version: attr('number'),
    createdOn: attr('date'),
    modifiedOn: attr('date'),
    name: attr('string'),
    description: attr('string'),
    severity: attr('number'),
    filter: attr('string'),
    timestamp: attr('date'),
    tags: attr('string')
});
