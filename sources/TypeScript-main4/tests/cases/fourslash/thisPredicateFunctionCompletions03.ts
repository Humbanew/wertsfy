/// <reference path="fourslash.ts" />

//// class RoyalGuard {
////     isLeader(): this is LeadGuard {
////         return this instanceof LeadGuard;
////     }
////     isFollower(): this is FollowerGuard {
////         return this instanceof FollowerGuard;
////     }
//// }
////
//// class LeadGuard extends RoyalGuard {
////     lead(): void {};
//// }
////
//// class FollowerGuard extends RoyalGuard {
////     follow(): void {};
//// }
////
//// let a: RoyalGuard = new FollowerGuard();
//// if (a.is/*1*/Leader()) {
////     a./*2*/;
//// }
//// else if (a.is/*3*/Follower()) {
////     a./*4*/;
//// }
////
//// interface GuardInterface {
////    isLeader(): this is LeadGuard;
////    isFollower(): this is FollowerGuard;
//// }
////
//// let b: GuardInterface;
//// if (b.is/*5*/Leader()) {
////     b./*6*/;
//// }
//// else if (b.is/*7*/Follower()) {
////     b./*8*/;
//// }
////
//// let leader/*13*/Status = a.isLeader();
//// function isLeaderGuard(g: RoyalGuard) {
////    return g.isLeader();
//// }
//// let checked/*14*/LeaderStatus = isLeader/*15*/Guard(a);

verify.completions(
    { marker: ["2", "6"], exact: ["lead", "isLeader", "isFollower"] },
    { marker: ["4", "8"], exact: ["follow", "isLeader", "isFollower"] },
);
