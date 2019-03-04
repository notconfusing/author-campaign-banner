require( './css/styles.pcss' );

import { AuthorsBanner } from './AuthorsBanner';
import { decideShow, getDecidingFactors } from './banner_var';
import { getLocalizations } from './l10ns';

$( document ).ready( function () {
	const bannerName = 'CS18_grat_combi';
	const bannerTemplate = require( './templates/banner01.hbs' );
	let dF = getDecidingFactors();
	dF.siteLang = 'fa';
    let bannerEnabled = decideShow( dF.siteLang, dF.userReg, dF.userEditCount,
		dF.userGroups );
    bannerEnabled = true;
	const bannerLocalizations = getLocalizations( dF.siteLang );
	if ( bannerEnabled ) {
		const authorsBanner = new AuthorsBanner( bannerName, bannerTemplate, bannerLocalizations );
		authorsBanner.init();
	}

} );
