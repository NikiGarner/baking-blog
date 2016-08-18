import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    save1() {
      var params = {
        date: this.get('date'),
        title: this.get('title'),
        time: this.get('time'),
        serving: this.get('serving'),
        text: this.get('text'),
      };
      this.set('addNewPost', false);
      this.sendAction('save2', params);
    }
  }
});
