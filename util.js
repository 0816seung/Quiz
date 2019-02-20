function getSelectedRadioButton(radios) {
	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			return i;
		}
	}
	return false;
}