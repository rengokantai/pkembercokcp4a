import Ember from 'ember';

export default Ember.Route.extend({
	model(param){
	return this.get('store').findRecord('student',param.student_id);
}
});
