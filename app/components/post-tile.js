import Ember from 'ember';


export default Ember.Component.extend({
  actions: {
    edit(post, params) {
      this.sendAction('edit', post, params);
    },
    delete(post) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction( 'destroyPost', post);
      }
    }
  }
});
