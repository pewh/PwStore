import Ember from 'ember';
import CreatePageController from '../../mixins/create-page-controller';

export default Ember.ObjectController.extend(CreatePageController, {
  // TODO clear `price` to 0, not ''
  modelName: 'item'
});
