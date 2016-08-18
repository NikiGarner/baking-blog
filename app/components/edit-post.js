import Ember from 'ember';

export default Ember.Component.extend({
  editPostForm: false,
  actions: {
    editPostForm() {
      this.set('editPostForm', true);
    },
    edit(post) {
      var params = {
        date: this.get('date'),
        title: this.get('title'),
        time: this.get('time'),
        serving: this.get('serving'),
        text: this.get('text'),
      };
      this.set('editPostForm', false);
      this.sendAction('edit', post, params);
    }
  }
});
