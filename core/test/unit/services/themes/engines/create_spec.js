const should = require('should');
const sinon = require('sinon');
const themeEngines = require('../../../../../frontend/services/themes/engines');

describe('Themes: engines', function () {
    afterEach(function () {
        sinon.restore();
    });

    it('no engines', function () {
        const engines = themeEngines.create();
        engines.should.eql({
            'ghost-api': 'v0.1'
        });
    });

    describe('ghost-api', function () {
        it('v2', function () {
            const engines = themeEngines.create({
                engines: {
                    'ghost-api': 'v2'
                }
            });

            engines.should.eql({
                'ghost-api': 'v2'
            });
        });

        it('v10', function () {
            const engines = themeEngines.create({
                engines: {
                    'ghost-api': 'v10'
                }
            });

            engines.should.eql({
                'ghost-api': 'v0.1'
            });
        });

        it('^0.1', function () {
            const engines = themeEngines.create({
                engines: {
                    'ghost-api': '^0.1'
                }
            });

            engines.should.eql({
                'ghost-api': 'v0.1'
            });
        });

        it('^2', function () {
            const engines = themeEngines.create({
                engines: {
                    'ghost-api': '^2'
                }
            });

            engines.should.eql({
                'ghost-api': 'v2'
            });
        });

        it('2.0.0', function () {
            const engines = themeEngines.create({
                engines: {
                    'ghost-api': '2.0.0'
                }
            });

            engines.should.eql({
                'ghost-api': 'v2'
            });
        });

        it('2.17.0', function () {
            const engines = themeEngines.create({
                engines: {
                    'ghost-api': '2.17.0'
                }
            });

            engines.should.eql({
                'ghost-api': 'v2'
            });
        });

        it('3', function () {
            const engines = themeEngines.create({
                engines: {
                    'ghost-api': '3'
                }
            });

            engines.should.eql({
                'ghost-api': 'v0.1'
            });
        });

        it('canary', function () {
            const engines = themeEngines.create({
                engines: {
                    'ghost-api': 'canary'
                }
            });

            engines.should.eql({
                'ghost-api': 'canary'
            });
        });
    });
});
