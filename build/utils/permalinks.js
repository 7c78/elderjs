"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Helper function to allow permalinks to be referenced by obj.routeName.
 * It also handles adding of the /dev prefix when settings.server is true.
 *
 * @param {Object} { routes, settings = {} }
 * @returns {Object} This object allows for referncing permalinks as obj.routeName()
 */
const permalinks = ({ routes, settings }) => Object.keys(routes).reduce((out, cv) => {
    const prefix = settings.server && settings.server.perfix ? settings.server.perfix : '';
    out[cv] = (data) => `${prefix}${routes[cv].permalink({ request: data, settings })}`;
    return out;
}, {});
exports.default = permalinks;