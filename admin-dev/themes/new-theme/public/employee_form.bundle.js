window.employee_form=function(e){function t(o){if(n[o])return n[o].exports;var s=n[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=483)}({0:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},1:function(e,t,n){"use strict";t.__esModule=!0;var o=n(19),s=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,s.default)(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()},10:function(e,t,n){var o=n(6),s=n(12);e.exports=n(2)?function(e,t,n){return o.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},11:function(e,t,n){var o=n(3);e.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},12:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},14:function(e,t,n){var o=n(3);e.exports=function(e,t){if(!o(e))return e;var n,s;if(t&&"function"==typeof(n=e.toString)&&!o(s=n.call(e)))return s;if("function"==typeof(n=e.valueOf)&&!o(s=n.call(e)))return s;if(!t&&"function"==typeof(n=e.toString)&&!o(s=n.call(e)))return s;throw TypeError("Can't convert object to primitive value")}},15:function(e,t,n){var o=n(18);e.exports=function(e,t,n){if(o(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,o){return e.call(t,n,o)};case 3:return function(n,o,s){return e.call(t,n,o,s)}}return function(){return e.apply(t,arguments)}}},16:function(e,t,n){var o=n(3),s=n(5).document,r=o(s)&&o(s.createElement);e.exports=function(e){return r?s.createElement(e):{}}},17:function(e,t,n){e.exports=!n(2)&&!n(7)(function(){return 7!=Object.defineProperty(n(16)("div"),"a",{get:function(){return 7}}).a})},18:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},19:function(e,t,n){e.exports={default:n(20),__esModule:!0}},2:function(e,t,n){e.exports=!n(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},20:function(e,t,n){n(21);var o=n(4).Object;e.exports=function(e,t,n){return o.defineProperty(e,t,n)}},21:function(e,t,n){var o=n(8);o(o.S+o.F*!n(2),"Object",{defineProperty:n(6).f})},3:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},399:function(e,t,n){"use strict";(function(e){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),r=o(s),a=n(1),i=o(a),u=n(60),d=o(u),c=n(455),l=o(c),f=n(457),p=o(f),h=n(482),w=o(h),g=function(){function t(){return(0,r.default)(this,t),this.shopChoiceTreeSelector=w.default.shopChoiceTree,this.shopChoiceTree=new d.default(this.shopChoiceTreeSelector),this.employeeProfileSelector=w.default.profileSelect,this.tabsDropdownSelector=w.default.defaultPageSelect,this.shopChoiceTree.enableAutoCheckChildren(),new l.default(w.default.addonsConnectForm,w.default.addonsLoginButton),new p.default(w.default.changePasswordInputsBlock,w.default.showChangePasswordBlockButton,w.default.hideChangePasswordBlockButton,w.default.generatePasswordButton,w.default.oldPasswordInput,w.default.newPasswordInput,w.default.confirmNewPasswordInput,w.default.generatedPasswordDisplayInput,w.default.passwordStrengthFeedbackContainer),this._initEvents(),this._toggleShopTree(),{}}return(0,i.default)(t,[{key:"_initEvents",value:function(){var t=this,n=e(this.employeeProfileSelector),o=n.data("get-tabs-url");e(document).on("change",this.employeeProfileSelector,function(){return t._toggleShopTree()}),e(document).on("change",this.employeeProfileSelector,function(n){e.get(o,{profileId:e(n.currentTarget).val()},function(e){t._reloadTabsDropdown(e)},"json")})}},{key:"_reloadTabsDropdown",value:function(t){var n=e(this.tabsDropdownSelector);n.empty();for(var o in t)if(t[o].children.length>0&&t[o].name){var s=this._createOptionGroup(t[o].name);for(var r in t[o].children)t[o].children[r].name&&s.append(this._createOption(t[o].children[r].name,t[o].children[r].id_tab));n.append(s)}else t[o].name&&n.append(this._createOption(t[o].name,t[o].id_tab))}},{key:"_toggleShopTree",value:function(){var t=e(this.employeeProfileSelector),n=t.data("admin-profile");e(this.shopChoiceTreeSelector).closest(".form-group").toggleClass("d-none",t.val()==n)}},{key:"_createOptionGroup",value:function(t){return e('<optgroup label="'+t+'">')}},{key:"_createOption",value:function(t,n){return e('<option value="'+n+'">'+t+"</option>")}}]),t}();t.default=g}).call(t,n(40))},4:function(e,t){var n=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},40:function(e,t){!function(){e.exports=window.jQuery}()},455:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),r=o(s),a=n(1),i=o(a),u=window.$,d=function(){function e(t,n){return(0,r.default)(this,e),this.addonsConnectFormSelector=t,this.$loadingSpinner=u(n),this._initEvents(),{}}return(0,i.default)(e,[{key:"_initEvents",value:function(){var e=this;u("body").on("submit",this.addonsConnectFormSelector,function(t){var n=u(t.currentTarget);t.preventDefault(),t.stopPropagation(),e._connect(n.attr("action"),n.serialize())})}},{key:"_connect",value:function(e,t){var n=this;u.ajax({method:"POST",url:e,dataType:"json",data:t,beforeSend:function(){n.$loadingSpinner.show(),u('button.btn[type="submit"]',n.addonsConnectFormSelector).hide()}}).then(function(e){1===e.success?location.reload():(u.growl.error({message:e.message}),n.$loadingSpinner.hide(),u('button.btn[type="submit"]',n.addonsConnectFormSelector).fadeIn())},function(){u.growl.error({message:u(n.addonsConnectFormSelector).data("error-message")}),n.$loadingSpinner.hide(),u('button.btn[type="submit"]',n.addonsConnectFormSelector).show()})}}]),e}();t.default=d},456:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),r=o(s),a=n(1),i=o(a),u=window.$,d=function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,r.default)(this,e),this.minLength=o.minLength||8,this.$feedbackContainer=u(t),{watchPasswordStrength:function(e){return n.watchPasswordStrength(e)},generatePassword:function(e){return n.generatePassword(e)}}}return(0,i.default)(e,[{key:"watchPasswordStrength",value:function(e){var t=this;u.passy.requirements.length.min=this.minLength,u.passy.requirements.characters="DIGIT",e.each(function(e,n){var o=u("<span>");o.insertAfter(u(n)),u(n).passy(function(e,n){t._displayFeedback(o,e,n)})})}},{key:"generatePassword",value:function(e){e.passy("generate",this.minLength)}},{key:"_displayFeedback",value:function(e,t,n){var o=this._getPasswordStrengthFeedback(t);e.text(o.message),e.removeClass("text-danger text-warning text-success"),e.addClass(o.elementClass),e.toggleClass("d-none",!n)}},{key:"_getPasswordStrengthFeedback",value:function(e){switch(e){case u.passy.strength.LOW:return{message:this.$feedbackContainer.find(".strength-low").text(),elementClass:"text-danger"};case u.passy.strength.MEDIUM:return{message:this.$feedbackContainer.find(".strength-medium").text(),elementClass:"text-warning"};case u.passy.strength.HIGH:return{message:this.$feedbackContainer.find(".strength-high").text(),elementClass:"text-success"};case u.passy.strength.EXTREME:return{message:this.$feedbackContainer.find(".strength-extreme").text(),elementClass:"text-success"}}throw"Invalid password strength indicator."}}]),e}();t.default=d},457:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),r=o(s),a=n(1),i=o(a),u=n(456),d=o(u),c=n(460),l=o(c),f=window.$,p=function(){function e(t,n,o,s,a,i,u,c,p){return(0,r.default)(this,e),this.$inputsBlock=f(t),this.showButtonSelector=n,this.hideButtonSelector=o,this.generatePasswordButtonSelector=s,this.oldPasswordInputSelector=a,this.newPasswordInputSelector=i,this.confirmNewPasswordInputSelector=u,this.generatedPasswordDisplaySelector=c,this.$newPasswordInputs=this.$inputsBlock.find(this.newPasswordInputSelector),this.$copyPasswordInputs=this.$inputsBlock.find(this.confirmNewPasswordInputSelector).add(this.generatedPasswordDisplaySelector),this.$submittableInputs=this.$inputsBlock.find(this.oldPasswordInputSelector).add(this.newPasswordInputSelector).add(this.confirmNewPasswordInputSelector),this.passwordHandler=new d.default(p),this.passwordValidator=new l.default(this.newPasswordInputSelector,this.confirmNewPasswordInputSelector),this._hideInputsBlock(),this._initEvents(),{}}return(0,i.default)(e,[{key:"_initEvents",value:function(){var e=this;f(document).on("click",this.showButtonSelector,function(t){e._hide(f(t.currentTarget)),e._showInputsBlock()}),f(document).on("click",this.hideButtonSelector,function(){e._hideInputsBlock(),e._show(f(e.showButtonSelector))}),this.passwordHandler.watchPasswordStrength(this.$newPasswordInputs),f(document).on("click",this.generatePasswordButtonSelector,function(){e.passwordHandler.generatePassword(e.$newPasswordInputs),e.$copyPasswordInputs.val(e.$newPasswordInputs.val()),e._checkPasswordValidity()}),f(document).on("keyup",this.newPasswordInputSelector+","+this.confirmNewPasswordInputSelector,function(){e._checkPasswordValidity()}),f(document).on("submit",f(this.oldPasswordInputSelector).closest("form"),function(t){f(e.oldPasswordInputSelector).is(":disabled")||e.passwordValidator.isPasswordValid()||t.preventDefault()})}},{key:"_checkPasswordValidity",value:function(){var e=f(this.newPasswordInputSelector).parent().find(".form-text"),t=f(this.confirmNewPasswordInputSelector).parent().find(".form-text");e.text(this._getPasswordLengthValidationMessage()).toggleClass("text-danger",!this.passwordValidator.isPasswordLengthValid()),t.text(this._getPasswordConfirmationValidationMessage()).toggleClass("text-danger",!this.passwordValidator.isPasswordMatchingConfirmation())}},{key:"_getPasswordConfirmationValidationMessage",value:function(){return this.passwordValidator.isPasswordMatchingConfirmation()?"":f(this.confirmNewPasswordInputSelector).data("invalid-password")}},{key:"_getPasswordLengthValidationMessage",value:function(){return this.passwordValidator.isPasswordTooShort()?f(this.newPasswordInputSelector).data("password-too-short"):this.passwordValidator.isPasswordTooLong()?f(this.newPasswordInputSelector).data("password-too-long"):""}},{key:"_showInputsBlock",value:function(){this._show(this.$inputsBlock),this.$submittableInputs.removeAttr("disabled"),this.$submittableInputs.attr("required","required")}},{key:"_hideInputsBlock",value:function(){this._hide(this.$inputsBlock),this.$submittableInputs.attr("disabled","disabled"),this.$submittableInputs.removeAttr("required"),this.$inputsBlock.find("input").val(""),this.$inputsBlock.find(".form-text").text("")}},{key:"_hide",value:function(e){e.addClass("d-none")}},{key:"_show",value:function(e){e.removeClass("d-none")}}]),e}();t.default=p},460:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),r=o(s),a=n(1),i=o(a),u=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,r.default)(this,e),this.newPasswordInput=document.querySelector(t),this.confirmPasswordInput=document.querySelector(n),this.minPasswordLength=o.minPasswordLength||8,this.maxPasswordLength=o.maxPasswordLength||255}return(0,i.default)(e,[{key:"isPasswordValid",value:function(){return!(this.confirmPasswordInput&&!this.isPasswordMatchingConfirmation())&&this.isPasswordLengthValid()}},{key:"isPasswordLengthValid",value:function(){return!this.isPasswordTooShort()&&!this.isPasswordTooLong()}},{key:"isPasswordMatchingConfirmation",value:function(){if(!this.confirmPasswordInput)throw"Confirm password input is not provided for the password validator.";return""===this.confirmPasswordInput.value||this.newPasswordInput.value===this.confirmPasswordInput.value}},{key:"isPasswordTooShort",value:function(){return this.newPasswordInput.value.length<this.minPasswordLength}},{key:"isPasswordTooLong",value:function(){return this.newPasswordInput.value.length>this.maxPasswordLength}}]),e}();t.default=u},482:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),/**
 * 2007-2019 PrestaShop SA and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
t.default={shopChoiceTree:"#employee_shop_association",profileSelect:"#employee_profile",defaultPageSelect:"#employee_default_page",addonsConnectForm:"#addons-connect-form",addonsLoginButton:"#addons_login_btn",changePasswordInputsBlock:".js-change-password-block",showChangePasswordBlockButton:".js-change-password",hideChangePasswordBlockButton:".js-change-password-cancel",generatePasswordButton:"#employee_change_password_generate_password_button",oldPasswordInput:"#employee_change_password_old_password",newPasswordInput:"#employee_change_password_new_password_first",confirmNewPasswordInput:"#employee_change_password_new_password_second",generatedPasswordDisplayInput:"#employee_change_password_generated_password",passwordStrengthFeedbackContainer:".js-password-strength-feedback"}},483:function(e,t,n){"use strict";(function(e){var t=n(399),o=function(e){return e&&e.__esModule?e:{default:e}}(t);e(function(){new o.default})}).call(t,n(40))},5:function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},6:function(e,t,n){var o=n(11),s=n(17),r=n(14),a=Object.defineProperty;t.f=n(2)?Object.defineProperty:function(e,t,n){if(o(e),t=r(t,!0),o(n),s)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},60:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),r=o(s),a=n(1),i=o(a),u=window.$,d=function(){function e(t){var n=this;return(0,r.default)(this,e),this.$container=u(t),this.$container.on("click",".js-input-wrapper",function(e){var t=u(e.currentTarget);n._toggleChildTree(t)}),this.$container.on("click",".js-toggle-choice-tree-action",function(e){var t=u(e.currentTarget);n._toggleTree(t)}),{enableAutoCheckChildren:function(){return n.enableAutoCheckChildren()},enableAllInputs:function(){return n.enableAllInputs()},disableAllInputs:function(){return n.disableAllInputs()}}}return(0,i.default)(e,[{key:"enableAutoCheckChildren",value:function(){this.$container.on("change",'input[type="checkbox"]',function(e){var t=u(e.currentTarget);t.closest("li").find('ul input[type="checkbox"]').prop("checked",t.is(":checked"))})}},{key:"enableAllInputs",value:function(){this.$container.find("input").removeAttr("disabled")}},{key:"disableAllInputs",value:function(){this.$container.find("input").attr("disabled","disabled")}},{key:"_toggleChildTree",value:function(e){var t=e.closest("li");if(t.hasClass("expanded"))return void t.removeClass("expanded").addClass("collapsed");t.hasClass("collapsed")&&t.removeClass("collapsed").addClass("expanded")}},{key:"_toggleTree",value:function(e){var t=e.closest(".js-choice-tree-container"),n=e.data("action"),o={addClass:{expand:"expanded",collapse:"collapsed"},removeClass:{expand:"collapsed",collapse:"expanded"},nextAction:{expand:"collapse",collapse:"expand"},text:{expand:"collapsed-text",collapse:"expanded-text"},icon:{expand:"collapsed-icon",collapse:"expanded-icon"}};t.find("li").each(function(e,t){var s=u(t);s.hasClass(o.removeClass[n])&&s.removeClass(o.removeClass[n]).addClass(o.addClass[n])}),e.data("action",o.nextAction[n]),e.find(".material-icons").text(e.data(o.icon[n])),e.find(".js-toggle-text").text(e.data(o.text[n]))}}]),e}();t.default=d},7:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},8:function(e,t,n){var o=n(5),s=n(4),r=n(15),a=n(10),i=function(e,t,n){var u,d,c,l=e&i.F,f=e&i.G,p=e&i.S,h=e&i.P,w=e&i.B,g=e&i.W,v=f?s:s[t]||(s[t]={}),m=v.prototype,_=f?o:p?o[t]:(o[t]||{}).prototype;f&&(n=t);for(u in n)(d=!l&&_&&void 0!==_[u])&&u in v||(c=d?_[u]:n[u],v[u]=f&&"function"!=typeof _[u]?n[u]:w&&d?r(c,o):g&&_[u]==c?function(e){var t=function(t,n,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,o)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(c):h&&"function"==typeof c?r(Function.call,c):c,h&&((v.virtual||(v.virtual={}))[u]=c,e&i.R&&m&&!m[u]&&a(m,u,c)))};i.F=1,i.G=2,i.S=4,i.P=8,i.B=16,i.W=32,i.U=64,i.R=128,e.exports=i}});