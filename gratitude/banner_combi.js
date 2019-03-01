require( './css/styles.pcss' );

import { AuthorsBanner } from './AuthorsBanner';
import { decideShow, getDecidingFactors, getLocalizations } from './banner_var';

$( document ).ready( function () {
	const bannerName = 'CS18_grat_combi';
	const bannerTemplate = require( './templates/banner01.hbs' );
	const dF = getDecidingFactors();
	let bannerEnabled = decideShow( dF.siteLang, dF.userReg, dF.userEditCount,
		dF.userGroups );
	console.log( `Banner enabled? ${bannerEnabled}` );
	console.log( `Lang? ${dF.siteLang} userReg ${dF.userReg} editcount ${dF.userEditCount}` );
	const bannerLocalizations = getLocalizations(dF.siteLang);
	bannerEnabled = true;
	if ( bannerEnabled ) {
		const authorsBanner = new AuthorsBanner( bannerName, bannerTemplate, bannerLocalizations );
		authorsBanner.init();
	}

} );
