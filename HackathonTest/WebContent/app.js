Ext.application({
    name : 'MVC',
    appFolder:'app',
    
    views : [
       // 'Master',
        //'Detail'
       'Login'
    ],
    
    controllers : [
        'Master',
        'Detail'
    ],
    
    stores : [
        'People', 'LoginAs'
    ],

    launch : function() {
        Ext.create('Ext.container.Viewport', {
            layout : {
                type  : 'border'//,
               // align : 'stretch'
            },
            
            items : [
                { region: 'center',
                    xtype : 'mvc-LoginView'// ,
              /*      flex  : 2
                },
                { 
                    xtype : 'mvc-LoginView',
                    flex  : 1*/
                }
            ]
        });
    }
});