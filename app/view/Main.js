Ext.define('HSF.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
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
                        xtype: 'list',
                        data: [
                            {
                                title: 'Batman'
                            },
                            {
                                title: 'Superman'
                            },
                        ],
                        itemTpl: '{title}'

                    }
                ]
            }
        ]
    }
});
