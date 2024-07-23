const formatFormData = (strData: string) => {
	const fstLtr = strData?.trim().split('')[0].toUpperCase();
	const futherLtrs = strData?.trim().slice(1).toLowerCase();
	const res = fstLtr + futherLtrs;
	return res;
};

export default formatFormData;
