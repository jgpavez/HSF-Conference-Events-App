Ext.define('HSF.controller.Main', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			main: 'navigationpanel'
		},
		control: {
			'speakerslist': {
				disclose: 'showDetail'
			}
		}
	},

	showDetail: function()  { 
					this.getMain().push({
						xtype: 'speakersdetail'
					});
				}
});