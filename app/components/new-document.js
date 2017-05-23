import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    getInput() {
      console.log(this.$('#doc').val())
    }
  }
})
