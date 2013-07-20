Ext.define('HSF.view.SpeakersDetail', {
	extend: 'Ext.Panel',
	xtype: 'speakersdetail',
	config: {
		styleHtmlContent: true,
		scrollable: 'vertical',
		title: 'Details',
		tpl:[
			'<img src=\"{img}\" width=\"80\" height=\"80\">{firstName} {lastName}<br>{shortDescription}<br>{description}'
		]
	}
});