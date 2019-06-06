export function getLocalizations( lang ) {
	const l10ns = { en: { bannerTitleQuestion: 'Help us to understand Wikipedia better.', bannerSubtitleAsk: 'Participate in a study to help us investigate contribution to Wikipedia.', bannerButtonNext: '→ Learn more.', bannerDir: 'ltr' , bannerLink: 'https://meta.wikimedia.org/wiki/CivilServant\'s_Wikimedia_studies', bannerImpressionMax: 20 },
		ar: { bannerTitleQuestion: 'ساهم في بيئة أفضل للمشاركة الويكيبيديّة العربية!', bannerSubtitleAsk: 'كن جزء من دراسة عن تحسين بيئة المشاركة الويكيبيديّة العربية!', bannerButtonNext: '← للمزيد من المعلومات', bannerDir: 'rtl', bannerLink: 'https://ar.wikipedia.org/wiki/%D9%88%D9%8A%D9%83%D9%8A%D8%A8%D9%8A%D8%AF%D9%8A%D8%A7:%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA_%D9%84%D9%84%D9%85%D8%AA%D8%B7%D9%88%D8%B9%D9%8A%D9%86_%D8%A7%D9%84%D9%85%D8%B4%D8%A7%D8%B1%D9%83%D9%8A%D9%86', bannerImpressionMax: 20  },
		de: { bannerTitleQuestion: 'Hilf mit, die Wikipedia zu erforschen!', bannerSubtitleAsk: 'Nimm an einer Studie teil, die die Beteiligung in der Wikipedia untersucht.', bannerButtonNext: '→ Mehr erfahren', bannerDir: 'ltr', bannerLink: 'https://de.wikipedia.org/wiki/Wikipedia:CivilServant_-_Studie_zur_Wikipedia', bannerImpressionMax: 20  },
		fa: { bannerTitleQuestion: 'برای یک ویکی‌پدیای دوستانه‌تر', bannerSubtitleAsk: 'در یک تحقیق برای بهبود جامعه ویکی‌پدیای فارسی شرکت کنید. برای کسب اطلاعات بیشتر اینجا کلیک کنید.', bannerButtonNext: '← اطلاعات بیشت', bannerDir: 'rtl', bannerLink: 'https://meta.wikimedia.org/wiki/CivilServant%27s_Wikimedia_studies/Wikipedia_study_(Persian)', bannerImpressionMax: 20  },
		pl: { bannerTitleQuestion: 'Wesprzyj rozwój Wikipedii!', bannerSubtitleAsk: 'Weź udział w badaniu naukowym, które pomoże naszej społeczności stać się bardziej życzliwą', bannerButtonNext: '→Dowiedz się więcej', bannerDir: 'ltr', bannerLink: 'https://pl.wikipedia.org/wiki/Wikipedia:Badanie_Wikipedii', bannerImpressionMax: 20  }
	};

	return l10ns[ lang ];
}
