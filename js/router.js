// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
	'vm'
], function ($, _, Backbone, Vm) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Pages
      '/about': 'about',	
      '/projects': 'projects',
      '/backbone/:section': 'backbone',
      '/skills': 'skills',
      '/future': 'future',
      '/work': 'work',
    
      // Default - catch all
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(options){
		var appView = options.appView;
    var router = new AppRouter(options);
		router.on('route:about', function () {
			require(['views/about/page'], function (AboutPage) {
				var aboutPage = Vm.create(appView, 'AboutPage', AboutPage);
				aboutPage.render();
			});
		});
		router.on('route:defaultAction', function (actions) {
			require(['views/dashboard/page'], function (DashboardPage) {
        var dashboardPage = Vm.create(appView, 'DashboardPage', DashboardPage);
        dashboardPage.render();
      });
		});
		router.on('route:projects', function () {
	   require(['views/projects/page'], function (ProjectsPage) {
        var modulePage = Vm.create(appView, 'ProjectsPage', ProjectsPage);
        modulePage.render();
      });	  	
		});
		router.on('route:backbone', function (section) {
      require(['views/skills/page'], function (SkillsPage) {
        var skillsPage = Vm.create(appView, 'SkillsPage', SkillsPage, {section: section});
        skillsPage.render();
      });
		});
		router.on('route:future', function () {
			require(['views/future/page'], function (FuturePage) {
				var futurePage = Vm.create(appView, 'FuturePage', FuturePage);
				futurePage.render();
			});
		});
        router.on('route:work', function () {
			require(['views/work/page'], function (WorkPage) {
				var workPage = Vm.create(appView, 'WorkPage', WorkPage);
				workPage.render();
			});
		});
        router.on('route:skills', function () {
			require(['views/skills/page'], function (SkillsPage) {
				var skillsPage = Vm.create(appView, 'SkillsPage', SkillsPage);
				skillsPage.render();
			});
		});
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
