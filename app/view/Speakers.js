Ext.define('HSF.view.Speakers', {
	extend: 'Ext.List',
	xtype: 'speakerslist',
	requires: ['HSF.store.Speakers'],

	config:{
		grouped: true,
		itemTpl: '<img src=\"{img}\" width=\"20\" height=\"20\"></img> {firstName} {lastName}',
		store: 'Speakers',
		onItemDisclosure: true,
	} 

})