class SITE {
	private root = '';

	HOME = `${this.root}/`;
	AUTH = `${this.root}/auth`;
	CATALOG = `${this.root}/catalog`;
	CLIENT = `${this.root}/client`;
	ABOUT = `${this.root}/about`;
	TERMS_DOC = `${this.root}/terms-of-use`;
	PRIVATE_DOC = `${this.root}/private-policy`;
	DELIVERY_DOC = `${this.root}/pay-delivery`;
	CONSULT_DOC = `${this.root}/???`;
}

export const SITE_PAGES = new SITE();
