Ext.define('MVC.controller.LoginController',{
	extend:'Ext.app.Controller',
	
	
	init: function(){		
		 this.control({
	            'mvc-LoginView > button#CheckLogin' : {
	                click : this.onLoginButtonClick
	            }
	        });
	},
	onLoginButtonClick : function(btn) {
		 var loginView = btn.up('mvc-LoginView');
	        
			//get the form inputs
	        var data = loginView.getValues();
	       // console.log(data);
	       var LoginAsVal = data.LoginAsValue;
	       var userName = data.username;
	       var passWd = data.password;
	       if(LoginAsVal == 'CU')
	       {
	    	 if(userName == 'testuser' && passWd == '12345')  
	    		 {
	    		    Ext.Msg.alert('Status', 'Logged in  successfully.');	
	    		    Ext.getCmp('masterviewid').setActiveItem();
	    		 }
	    	 else
	    		 {
	    		 	Ext.Msg.alert('Status', 'Invalid Credentials');
	    		 }
	       }
	       else
	    	   {
	    	   
	    	   }
	}
	
});