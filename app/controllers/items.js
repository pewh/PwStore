import Ember from 'ember';
import MasterPageController from '../mixins/master-page-controller';

export default Ember.ArrayController.extend(MasterPageController, {
  modelName: 'item'
});
