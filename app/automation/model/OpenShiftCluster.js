/**
 * Red Hat Open Innovation Labs API
 * A generic model to support automation at all levels of the application and infrastructure lifecycle.
 *
 * OpenAPI spec version: 0.3.0-alpha
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
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/OpenShiftResources', 'model/PersistentVolume'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OpenShiftResources'), require('./PersistentVolume'));
  } else {
    // Browser globals (root is window)
    if (!root.RedHatOpenInnovationLabsApi) {
      root.RedHatOpenInnovationLabsApi = {};
    }
    root.RedHatOpenInnovationLabsApi.OpenShiftCluster = factory(root.RedHatOpenInnovationLabsApi.ApiClient, root.RedHatOpenInnovationLabsApi.OpenShiftResources, root.RedHatOpenInnovationLabsApi.PersistentVolume);
  }
}(this, function(ApiClient, OpenShiftResources, PersistentVolume) {
  'use strict';




  /**
   * The OpenShiftCluster model module.
   * @module model/OpenShiftCluster
   * @version 0.3.0-alpha
   */

  /**
   * Constructs a new <code>OpenShiftCluster</code>.
   * @alias module:model/OpenShiftCluster
   * @class
   * @param id {Number} 
   */
  var exports = function(id) {
    var _this = this;

    _this['id'] = id;





  };

  /**
   * Constructs a <code>OpenShiftCluster</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OpenShiftCluster} obj Optional instance to populate.
   * @return {module:model/OpenShiftCluster} The populated <code>OpenShiftCluster</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('labels')) {
        obj['labels'] = ApiClient.convertToType(data['labels'], {'String': 'String'});
      }
      if (data.hasOwnProperty('openshift_resources')) {
        obj['openshift_resources'] = OpenShiftResources.constructFromObject(data['openshift_resources']);
      }
      if (data.hasOwnProperty('openshift_host_env')) {
        obj['openshift_host_env'] = ApiClient.convertToType(data['openshift_host_env'], 'String');
      }
      if (data.hasOwnProperty('image_registry')) {
        obj['image_registry'] = ApiClient.convertToType(data['image_registry'], 'String');
      }
      if (data.hasOwnProperty('persistent_volumes')) {
        obj['persistent_volumes'] = ApiClient.convertToType(data['persistent_volumes'], [PersistentVolume]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Object.<String, String>} labels
   */
  exports.prototype['labels'] = undefined;
  /**
   * @member {module:model/OpenShiftResources} openshift_resources
   */
  exports.prototype['openshift_resources'] = undefined;
  /**
   * @member {String} openshift_host_env
   */
  exports.prototype['openshift_host_env'] = undefined;
  /**
   * @member {String} image_registry
   */
  exports.prototype['image_registry'] = undefined;
  /**
   * @member {Array.<module:model/PersistentVolume>} persistent_volumes
   */
  exports.prototype['persistent_volumes'] = undefined;



  return exports;
}));


