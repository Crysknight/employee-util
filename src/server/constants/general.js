import path from 'path';

export const SERVER_PATH = '/vagrant/src/server';

export const AVATARS_PATH = path.resolve(__dirname, '../static');

export const TOKEN_SECRET = 'disMemb37_at_5p.m.';

export const SWC_ORIGIN = 'chrome-extension://omalebghpgejjiaoknljcfmglgbpocdp';

export const DISALLOWED_ACTIONS = [
    'initialize',
    'employees/getEmployees',
    'measures/getMeasures'
];

export const MESSAGE_TYPE_SUBSCRIPTION = 'SUBSCRIPTION';
