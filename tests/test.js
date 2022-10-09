import moment from '../index.js';
import chai from 'chai';

const expect = chai.expect;

describe('Moment Business Days hu', function () {
	describe('.isBusinessDay (2022-10-15 is a forced working day)', function () {
		it('should be true', function (done) {
			expect(moment(new Date('2022-10-15')).isBusinessDay()).to.be.true;
			done();
		});
	});
	describe('.isHoliday (2022-11-01 is a holiday)', function () {
		it('should be true', function (done) {
			expect(moment(new Date('2022-01-01')).isHoliday()).to.be.true;
			done();
		});
	});
});
