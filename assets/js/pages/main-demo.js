!function(o){"use strict";let e=!1;function n(){this.$body=o("body")}function i(n){console.log("showInfoAlert"),n?(o("#push-good").removeClass("d-none"),o("#push-bad").addClass("d-none")):(o("#push-bad").removeClass("d-none"),o("#push-good").addClass("d-none"))}function t(){let o=setInterval(function(){var n;OneSignal.User.PushSubscription.id?(clearInterval(o),OneSignalDeferred.push(function(n){console.log("add notification event listener"),n.Notifications.addEventListener("permissionChange",s)}),e=!0,n={value:"OneSignalStart",timestamp:(new Date).getTime()},n=JSON.stringify(n),sessionStorage.setItem("OneSignalStart",n),console.log("OneSignal Started: "+n),OneSignalDeferred.push(async function(n){var o=await n.Notifications.permission,n=(console.log("Check Permission - OneSignal.User",n.User.PushSubscription.id),n.User.PushSubscription.optedIn);console.log("optedIn: "+n),console.log("permission: "+o),i(!!n)})):console.log("Waiting for OneSignal.User.PushSubscription.id",OneSignal.User.PushSubscription.id)},200)}function s(n){console.log("permission Changed",n),console.log(""+n),i(n)}function l(){OneSignalDeferred.push(async function(n){var o=await n.Notifications.permission,e=n.User.PushSubscription.optedIn;o||e?o&&!e&&(n.User.PushSubscription.optIn(),i(!0)):n.Notifications.requestPermission()})}function a(){OneSignalDeferred.push(async function(n){await n.Notifications.permission&&(n.User.PushSubscription.optOut(),i(!1))})}n.prototype.init=function(){console.log(window.performance.getEntriesByType("navigation"));try{console.log("OneSignal Init"),window.OneSignalDeferred=window.OneSignalDeferred||[],OneSignalDeferred.push(function(n){n.Debug.setLogLevel("debug"),n.init({appId:"a9ef011c-6a3d-4f5d-b00a-f76ff95790b4",safari_web_id:"web.onesignal.auto.39e347a3-7290-467c-af89-3542a6fc2365",notifyButton:{enable:!1},allowLocalhostAsSecureOrigin:!0})},function(){console.log("Permission Check"),t()},function(){console.log("function test")})}catch(n){console.log("OneSignal init error",n)}t(),o("#login-button").on("click",function(){OneSignalDeferred.push(function(n){console.log("login 123test"),n.login("123test"),sessionStorage.setItem("login","testUser");n=n.User.getTags();console.log("tags",n)})}),o("#logout-button").on("click",function(){OneSignalDeferred.push(function(){console.log("logout"),OneSignal.logout(),sessionStorage.removeItem("login");var n=OneSignal.User.getTags();console.log("tags",n)})}),o("#enable-push-button").on("click",function(){l()}),o("#disable-push-button").on("click",function(){a()}),o("#enable-push-button2").on("click",function(){l()}),o("#disable-push-button2").on("click",function(){a()}),o("#enable-push-button3").on("click",function(){l()}),o("#disable-push-button3").on("click",function(){a()}),o("#test-tags-button").on("click",function(){var e=sessionStorage.getItem("OneSignalStart");if(console.log("startJson: "+e),null!=e){var e=JSON.parse(e),i=(new Date).getTime().toString();let n=e.timestamp,o=new Date(0);o.setUTCMilliseconds(n);var t=i-o;console.log("OneSignal Started: ",o),console.log("OneSignal Started: ",e.timestamp,i),console.log("OneSignal Started: "+t)}OneSignalDeferred.push(function(n){var o=sessionStorage.getItem("login"),e=n.User.getTags();console.log("tags",e),o?(console.log("valid login",o),n.User.addTag("purchase","yes")):(console.log("NOT logged in"),n.User.addTag("anon-user","yes")),console.log("tags",e)})}),o("#os-button-container").on("click",function(){console.log("os-button-container click")})},o.DemoMain=new n,o.DemoMain.Constructor=n}(window.jQuery),function(o){"use strict";o(document).ready(function(n){o.DemoMain.init()})}(window.jQuery);