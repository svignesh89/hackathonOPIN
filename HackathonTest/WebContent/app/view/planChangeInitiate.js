/**
 * 
 */

Ext.create('Ext.form.Panel', {
    renderTo: document.body,
    title: 'Plan Change Form',
    height: 150,
    width: 300,
    bodyPadding: 10,
    defaultType: 'textfield',
    url :'',
    items: [
        {
            fieldLabel: 'Old Plan Id',
            name: 'oPlanId'
        },
        {
            fieldLabel: 'Old Plan Description',
            name: 'oPlan'
        },
        {
            fieldLabel: 'New Plan Id',
            name: 'nPlanId'
        },
        {
            fieldLabel: 'New Plan Description',
            name: 'nPlan'
        },
        {
        	xtype     : 'textareafield',
            grow      : true,
        	fieldLabel: 'Remarks',
            name: 'Remarks'
        },
        
    ],
buttons: [
          {
              text: 'Submit',
              handler: function() {
                  var form = this.up('form'); // get the form panel
                  if (form.isValid()) { // make sure the form contains valid data before submitting
                      form.submit({
                          success: function(form, action) {
                             Ext.Msg.alert('Success', action.result.msg);
                          },
                          failure: function(form, action) {
                              Ext.Msg.alert('Failed', action.result.msg);
                          }
                      });
                  } else { // display error alert if the data is invalid
                      Ext.Msg.alert('Invalid Data', 'Please correct form errors.')
                  }
              }
          }
      ]
});