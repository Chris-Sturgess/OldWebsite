Ext.application({
	name: 'Sencha',
    
    launch: function() {
    	Ext.create('Ext.Carousel', {
        	fullscreen: true,
        	direction: 'horizontal',
           
        	defaults: {
           		styleHtmlContent: true
           	},
           
			items: [
			{
				xtype: 'panel',
				dockedItems:[
    	        {
        	    	xtype: 'toolbar',
                	title: 'About Me',
	        	}],
	        	html: '<h3>About Me</h3><p>My name is Christopher Sturgess. I am currently enrolled in Computer Science at the University of Waterloo, in my 2B term. I' + "'" + 've always had a passion for programming and software development, and I hope to continue working with new technology throughout my life.<br></p><p>You can contact me here:</p><table bordercolor="#000000"><tr><td>Email:</td><td/><td>christopher.sturgess@gmail.com</td></tr><tr><td>Github:</td><td/><td><a href="https://github.com/Chris-Sturgess">Chris-Sturgess</a></td></tr><tr><td>Stack Overflow:</td><td/><td><a href="http://stackoverflow.com/users/1144012/csturgess">CSturgess</a></td></tr></table><p>This website was developed using backbone.js and require.js.</p>'

            },
            {
            	html : 'Item 2',
                style: 'background-color: #5E99CC'
        	}
           	]
        });
    }
});