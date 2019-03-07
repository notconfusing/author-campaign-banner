require( './css/styles.pcss' );

import { AuthorsBanner } from './AuthorsBanner';
import { decideShow, getDecidingFactors, increaseBannerImpCount } from './banner_var';
import { getLocalizations } from './l10ns';

$( document ).ready( function () {
	const bannerName = 'CS18_grat_combi';
	const bannerTemplate = require( './templates/banner01.hbs' );
	const bannerImpressionCount = increaseBannerImpCount( bannerName );
	let dF = getDecidingFactors();
	const bannerLocalizations = getLocalizations( dF.siteLang );
	dF.siteLang = 'pl';
	let bannerEnabled = decideShow( dF.siteLang, dF.userReg, dF.userEditCount,
		dF.userGroups, bannerImpressionCount, bannerLocalizations.bannerImpressionMax );
	bannerEnabled = true;
	if ( bannerEnabled ) {
		const authorsBanner = new AuthorsBanner( bannerName, bannerTemplate, bannerLocalizations );
		authorsBanner.init();
	}

} );
