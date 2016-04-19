sap.ui.define(["sap/ui/core/mvc/Controller"],
	function (Controller) {
		"use strict";

	return Controller.extend("sap.ui.demo.db.controller.App", {
		formatMapUrl: function(sStreet, sZip, sCity, sCountry) {
			return "https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=500x300&markers="
			+ jQuery.sap.encodeURL(sStreet + ", " + sZip +  " " + sCity + ", " + sCountry);
		},

		onValidateButtonPress: function (oEvent) {
			var self = this;
			var allElements = this.getView().findElements(true);

			allElements.forEach(function (input) {
				if (input.data('required') !== 'true') {
                    return;
                }
				// XXX This block below should call binding validation, but it doesn't XXX
				input.setValue(''); // XXX
				input.fireEvent('change', {
					value: ''
				});
			});
		}
	});
});
