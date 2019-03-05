export function getLocalizations( lang ) {
	const l10ns = { en: { bannerTitleQuestion: 'Learn about wikipedia. this is going to be a lot of text, align automatically.', bannerSubtitleAsk: 'CivilServant presents', bannerButtonNext: '→ learn more', bannerDir: 'ltr' },
		ar: { bannerTitleQuestion: 'ساهم في بيئة أفضل للمشاركة الويكيبيديّة العربية!', bannerSubtitleAsk: 'كن جزء من دراسة عن تحسين بيئة المشاركة الويكيبيديّة العربية!', bannerButtonNext: '← للمزيد من المعلومات', bannerDir: 'rtl' },
		de: { bannerTitleQuestion: 'Hilf mit, die Wikipedia zu erforschen!', bannerSubtitleAsk: 'Nimm an einer Studie teil, die die Beteiligung in der Wikipedia untersucht.', bannerButtonNext: '→ Mehr erfahren', bannerDir: 'ltr' },
		fa: { bannerTitleQuestion: 'برای یک ویکی‌پدیای دوستانه‌تر', bannerSubtitleAsk: 'در یک تحقیق برای بهبود جامعه ویکی‌پدیای فارسی شرکت کنید. برای کسب اطلاعات بیشتر اینجا کلیک کنید.', bannerButtonNext: '← اطلاعات بیشت', bannerDir: 'rtl' },
		pl: { bannerTitleQuestion: 'Wesprzyj rozwój Wikipedii!', bannerSubtitleAsk: 'Weź udział w badaniu naukowym, które pomoże naszej społeczności stać się bardziej życzliwą', bannerButtonNext: '→Dowiedz się więcej', bannerDir: 'ltr' }
	};

	return l10ns[ lang ];
}
