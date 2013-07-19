Ext.define('HSF.store.Speakers', {
	extend: 'Ext.data.Store',

	config: {
		model: 'HSF.model.Speakers',
		sorters: 'lastName',
		grouper: function(record) {
			return record.get('lastName')[0];
		},
		data: [
			{ firstName: 'Sergey', lastName: 'Brin'},
			{ firstName: 'Homer', lastName: 'Simpson'},
			{ firstName: 'James', lastName: 'Bucharman'},
			{ firstName: 'Millard', lastName: 'Fillmore'},
			{ firstName: 'Franklin', lastName: 'Pierce'},
			{ firstName: 'Homer', lastName: 'Simpson'},
			{ firstName: 'Homer', lastName: 'Simpson'},
			{ firstName: 'Homer', lastName: 'Simpson'},
			{ firstName: 'Homer', lastName: 'Simpson'},
			{ firstName: 'Homer', lastName: 'Simpson'},
			{ firstName: 'Homer', lastName: 'Simpson'},
			{ firstName: 'Homer', lastName: 'Simpson'},
			{ firstName: 'Homer', lastName: 'Simpson'},
			{ firstName: 'Homer', lastName: 'Simpson'},
			{ firstName: 'Homer', lastName: 'Simpson'},
			{ firstName: 'Homer', lastName: 'Simpson'},
			{ firstName: 'Homer', lastName: 'Simpson'},

		]
	}
})