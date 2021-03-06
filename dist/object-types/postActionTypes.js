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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeCommentResponse = exports.LikeCommentInput = exports.GetCommentsInput = exports.GetCommentsResponse = exports.GetCommentInput = exports.GetCommentResponse = exports.CommentResposeI = exports.CommentRespose = exports.CommentInput = exports.CommentPostedReponse = void 0;
const type_graphql_1 = require("type-graphql");
let CommentPostedReponse = class CommentPostedReponse {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], CommentPostedReponse.prototype, "commented", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", Object)
], CommentPostedReponse.prototype, "error", void 0);
CommentPostedReponse = __decorate([
    type_graphql_1.ObjectType()
], CommentPostedReponse);
exports.CommentPostedReponse = CommentPostedReponse;
let CommentInput = class CommentInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CommentInput.prototype, "commentMsg", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], CommentInput.prototype, "comment_on_id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CommentInput.prototype, "comment_on", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CommentInput.prototype, "img", void 0);
CommentInput = __decorate([
    type_graphql_1.InputType()
], CommentInput);
exports.CommentInput = CommentInput;
let CommentRespose = class CommentRespose {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], CommentRespose.prototype, "comment_id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CommentRespose.prototype, "profileImg", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CommentRespose.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CommentRespose.prototype, "username", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CommentRespose.prototype, "commentMsg", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], CommentRespose.prototype, "comments", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], CommentRespose.prototype, "likes", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CommentRespose.prototype, "img", void 0);
__decorate([
    type_graphql_1.Field({ defaultValue: false }),
    __metadata("design:type", Boolean)
], CommentRespose.prototype, "liked", void 0);
CommentRespose = __decorate([
    type_graphql_1.ObjectType()
], CommentRespose);
exports.CommentRespose = CommentRespose;
let CommentResposeI = class CommentResposeI {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], CommentResposeI.prototype, "comment_id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CommentResposeI.prototype, "profileImg", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CommentResposeI.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CommentResposeI.prototype, "username", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CommentResposeI.prototype, "commentMsg", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CommentResposeI.prototype, "img", void 0);
CommentResposeI = __decorate([
    type_graphql_1.ObjectType()
], CommentResposeI);
exports.CommentResposeI = CommentResposeI;
let GetCommentResponse = class GetCommentResponse {
};
__decorate([
    type_graphql_1.Field(() => CommentRespose, { nullable: true }),
    __metadata("design:type", Object)
], GetCommentResponse.prototype, "comment", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", Object)
], GetCommentResponse.prototype, "error", void 0);
GetCommentResponse = __decorate([
    type_graphql_1.ObjectType()
], GetCommentResponse);
exports.GetCommentResponse = GetCommentResponse;
let GetCommentInput = class GetCommentInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], GetCommentInput.prototype, "fetchFrom", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], GetCommentInput.prototype, "comment_id", void 0);
GetCommentInput = __decorate([
    type_graphql_1.InputType()
], GetCommentInput);
exports.GetCommentInput = GetCommentInput;
let GetCommentsResponse = class GetCommentsResponse {
};
__decorate([
    type_graphql_1.Field(() => [CommentResposeI]),
    __metadata("design:type", Array)
], GetCommentsResponse.prototype, "comments", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", Object)
], GetCommentsResponse.prototype, "error", void 0);
GetCommentsResponse = __decorate([
    type_graphql_1.ObjectType()
], GetCommentsResponse);
exports.GetCommentsResponse = GetCommentsResponse;
let GetCommentsInput = class GetCommentsInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], GetCommentsInput.prototype, "fetchFrom", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], GetCommentsInput.prototype, "postId", void 0);
GetCommentsInput = __decorate([
    type_graphql_1.InputType()
], GetCommentsInput);
exports.GetCommentsInput = GetCommentsInput;
let LikeCommentInput = class LikeCommentInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], LikeCommentInput.prototype, "comment_id", void 0);
LikeCommentInput = __decorate([
    type_graphql_1.InputType()
], LikeCommentInput);
exports.LikeCommentInput = LikeCommentInput;
let LikeCommentResponse = class LikeCommentResponse {
};
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], LikeCommentResponse.prototype, "liked", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", Object)
], LikeCommentResponse.prototype, "error", void 0);
LikeCommentResponse = __decorate([
    type_graphql_1.ObjectType()
], LikeCommentResponse);
exports.LikeCommentResponse = LikeCommentResponse;
//# sourceMappingURL=postActionTypes.js.map