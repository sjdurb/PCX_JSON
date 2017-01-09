


function PCXController (_name, _addr) {
	this.name = _name;
	
	if (!/^(f|ht)tps?:\/\//i.test(_addr)) {
		_addr = "http://" + _addr;
	}
	this.address = _addr;
	
	this.getBusInfo = function(callback) {

		var xhr = new XMLHttpRequest();
		xhr.open('GET', this.address + '/rtuGetBus');
		xhr.timeout = 3000;

		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					this.busInfo = JSON.parse(xhr.responseText);
					if (callback != null)
						callback(this.busInfo);
				}
				else {
					callback(null);
				}
			}
		};
		
		xhr.send(null);

	}

	return this;
}

