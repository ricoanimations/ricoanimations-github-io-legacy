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
var __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new(P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }

        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }

        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTransactionGasPricing = void 0;
const web3_validator_1 = require("web3-validator");
const web3_errors_1 = require("web3-errors");
const web3_utils_1 = require("web3-utils");
// eslint-disable-next-line import/no-cycle
const rpc_method_wrappers_js_1 = require("../rpc_method_wrappers.js");
// eslint-disable-next-line import/no-cycle
const transaction_builder_js_1 = require("./transaction_builder.js");

function getEip1559GasPricing(transaction, web3Context, returnFormat) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function*() {
        const block = yield(0, rpc_method_wrappers_js_1.getBlock)(web3Context, web3Context.defaultBlock, false, returnFormat);
        if ((0, web3_validator_1.isNullish)(block.baseFeePerGas))
            throw new web3_errors_1.Eip1559NotSupportedError();
        if (!(0, web3_validator_1.isNullish)(transaction.gasPrice)) {
            const convertedTransactionGasPrice = (0, web3_utils_1.format)({
                format: 'uint'
            }, transaction.gasPrice, returnFormat);
            return {
                maxPriorityFeePerGas: convertedTransactionGasPrice,
                maxFeePerGas: convertedTransactionGasPrice,
            };
        }
        return {
            maxPriorityFeePerGas: (0, web3_utils_1.format)({
                format: 'uint'
            }, (_a = transaction.maxPriorityFeePerGas) !== null && _a !== void 0 ? _a : web3Context.defaultMaxPriorityFeePerGas, returnFormat),
            maxFeePerGas: (0, web3_utils_1.format)({
                format: 'uint'
            }, ((_b = transaction.maxFeePerGas) !== null && _b !== void 0 ? _b : BigInt(block.baseFeePerGas) * BigInt(2) +
                BigInt((_c = transaction.maxPriorityFeePerGas) !== null && _c !== void 0 ? _c : web3Context.defaultMaxPriorityFeePerGas)), returnFormat),
        };
    });
}

function getTransactionGasPricing(transaction, web3Context, returnFormat) {
    return __awaiter(this, void 0, void 0, function*() {
        const transactionType = (0, transaction_builder_js_1.getTransactionType)(transaction, web3Context);
        if (!(0, web3_validator_1.isNullish)(transactionType)) {
            if (transactionType.startsWith('-'))
                throw new web3_errors_1.UnsupportedTransactionTypeError(transactionType);
            // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-2718.md#transactions
            if (Number(transactionType) < 0 || Number(transactionType) > 127)
                throw new web3_errors_1.UnsupportedTransactionTypeError(transactionType);
            if ((0, web3_validator_1.isNullish)(transaction.gasPrice) &&
                (transactionType === '0x0' || transactionType === '0x1'))
                return {
                    gasPrice: yield(0, rpc_method_wrappers_js_1.getGasPrice)(web3Context, returnFormat),
                        maxPriorityFeePerGas: undefined,
                        maxFeePerGas: undefined,
                };
            if (transactionType === '0x2') {
                return Object.assign({
                    gasPrice: undefined
                }, (yield getEip1559GasPricing(transaction, web3Context, returnFormat)));
            }
        }
        return undefined;
    });
}
exports.getTransactionGasPricing = getTransactionGasPricing;
//# sourceMappingURL=get_transaction_gas_pricing.js.map