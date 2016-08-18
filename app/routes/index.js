import Ember from 'ember';

  export default Ember.Route.extend({
    model() {
      return this.store.findAll('post');
    },

    actions: {
      destroyPosts(posts) {
        posts.destroyRecord();
        this.transitionTo('index');
      }
    }
});
