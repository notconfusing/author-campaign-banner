export function getLocalizations( lang ) {
	const l10ns = { en: { bannerTitleQuestion: 'Help us to understand Wikipedia better.', bannerSubtitleAsk: 'Participate in a study to help us investigate contribution to Wikipedia.', bannerButtonNext: '→ Learn more.', bannerDir: 'ltr' , bannerLink: 'https://meta.wikimedia.org/wiki/CivilServant\'s_Wikimedia_studies', bannerImpressionMax: 20 },
		ar: { bannerTitleQuestion: 'ساهم في بيئة أفضل للمشاركة الويكيبيديّة العربية!', bannerSubtitleAsk: 'كن جزء من دراسة عن تحسين بيئة المشاركة الويكيبيديّة العربية!', bannerButtonNext: '← للمزيد من المعلومات', bannerDir: 'rtl', bannerLink: 'https://meta.wikimedia.org/wiki/CivilServant\'s_Wikimedia_studies', bannerImpressionMax: 20  },
		de: { bannerTitleQuestion: 'Hilf mit, die Wikipedia zu erforschen!', bannerSubtitleAsk: 'Nimm an einer Studie teil, die die Beteiligung in der Wikipedia untersucht.', bannerButtonNext: '→ Mehr erfahren', bannerDir: 'ltr', bannerLink: 'https://meta.wikimedia.org/wiki/CivilServant\'s_Wikimedia_studies', bannerImpressionMax: 20  },
		fa: { bannerTitleQuestion: 'برای یک ویکی‌پدیای دوستانه‌تر', bannerSubtitleAsk: 'در یک تحقیق برای بهبود جامعه ویکی‌پدیای فارسی شرکت کنید. برای کسب اطلاعات بیشتر اینجا کلیک کنید.', bannerButtonNext: '← اطلاعات بیشت', bannerDir: 'rtl', bannerLink: 'https://meta.wikimedia.org/wiki/CivilServant\'s_Wikimedia_studies', bannerImpressionMax: 20  },
		pl: { bannerTitleQuestion: 'Wesprzyj rozwój Wikipedii!', bannerSubtitleAsk: 'Weź udział w badaniu naukowym, które pomoże naszej społeczności stać się bardziej życzliwą', bannerButtonNext: '→Dowiedz się więcej', bannerDir: 'ltr', bannerLink: 'https://meta.wikimedia.org/wiki/CivilServant\'s_Wikimedia_studies', bannerImpressionMax: 20  }
	};

	return l10ns[ lang ];
}
