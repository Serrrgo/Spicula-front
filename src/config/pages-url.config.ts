class SITE {
	private root = '';

	HOME = `${this.root}/`;
	AUTH = `${this.root}/auth`;
	CATALOG = `${this.root}/catalog`;
	USER = `${this.root}/user`;
	ABOUT = `${this.root}/about`;
	TERMS_DOC = `${this.root}/terms-of-use`;
	PRIVATE_DOC = `${this.root}/private-policy`;
	DELIVERY_DOC = `${this.root}/pay-delivery`;
	CONSULT_DOC = `${this.root}/???`;
}

export const SITE_PAGES = new SITE();

class DASHBOARD {
	private root = SITE_PAGES.USER;

	CART = `${this.root}/cart`;
	ORDERS = `${this.root}/orders`;
	PROFILE = `${this.root}/profile`;
	FAVS = `${this.root}/favorites`;
	ADDRESSES = `${this.root}/addresses`;
	SUPPORT = `${this.root}/support`;
}

export const DASHBOARD_PAGES = new DASHBOARD();
