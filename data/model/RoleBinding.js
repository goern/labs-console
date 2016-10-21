/**
 * Red Hat Open Innovation Labs Console API
 * Specification for interaction between the Labs Console front-end and back-end. Additionally, this API will be used to experiment with new concepts in order to allow the Automation API (https://github.com/rht-labs/automation-api) to remain stable.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: rhc-open-innovation-labs@redhat.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.RedHatOpenInnovationLabsConsoleApi) {
      root.RedHatOpenInnovationLabsConsoleApi = {};
    }
    root.RedHatOpenInnovationLabsConsoleApi.RoleBinding = factory(root.RedHatOpenInnovationLabsConsoleApi.ApiClient, root.RedHatOpenInnovationLabsConsoleApi.User);
  }
}(this, function(ApiClient, User) {
  'use strict';




  /**
   * The RoleBinding model module.
   * @module model/RoleBinding
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RoleBinding</code>.
   * @alias module:model/RoleBinding
   * @class
   * @param user {module:model/User} 
   * @param role {module:model/RoleBinding.RoleEnum} 
   */
  var exports = function(user, role) {
    var _this = this;


    _this['user'] = user;
    _this['role'] = role;
  };

  /**
   * Constructs a <code>RoleBinding</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RoleBinding} obj Optional instance to populate.
   * @return {module:model/RoleBinding} The populated <code>RoleBinding</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = User.constructFromObject(data['user']);
      }
      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/User} user
   */
  exports.prototype['user'] = undefined;
  /**
   * @member {module:model/RoleBinding.RoleEnum} role
   */
  exports.prototype['role'] = undefined;


  /**
   * Allowed values for the <code>role</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RoleEnum = {
    /**
     * value: "admin"
     * @const
     */
    "admin": "admin",
    /**
     * value: "view"
     * @const
     */
    "view": "view",
    /**
     * value: "basic-user"
     * @const
     */
    "basic-user": "basic-user",
    /**
     * value: "edit"
     * @const
     */
    "edit": "edit"  };


  return exports;
}));


