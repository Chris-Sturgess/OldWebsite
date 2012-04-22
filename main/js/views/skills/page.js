define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/skills/page.html'
], function($, _, Backbone, skillsPageTemplate){
  var SkillsPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(skillsPageTemplate);
    }
  });
  return SkillsPage;
});
