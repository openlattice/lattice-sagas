import moment from 'moment';
import PACKAGE from '../../package.json';

const BANNER = `
${PACKAGE.name} - v${PACKAGE.version}
${PACKAGE.description}
${PACKAGE.homepage}

Copyright (c) 2017-${moment().year()}, OpenLattice, Inc. All rights reserved.
`;

const ENTRY_FILE_NAME = 'index.js';
const LIB_FILE_NAME = 'lattice-sagas';
const LIB_NAMESPACE = 'LatticeSagas';

export default {
  BANNER,
  ENTRY_FILE_NAME,
  LIB_FILE_NAME,
  LIB_NAMESPACE
};
