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

	showDetail: function(list,record)  { 
					this.getMain().push({
						xtype: 'speakersdetail',
						data: record.data
					});
				}
});