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
				xtype: 'container',
				layout: 'card',
				autoEl: 'div',
				dockedItems:[
    	        {
        	    	xtype: 'toolbar',
                	title: 'About Me',
	        	},
	        	{
	        		xtype: 'panel',
	        		html: 'My name is Christopher Sturgess. I am currently enrolled in Computer Science at the University of Waterloo, in my 2B term. I' + "'" + 've always had a passion for programming and software development, and I hope to continue working with new technology throughout my life.'
				}]
            },
            {
            	html : 'Item 2',
                style: 'background-color: #5E99CC'
        	}
           	]
        });
    }
});