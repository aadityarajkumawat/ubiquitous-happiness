"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchResolver = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const constants_1 = require("../constants");
const Images_1 = require("../entities/Images");
const User_1 = require("../entities/User");
let SearchResolver = class SearchResolver {
    getSearchResults({ req }, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.session.userId) {
                return { error: "user not authenticated", profiles: [] };
            }
            const profiles = yield typeorm_1.getConnection()
                .createQueryBuilder()
                .select("name, username, id")
                .from(User_1.User, "user")
                .where("user.username LIKE :name", { name: `%${options.search}%` })
                .execute();
            const f = [];
            for (let i = 0; i < profiles.length; i++) {
                const ii = profiles[i].id;
                const user = yield User_1.User.findOne({ where: { id: ii } });
                const img = yield Images_1.Images.findOne({
                    where: { user, type: "profile" },
                });
                f.push(Object.assign(Object.assign({}, profiles[i]), { img: img ? img.url : "" }));
            }
            return { error: null, profiles: f };
        });
    }
};
__decorate([
    type_graphql_1.Query(() => constants_1.DisplayProfiles),
    __param(0, type_graphql_1.Ctx()),
    __param(1, type_graphql_1.Arg("options")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, constants_1.Searched]),
    __metadata("design:returntype", Promise)
], SearchResolver.prototype, "getSearchResults", null);
SearchResolver = __decorate([
    type_graphql_1.Resolver()
], SearchResolver);
exports.SearchResolver = SearchResolver;
//# sourceMappingURL=search.js.map