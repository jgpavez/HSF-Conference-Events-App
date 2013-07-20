Ext.define('HSF.view.Map', {
    extend: 'Ext.Panel',
    xtype: 'mappanel',

    config: {
        title: 'Map',
        control: {
        'map[itemId="mapHomeView"]': {
            maprender: 'mapHomeViewMapRenderer'
         }
        }
    },

    mapHomeViewMapRenderer: function(comp, map) {
    var map = Ext.ComponentQuery.query('#mapHomeView')[0].getMap();

    var image = new google.maps.MarkerImage(
        'resources/images/point.png',
        new google.maps.Size(32, 31),
        new google.maps.Point(0, 0),
        new google.maps.Point(16, 31)
    );

    var shadow = new google.maps.MarkerImage(
        'resources/images/shadow.png',
        new google.maps.Size(64, 52),
        new google.maps.Point(0, 0),
        new google.maps.Point(-5, 42)
    );

    var position = new google.maps.LatLng(49.279989, -123.126333);

    var marker = new google.maps.Marker({
        position: position,
        title: 'test',
        shadow: shadow,
        icon: image,
        map: map
    });
    }


});
