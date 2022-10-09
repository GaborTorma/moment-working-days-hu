import moment from '@gabortorma/moment-working-days';

import specialDays from './special-days.js';

const holidays = [];
const forcedBusinessDays = [];

for (const day of specialDays) {
	if (day.type === '1') {
		holidays.push(day.date);
	} else {
		forcedBusinessDays.push(day.date);
	}
}

moment.updateLocale('hu', {
	holidays,
	holidayFormat: 'YYYY-MM-DD',
	forcedBusinessDays,
	forcedBusinessDaysFormat: 'YYYY-MM-DD',
});

export default moment;
