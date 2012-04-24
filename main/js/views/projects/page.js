define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/projects/page.html'
], function($, _, Backbone, projectsPageTemplate){
  var ProjectsPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(projectsPageTemplate);
    }
  });
  return ProjectsPage;
});
