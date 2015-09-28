Ext.application({
    name : 'MVC',
    
    views : [
        'Master',
        'Detail'
    ],
    
    controllers : [
        'Master',
        'Detail'
    ],
    
    stores : [
        'People'
    ],

    launch : function() {
        Ext.create('Ext.container.Viewport', {
            layout : {
                type  : 'hbox',
                align : 'stretch'
            },
            
            items : [
                { 
                    xtype : 'mvc-MasterView' ,
                    flex  : 2
                },
                { 
                    xtype : 'mvc-DetailView',
                    flex  : 1
                }
            ]
        });
    }
});