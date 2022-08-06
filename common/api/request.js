export default {
	common: {
		baseUrl: "http://192.168.0.103:3000/api",
		data: {},
		header: {
			"Content-Type": "application/json",
			"Content-Type": "application/x-www-urlencoded"
		},
		method: "GET",
		dataType: "json"
	},
	request(options = {}) {
		uni.showLoading({
			title:"加载中"
		});
		options.url = this.common.baseUrl + options.url;
		options.data = options.data || this.common.data;
		options.header = options.header || this.common.header;
		options.method = options.method || this.common.method;
		options.dataType = options.dataType || this.common.dataType;
		return new Promise((resolve, reject) => {
			uni.request({
				...options,
				success: (result) => {
					if (result.statusCode !== 200) {
						return reject();
					}
					let data = result.data.data;
					resolve(data);
					setTimeout(()=>{
						uni.hideLoading();
					},2000);
				}
			})
		})
	}
}
