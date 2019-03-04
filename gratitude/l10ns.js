export function getLocalizations( lang ) {
	const l10ns = { en: { bannerTitleText: 'Learn about wikipedia. this is going to be a lot of text, align automatically.', bannerSubtitleText: 'CivilServant presents', bannerButtonText: 'click here to learn more' },
		ar: { bannerTitleText: 'ساهم في بيئة أفضل للمشاركة الويكيبيديّة العربية!', bannerSubtitleText: 'كن جزء من دراسة عن تحسين بيئة المشاركة الويكيبيديّة العربية!', bannerButtonText: 'للمزيد من المعلومات' },
		de: { bannerTitleText: 'Hilf mit, die Wikipedia zu erforschen!', bannerSubtitleText: 'Nimm an einer Studie teil, die die Beteiligung in der Wikipedia untersucht.', bannerButtonText: 'Mehr erfahren' },
		fa: { bannerTitleText: 'برای یک ویکی‌پدیای دوستانه‌تر', bannerSubtitleText: 'در یک تحقیق برای بهبود جامعه ویکی‌پدیای فارسی شرکت کنید. برای کسب اطلاعات بیشتر اینجا کلیک کنید.', bannerButtonText: 'اطلاعات بیشت' },
		pl: { bannerTitleText: 'Wesprzyj rozwój Wikipedii!', bannerSubtitleText: 'Weź udział w badaniu naukowym, które pomoże naszej społeczności stać się bardziej życzliwą', bannerButtonText: 'Dowiedz się więcej' }
	};

	return l10ns[ lang ];
}
