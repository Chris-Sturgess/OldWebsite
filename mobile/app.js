Ext.application({
	name: 'Sencha',
    
    launch: function() {
    
    //Projects List
    	Ext.define('Project', {
			extend: 'Ext.data.Model',
			config: {
				fields: ['name', 'description']
			}
		});
		
		var projectStore = Ext.create('Ext.data.Store', {
		   model: 'Project',
		   sorters: 'name',
		
		   data: [
			   { name: 'Crosby', description: 'A tablet application designed using HTML5, Zepto.js, and Ruby on Rails to measure the reaction time of medical patients. Built to tablet devices with PhoneGap.'  },
			   { name: 'Foodlink', description: 'A mobile application for the Waterloo Region developed with HTML5, PhoneGap, and the Google Maps API. Designed to allow users to find local food stores.'  },
			   { name: 'Wheatley', description: 'A Playbook application designed using HTML5 designed as a sign-in system for companies. Keeps track of current guests, with many customizable fields for data. Also creates QR Code badges for guests, allowing them to scan to sign in instead of re-entering all other information.'  },
			   { name: 'FoodAtTheHub.com', description: 'An HTML website using Ruby on Rails to store information regarding food currently available at the Communitech Kitchen. Available at <a href="http://www.foodatthehub.com">www.foodatthehub.com</a>'  },
			   { name: 'Yarn Shop', description: 'A native iOS application that allows customers to view selections and colours of yarn on their mobile devices.  <a href="http://itunes.apple.com/app/yarn-shop/id507312566?mt=8/">Currently available on the App Store.</a>'  },
			   { name: 'www.christophersturgess.com', description: 'An online resume built using backbone.js and require.js for the main website, as well as Sencha Touch 2.0 for the mobile site. Available <a href="http://www.christophersturgess.com">here</a>. '  },
		   ]
		});
    
    //Work List
    	Ext.define('Project', {
			extend: 'Ext.data.Model',
			config: {
				fields: ['name', 'date', 'location', 'description']
			}
		});
		
		var workStore = Ext.create('Ext.data.Store', {
		   model: 'Project',
		
		   data: [
			   { name: 'Communitech Apps Factory', location: 'Kitchener, Ontario', date: 'January 2012 - April 2012',  description: '<ul><li>Used various web technologies to develop mobile applications on a wide range of devices</li><li>Worked with other students to create a total of 4 mobile applications over the course of the workterm</li></ul>'  },
			   { name: 'Camilla Valley Farm Weavers Supply', location: 'Orangeville, Ontario', date: 'August 2011 - September 2011',  description: "<ul><li>Developed an iOS application to organize and display yarn colour swatch samples to be used by the online retailer's customers to help make purchasing decisions</li></ul>"  },
			   { name: 'Tim Hortons', location: 'Orangeville, Ontario', date: 'April 2009 - September 2010',  description: "<ul><li>Performed various functions including: front counter cashier, food preparation, unloading supply trucks and clean up.</li><li>Gained experience in customer relations and working within a team environment</li></ul>"  }
		   ]
		});
    
    //Skills List
    	Ext.define('Project', {
			extend: 'Ext.data.Model',
			config: {
				fields: ['name', 'description']
			}
		});
		
		var skillsStore = Ext.create('Ext.data.Store', {
		   model: 'Project',
		   sorters: 'name',
		
		   data: [
			   { name: 'Platforms', description: '<ul><li>iOS</li><li>Android</li><li>Blackberry</li><li>Playbook</li><li>Mac OSX</li><li>Windows</li><li>Web</li></ul>'  },
			   { name: 'Languages', description: '<ul><li>C</li><li>C++</li><li>Java</li><li>JavaScript</li><li>Actionscript</li><li>Visual Basic</li><li>Objective-C</li><li>HTML (Including experience with HTML5)</li><li>Ruby on Rails</li></ul>'  },
			   { name: 'Libraries', description: '<ul><li>backbone.js</li><li>require.js</li><li>zepto.js</li><li>jquery</li><li>jquery mobile</li><li>underscore.js</li><li>Phonegap</li></ul>'  },
			   { name: 'Programs', description: '<ul><li>Adobe Photoshop</li><li>Adobe Flash</li><li>Aptana Studio</li><li>Open Office</li><li>Microsoft Office</li><li>XCode</li></ul>'  },
			   { name: 'Other Hobbies and Interests', description: '<ul><li>Video Game Design</li><li>Fantasy and Science Fiction Novels</li><li>Member of Waterloo Science Fiction Club</li><li>Member of Waterloo Euchre Club</li><li>Complex Games</li><li>Improvisational Theatre</li><li>Philosophy</li><li>Curling</li><li>Martial Arts</li><li>Ultimate Frisbee</li></ul>'  }
		   ]
		});
    
    
    	Ext.create('Ext.Carousel', {
        	fullscreen: true,
        	direction: 'horizontal',
           
        	defaults: {
           		styleHtmlContent: true
           	},
           
			items: [
			{
				xtype: 'container',
				items:[
    	        {
        	    	xtype: 'toolbar',
                	title: 'About Me',
                	docked: 'top'
	        	},
	        	{
	        		xtype: 'panel',
	        		scrollable: true,
	        		html: '<div><p>My name is Christopher Sturgess. I am currently enrolled in Computer Science at the University of Waterloo, in my 2B term. <br> I' + "'" + 've always had a passion for programming and software development, and I hope to continue working with new technology throughout my life.</p><p> You can contact me at: <br><a href="mailto:chris@christophersturgess.com">chris@christophersturgess.com</a><br><a href="tel:2269297613">226-929-7613</a></p><hr><br><p>This site was designed using Sencha Touch 2.0, Backbone.js, and require.js. Full website available <a href="http://chris-sturgess.github.com/main/index.html">here</a>. Scroll left and right to view the various pages.</p></div>'
				}]
            },
            {
				xtype: 'list',
				itemTpl: '<div class="project"><strong>{name}</strong><br>{description}</div>',
				store: projectStore,
				width: '100%',
				padding: '0',
				items: [
				{
					xtype: 'toolbar',
					title: 'Projects',
					docked: 'top'
				}]
        	},
        	{
				xtype: 'list',
				itemTpl: '<div class="work"><strong>{name}</strong><br>{location}, {date}<br>{description}</div>',
				store: workStore,
				width: '100%',
				padding: '0',
				items: [
				{
					xtype: 'toolbar',
					title: 'Work History',
					docked: 'top'
				}]
        	},
        	{
				xtype: 'list',
				itemTpl: '<div class="skills"><strong>{name}</strong><br>{description}</div>',
				store: skillsStore,
				width: '100%',
				padding: '0',
				items: [
				{
					xtype: 'toolbar',
					title: 'Knowledge and Skills',
					docked: 'top'
				}]
        	}]
        });
    }
});