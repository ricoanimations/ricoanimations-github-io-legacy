"use strict";
/*
This file is part of web3.js.

web3.js is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

web3.js is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("./error_codes.js"), exports);
__exportStar(require("./web3_error_base.js"), exports);
__exportStar(require("./errors/account_errors.js"), exports);
__exportStar(require("./errors/connection_errors.js"), exports);
__exportStar(require("./errors/contract_errors.js"), exports);
__exportStar(require("./errors/ens_errors.js"), exports);
__exportStar(require("./errors/generic_errors.js"), exports);
__exportStar(require("./errors/provider_errors.js"), exports);
__exportStar(require("./errors/signature_errors.js"), exports);
__exportStar(require("./errors/transaction_errors.js"), exports);
__exportStar(require("./errors/utils_errors.js"), exports);
__exportStar(require("./errors/response_errors.js"), exports);
__exportStar(require("./errors/core_errors.js"), exports);
__exportStar(require("./errors/rpc_errors.js"), exports);
__exportStar(require("./errors/rpc_error_messages.js"), exports);
__exportStar(require("./errors/schema_errors.js"), exports);
//# sourceMappingURL=index.js.map