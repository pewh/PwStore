import Ember from 'ember';
import CreatePageController from '../../mixins/create-page-controller';

export default Ember.ObjectController.extend(CreatePageController, {
  modelName: 'customer'
});
