import Ember from 'ember';
//
// document.querySelector('textarea').addEventListener('mouseup', function () {
//   window.mySelection = this.value.substring(this.selectionStart, this.selectionEnd)
//   // window.getSelection().toString();
// })
//
export default Ember.Component.extend({
  actions: {
    getInput() {
      console.log(window.mySelection)
    }
  }
})
