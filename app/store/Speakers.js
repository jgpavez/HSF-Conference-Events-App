Ext.define('HSF.store.Speakers', {
	extend: 'Ext.data.Store',

	config: {
		model: 'HSF.model.Speakers',
		sorters: 'lastName',
		grouper: function(record) {
			return record.get('lastName')[0];
		},
		data: [
			{ firstName: 'Lori', lastName: 'Beer', shortDesc: 'Executive Vice President, WellPoint, Inc.',
			description: 'In January 2011, as Lori Beer sat in the audience watching IBM Watson defeat Jeopardy’s top champions, a thought crossed her mind – how can WellPoint, one of the nation’s largest health benefits companies' , 
			img: 'http://gracehopper.org/2012/assets/Lori-Beer-sqr.jpg'}


		]
	}
})