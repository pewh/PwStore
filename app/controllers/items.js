import Ember from 'ember';
import MasterPageController from '../mixins/master-page-controller';

export default Ember.ArrayController.extend(MasterPageController, {
  route: {
    index: 'items',
    create: 'items.create',
    edit: 'items.edit'
  }
});
