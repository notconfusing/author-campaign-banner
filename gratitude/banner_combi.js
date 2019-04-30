require( './css/styles.pcss' );

import { AuthorsBanner } from './AuthorsBanner';
import { decideShow, getDecidingFactors, increaseBannerImpCount } from './banner_var';
import { getLocalizations } from './l10ns';

$( document ).ready( function () {
	const bannerName = 'CS18_grat_combi';
	const bannerTemplate = require( './templates/banner01.hbs' );
	const bannerImpressionCount = increaseBannerImpCount( bannerName );
	let dF = getDecidingFactors();
	// dF.siteLang = 'de';
	console.log("deciding factors", dF);
	const bannerLocalizations = getLocalizations( dF.langToUse );
	console.log("bannerLocalizations", bannerLocalizations);
	let bannerEnabled = decideShow( dF.langToUse, dF.userReg, dF.userEditCount,
		dF.userGroups, bannerImpressionCount, bannerLocalizations.bannerImpressionMax );
	// bannerEnabled = true;
	console.log("bannerEnabled:", bannerEnabled);
	if ( bannerEnabled ) {
		const authorsBanner = new AuthorsBanner( bannerName, bannerTemplate, bannerLocalizations );
		authorsBanner.init();
	}

} );
