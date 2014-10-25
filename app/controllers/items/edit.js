import Ember from 'ember';
import EditPageController from 'pw-store/mixins/edit-page-controller';

export default Ember.ObjectController.extend(EditPageController, {
  modelName: 'item'
});
