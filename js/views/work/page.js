define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/work/page.html'
], function($, _, Backbone, workPageTemplate){
  var WorkPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(workPageTemplate);
    }
  });
  return WorkPage;
});
