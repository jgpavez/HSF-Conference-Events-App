Ext.define('HSF.view.Navigation', {
    extend: 'Ext.navigation.View',
    xtype: 'navigationpanel',
    requires: [
        'HSF.view.Speakers',
        'HSF.view.SpeakersDetail'
    ],

    config: {
        title: 'Speakers',
        items: [{
            xtype: 'speakerslist'
        }]
    }
});