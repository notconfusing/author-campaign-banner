const FA_EDIT_MIN = 500; // FA: 500 edits
const FA_DAY_MIN = 365; // FA: 1 year
const AR_USER_GROUP = 'autoreview'; // AR: Autoreviewer
const DE_USER_GROUP = 'autoreview'; // DE: "Active Sichter" Editors with permission to flag revisions.
const DE_EDIT_MIN = 300; // DE: with 300 edit minimum
const DE_DAY_MIN = 60; // DE: having had an account for 60 days
const PL_USER_GROUP = 'editor'; // PL: "editor" group Editors with permission to flag revisions:
const getDaysRegistered = function ( userReg ) {
	const r = userReg.registration; // a wikimedia datestring
	const regDate = new Date( Number( r.slice( 0, 4 ) ), ( Number( r.slice( 4, 6 ) ) - 1 ), Number( r.slice( 6, 8 ) ), Number( r.slice( 8, 10 ) ), Number( r.slice( 10, 12 ) ), Number( r.slice( 12, 14 ) ) );
	const now = new Date();
	const msSinceReg = now - regDate;
	const msInDay = 86400000;
	return Math.ceil( msSinceReg / msInDay );
};

export function decideShow( lang, userReg, userEditCount, userGroups, bannerImpressionCount, bannerImpressionMax ) {
	// If any of these values are null, the user is probably not logged in, so we don't want to display.
	if ( lang === null ||
        userReg === null ||
        userEditCount === null ||
        userGroups === null ||
		bannerImpressionCount === null ||
        bannerImpressionMax === null ) {
		return false;
	}
	// check the impression count as well
	else if ( bannerImpressionCount > bannerImpressionMax ) {
		return false;
	// check language specific features
	} else if ( lang === 'de' ) {
		const isAutoReview = userGroups.indexOf( DE_USER_GROUP ) >= 0;
		const daysEnough = getDaysRegistered( userReg ) >= DE_DAY_MIN;
		const editEnough = userEditCount >= DE_EDIT_MIN;
		return ( isAutoReview && daysEnough && editEnough );
	} else if ( lang === 'pl' ) {
		return ( userGroups.indexOf( PL_USER_GROUP ) >= 0 );
	} else if ( lang === 'ar' ) {
		return ( userGroups.indexOf( AR_USER_GROUP ) >= 0 );
	} else if ( lang === 'fa' ) {
		const daysEnough = getDaysRegistered( userReg ) >= FA_DAY_MIN;
		const editEnough = userEditCount >= FA_EDIT_MIN;
		return ( daysEnough && editEnough );
	}
	// If language not here.
	else {
		return false;
	}
}

export function getDecidingFactors() {
	const userReg = mw.config.get( 'wgNoticeUserData' );
	const siteName = mw.config.get( 'wgSiteName' );
	const userName = mw.config.get( 'wgUserName' );
	const userEditCount = mw.config.get( 'wgUserEditCount' );
	const userGroups = mw.config.get( 'wgUserGroups' );
	const siteLang = mw.config.get( 'wgContentLanguage' );
	return { userReg: userReg, siteName: siteName, userName: userName,
		userEditCount: userEditCount, userGroups: userGroups, siteLang: siteLang };
}

function getBannerImpCount( bannerId ) {
	var cookieValue, cookieData;

	if ( $.cookie( 'centralnotice_single_banner_impression_count' ) ) {
		cookieValue = $.cookie( 'centralnotice_single_banner_impression_count' );
		cookieData = cookieValue.split( '|' );
		if ( cookieData[ 0 ] === bannerId ) {
			return parseInt( cookieData[ 1 ], 10 );
		}
	}
	return 0;
}

function getCookieExpiryDate() {
	return new Date( ( new Date() ).getFullYear() + 1, 0, 1 );
}

export function increaseBannerImpCount( bannerId ) {
	var impCount = getBannerImpCount( bannerId );

	$.cookie( 'centralnotice_single_banner_impression_count', bannerId + '|' + ( impCount + 1 ), {
		expires: getCookieExpiryDate(),
		path: '/'
	} );
	return ( impCount + 1 );
}
