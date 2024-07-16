sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ust/prasad/purchaseorderapp1/test/integration/FirstJourney',
		'ust/prasad/purchaseorderapp1/test/integration/pages/POsList',
		'ust/prasad/purchaseorderapp1/test/integration/pages/POsObjectPage',
		'ust/prasad/purchaseorderapp1/test/integration/pages/POItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, POItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ust/prasad/purchaseorderapp1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePOItemsObjectPage: POItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);