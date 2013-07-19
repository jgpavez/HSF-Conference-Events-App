Ext.define('HSF.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'HSF.view.Speakers',
        'HSF.view.SpeakersDetail',
        'HSF.controller.Main',
        'HSF.view.Navigation',
        'HSF.view.Map',
        'HSF.view.Agenda'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'HSF',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'HSF Conference App'
                },

                html: [
                    "HTML Conference App WOOOOW !! ASD ASD"
                ].join("")
            },
            {
                title: 'Speakers',
                iconCls: 'action',
                layout: 'fit',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Speakers'
                    },
                    {
                        xtype: 'navigationpanel'

                    },
                ]
            },
            {
                xtype: 'mappanel'
            },
                    {
                xtype: 'agendapanel'
            },


        ]
    }
});
