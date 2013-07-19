Ext.define('HSF.view.Speakers', {
	extend: 'Ext.List',
	xtype: 'speakerslist',
	requires: ['HSF.store.Speakers'],

	config:{
		grouped: true,
		itemTpl: '{firstName} {lastName}',
		store: 'Speakers',
		onItemDisclosure: true,
	} 

})