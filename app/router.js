import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
this.route('about',function(){
	this.route('location');
	this.route('job');
});
});

export default Router;
