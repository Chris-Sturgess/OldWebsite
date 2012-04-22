define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/future/page.html'
], function($, _, Backbone, futurePageTemplate){
  var FuturePage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(futurePageTemplate);
    }
  });
  return FuturePage;
});
