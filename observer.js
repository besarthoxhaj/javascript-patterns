/**
 *	Observer pattern
 *
 */

function observer (initialValue) {

	var storeValue    = initialValue;
	var storeListener = [];

	function handler (listener) {

		if (listener) {
			return storeListener.push(listener);
		}

		return storeValue;
	}

	handler.set = function (newValue) {

		storeValue = newValue;

		storeListener.forEach(function (listener) {

			listener(newValue);
		});
	}

	return handler;
}