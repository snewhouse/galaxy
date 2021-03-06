define( [ 'plugin/charts/nvd3/common/wrapper' ], function( NVD3 ) {
    return Backbone.Model.extend({
        initialize: function( app, options ) {
            options.type = 'multiBarHorizontalChart';
            options.makeConfig = function( nvd3_model ) {
                nvd3_model.stacked( true );
            };
            new NVD3( app, options );
        }
    });
});