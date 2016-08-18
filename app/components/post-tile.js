import Ember from 'ember';


export default Ember.Component.extend({
  actions: {
    delete(posts) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction( 'destroyPosts', posts);
      }
    }
  }
});
