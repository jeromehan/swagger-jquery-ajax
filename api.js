/* eslint-disable */
/* eslint-disable */
var Api = {}
var domain = ''
var getDomain = () => {
  return domain
}
Api.setDomain = ($domain) => {
  domain = $domain
}
var request = (method, url, body, queryParameters, form, config) => {
  method = method.toLowerCase()
  var keys = Object.keys(queryParameters)
  var queryUrl = url + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
  if (body) {
    return new Promise(function(resolve, reject) {
      $.ajax({
        url: url,
        type: method,
        data: body,
        success: function(data) {
          resolve(data);
        },
        error: function(error) {
          reject(error)
        }
      });
    });
  } else if (method === 'get') {
    return new Promise(function(resolve, reject) {
      $.ajax({
        url: queryUrl,
        type: 'GET',
        success: function(data) {
          resolve(data);
        },
        error: function(error) {
          reject(error)
        }
      });
    });
  }
}
/*==========================================================
 *                    This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 ==========================================================*/
/**
 * Add a new pet to the store
 * request: addPet
 * url: addPetURL
 * method: addPet_TYPE
 * raw_url: addPet_RAW_URL
 * @param body - Pet object that needs to be added to the store
 */
Api.addPet = function(parameters = {}) {
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var config = parameters.$config
  var path = '/pet'
  var body
  var queryParameters = {}
  var form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
Api.addPet_RAW_URL = function() {
  return '/pet'
}
Api.addPet_TYPE = function() {
  return 'post'
}
Api.addPetURL = function(parameters = {}) {
  var queryParameters = {}
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var path = '/pet'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  var keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Update an existing pet
 * request: updatePet
 * url: updatePetURL
 * method: updatePet_TYPE
 * raw_url: updatePet_RAW_URL
 * @param body - Pet object that needs to be added to the store
 */
Api.updatePet = function(parameters = {}) {
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var config = parameters.$config
  var path = '/pet'
  var body
  var queryParameters = {}
  var form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
Api.updatePet_RAW_URL = function() {
  return '/pet'
}
Api.updatePet_TYPE = function() {
  return 'put'
}
Api.updatePetURL = function(parameters = {}) {
  var queryParameters = {}
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var path = '/pet'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  var keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Multiple status values can be provided with comma separated strings
 * request: findPetsByStatus
 * url: findPetsByStatusURL
 * method: findPetsByStatus_TYPE
 * raw_url: findPetsByStatus_RAW_URL
 * @param status - Status values that need to be considered for filter
 */
Api.findPetsByStatus = function(parameters = {}) {
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var config = parameters.$config
  var path = '/pet/findByStatus'
  var body
  var queryParameters = {}
  var form = {}
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters['status'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: status'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
Api.findPetsByStatus_RAW_URL = function() {
  return '/pet/findByStatus'
}
Api.findPetsByStatus_TYPE = function() {
  return 'get'
}
Api.findPetsByStatusURL = function(parameters = {}) {
  var queryParameters = {}
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var path = '/pet/findByStatus'
  if (parameters['status'] !== undefined) {
    queryParameters['status'] = parameters['status']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  var keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * request: findPetsByTags
 * url: findPetsByTagsURL
 * method: findPetsByTags_TYPE
 * raw_url: findPetsByTags_RAW_URL
 * @param tags - Tags to filter by
 */
Api.findPetsByTags = function(parameters = {}) {
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var config = parameters.$config
  var path = '/pet/findByTags'
  var body
  var queryParameters = {}
  var form = {}
  if (parameters['tags'] !== undefined) {
    queryParameters['tags'] = parameters['tags']
  }
  if (parameters['tags'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: tags'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
Api.findPetsByTags_RAW_URL = function() {
  return '/pet/findByTags'
}
Api.findPetsByTags_TYPE = function() {
  return 'get'
}
Api.findPetsByTagsURL = function(parameters = {}) {
  var queryParameters = {}
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var path = '/pet/findByTags'
  if (parameters['tags'] !== undefined) {
    queryParameters['tags'] = parameters['tags']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  var keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a single pet
 * request: getPetById
 * url: getPetByIdURL
 * method: getPetById_TYPE
 * raw_url: getPetById_RAW_URL
 * @param petId - ID of pet to return
 */
Api.getPetById = function(parameters = {}) {
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var config = parameters.$config
  var path = '/pet/{petId}'
  var body
  var queryParameters = {}
  var form = {}
  path = path.replace('{petId}', `${parameters['petId']}`)
  if (parameters['petId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: petId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
Api.getPetById_RAW_URL = function() {
  return '/pet/{petId}'
}
Api.getPetById_TYPE = function() {
  return 'get'
}
Api.getPetByIdURL = function(parameters = {}) {
  var queryParameters = {}
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var path = '/pet/{petId}'
  path = path.replace('{petId}', `${parameters['petId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  var keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates a pet in the store with form data
 * request: updatePetWithForm
 * url: updatePetWithFormURL
 * method: updatePetWithForm_TYPE
 * raw_url: updatePetWithForm_RAW_URL
 * @param petId - ID of pet that needs to be updated
 * @param name - Updated name of the pet
 * @param status - Updated status of the pet
 */
Api.updatePetWithForm = function(parameters = {}) {
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var config = parameters.$config
  var path = '/pet/{petId}'
  var body
  var queryParameters = {}
  var form = {}
  path = path.replace('{petId}', `${parameters['petId']}`)
  if (parameters['petId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: petId'))
  }
  if (parameters['name'] !== undefined) {
    form['name'] = parameters['name']
  }
  if (parameters['status'] !== undefined) {
    form['status'] = parameters['status']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
Api.updatePetWithForm_RAW_URL = function() {
  return '/pet/{petId}'
}
Api.updatePetWithForm_TYPE = function() {
  return 'post'
}
Api.updatePetWithFormURL = function(parameters = {}) {
  var queryParameters = {}
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var path = '/pet/{petId}'
  path = path.replace('{petId}', `${parameters['petId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  var keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes a pet
 * request: deletePet
 * url: deletePetURL
 * method: deletePet_TYPE
 * raw_url: deletePet_RAW_URL
 * @param apiKey - 
 * @param petId - Pet id to delete
 */
Api.deletePet = function(parameters = {}) {
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var config = parameters.$config
  var path = '/pet/{petId}'
  var body
  var queryParameters = {}
  var form = {}
  path = path.replace('{petId}', `${parameters['petId']}`)
  if (parameters['petId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: petId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
Api.deletePet_RAW_URL = function() {
  return '/pet/{petId}'
}
Api.deletePet_TYPE = function() {
  return 'delete'
}
Api.deletePetURL = function(parameters = {}) {
  var queryParameters = {}
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var path = '/pet/{petId}'
  path = path.replace('{petId}', `${parameters['petId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  var keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * uploads an image
 * request: uploadFile
 * url: uploadFileURL
 * method: uploadFile_TYPE
 * raw_url: uploadFile_RAW_URL
 * @param petId - ID of pet to update
 * @param additionalMetadata - Additional data to pass to server
 * @param file - file to upload
 */
Api.uploadFile = function(parameters = {}) {
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var config = parameters.$config
  var path = '/pet/{petId}/uploadImage'
  var body
  var queryParameters = {}
  var form = {}
  path = path.replace('{petId}', `${parameters['petId']}`)
  if (parameters['petId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: petId'))
  }
  if (parameters['additionalMetadata'] !== undefined) {
    form['additionalMetadata'] = parameters['additionalMetadata']
  }
  if (parameters['file'] !== undefined) {
    form['file'] = parameters['file']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
Api.uploadFile_RAW_URL = function() {
  return '/pet/{petId}/uploadImage'
}
Api.uploadFile_TYPE = function() {
  return 'post'
}
Api.uploadFileURL = function(parameters = {}) {
  var queryParameters = {}
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var path = '/pet/{petId}/uploadImage'
  path = path.replace('{petId}', `${parameters['petId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  var keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a map of status codes to quantities
 * request: getInventory
 * url: getInventoryURL
 * method: getInventory_TYPE
 * raw_url: getInventory_RAW_URL
 */
Api.getInventory = function(parameters = {}) {
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var config = parameters.$config
  var path = '/store/inventory'
  var body
  var queryParameters = {}
  var form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
Api.getInventory_RAW_URL = function() {
  return '/store/inventory'
}
Api.getInventory_TYPE = function() {
  return 'get'
}
Api.getInventoryURL = function(parameters = {}) {
  var queryParameters = {}
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var path = '/store/inventory'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  var keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Place an order for a pet
 * request: placeOrder
 * url: placeOrderURL
 * method: placeOrder_TYPE
 * raw_url: placeOrder_RAW_URL
 * @param body - order placed for purchasing the pet
 */
Api.placeOrder = function(parameters = {}) {
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var config = parameters.$config
  var path = '/store/order'
  var body
  var queryParameters = {}
  var form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
Api.placeOrder_RAW_URL = function() {
  return '/store/order'
}
Api.placeOrder_TYPE = function() {
  return 'post'
}
Api.placeOrderURL = function(parameters = {}) {
  var queryParameters = {}
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var path = '/store/order'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  var keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 * request: getOrderById
 * url: getOrderByIdURL
 * method: getOrderById_TYPE
 * raw_url: getOrderById_RAW_URL
 * @param orderId - ID of pet that needs to be fetched
 */
Api.getOrderById = function(parameters = {}) {
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var config = parameters.$config
  var path = '/store/order/{orderId}'
  var body
  var queryParameters = {}
  var form = {}
  path = path.replace('{orderId}', `${parameters['orderId']}`)
  if (parameters['orderId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: orderId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
Api.getOrderById_RAW_URL = function() {
  return '/store/order/{orderId}'
}
Api.getOrderById_TYPE = function() {
  return 'get'
}
Api.getOrderByIdURL = function(parameters = {}) {
  var queryParameters = {}
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var path = '/store/order/{orderId}'
  path = path.replace('{orderId}', `${parameters['orderId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  var keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 * request: deleteOrder
 * url: deleteOrderURL
 * method: deleteOrder_TYPE
 * raw_url: deleteOrder_RAW_URL
 * @param orderId - ID of the order that needs to be deleted
 */
Api.deleteOrder = function(parameters = {}) {
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var config = parameters.$config
  var path = '/store/order/{orderId}'
  var body
  var queryParameters = {}
  var form = {}
  path = path.replace('{orderId}', `${parameters['orderId']}`)
  if (parameters['orderId'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: orderId'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
Api.deleteOrder_RAW_URL = function() {
  return '/store/order/{orderId}'
}
Api.deleteOrder_TYPE = function() {
  return 'delete'
}
Api.deleteOrderURL = function(parameters = {}) {
  var queryParameters = {}
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var path = '/store/order/{orderId}'
  path = path.replace('{orderId}', `${parameters['orderId']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  var keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * This can only be done by the logged in user.
 * request: createUser
 * url: createUserURL
 * method: createUser_TYPE
 * raw_url: createUser_RAW_URL
 * @param body - Created user object
 */
Api.createUser = function(parameters = {}) {
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var config = parameters.$config
  var path = '/user'
  var body
  var queryParameters = {}
  var form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
Api.createUser_RAW_URL = function() {
  return '/user'
}
Api.createUser_TYPE = function() {
  return 'post'
}
Api.createUserURL = function(parameters = {}) {
  var queryParameters = {}
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var path = '/user'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  var keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates list of users with given input array
 * request: createUsersWithArrayInput
 * url: createUsersWithArrayInputURL
 * method: createUsersWithArrayInput_TYPE
 * raw_url: createUsersWithArrayInput_RAW_URL
 * @param body - List of user object
 */
Api.createUsersWithArrayInput = function(parameters = {}) {
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var config = parameters.$config
  var path = '/user/createWithArray'
  var body
  var queryParameters = {}
  var form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
Api.createUsersWithArrayInput_RAW_URL = function() {
  return '/user/createWithArray'
}
Api.createUsersWithArrayInput_TYPE = function() {
  return 'post'
}
Api.createUsersWithArrayInputURL = function(parameters = {}) {
  var queryParameters = {}
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var path = '/user/createWithArray'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  var keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates list of users with given input array
 * request: createUsersWithListInput
 * url: createUsersWithListInputURL
 * method: createUsersWithListInput_TYPE
 * raw_url: createUsersWithListInput_RAW_URL
 * @param body - List of user object
 */
Api.createUsersWithListInput = function(parameters = {}) {
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var config = parameters.$config
  var path = '/user/createWithList'
  var body
  var queryParameters = {}
  var form = {}
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
Api.createUsersWithListInput_RAW_URL = function() {
  return '/user/createWithList'
}
Api.createUsersWithListInput_TYPE = function() {
  return 'post'
}
Api.createUsersWithListInputURL = function(parameters = {}) {
  var queryParameters = {}
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var path = '/user/createWithList'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  var keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Logs user into the system
 * request: loginUser
 * url: loginUserURL
 * method: loginUser_TYPE
 * raw_url: loginUser_RAW_URL
 * @param username - The user name for login
 * @param password - The password for login in clear text
 */
Api.loginUser = function(parameters = {}) {
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var config = parameters.$config
  var path = '/user/login'
  var body
  var queryParameters = {}
  var form = {}
  if (parameters['username'] !== undefined) {
    queryParameters['username'] = parameters['username']
  }
  if (parameters['username'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: username'))
  }
  if (parameters['password'] !== undefined) {
    queryParameters['password'] = parameters['password']
  }
  if (parameters['password'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: password'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
Api.loginUser_RAW_URL = function() {
  return '/user/login'
}
Api.loginUser_TYPE = function() {
  return 'get'
}
Api.loginUserURL = function(parameters = {}) {
  var queryParameters = {}
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var path = '/user/login'
  if (parameters['username'] !== undefined) {
    queryParameters['username'] = parameters['username']
  }
  if (parameters['password'] !== undefined) {
    queryParameters['password'] = parameters['password']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  var keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Logs out current logged in user session
 * request: logoutUser
 * url: logoutUserURL
 * method: logoutUser_TYPE
 * raw_url: logoutUser_RAW_URL
 */
Api.logoutUser = function(parameters = {}) {
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var config = parameters.$config
  var path = '/user/logout'
  var body
  var queryParameters = {}
  var form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
Api.logoutUser_RAW_URL = function() {
  return '/user/logout'
}
Api.logoutUser_TYPE = function() {
  return 'get'
}
Api.logoutUserURL = function(parameters = {}) {
  var queryParameters = {}
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var path = '/user/logout'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  var keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Get user by user name
 * request: getUserByName
 * url: getUserByNameURL
 * method: getUserByName_TYPE
 * raw_url: getUserByName_RAW_URL
 * @param username - The name that needs to be fetched. Use user1 for testing. 
 */
Api.getUserByName = function(parameters = {}) {
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var config = parameters.$config
  var path = '/user/{username}'
  var body
  var queryParameters = {}
  var form = {}
  path = path.replace('{username}', `${parameters['username']}`)
  if (parameters['username'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: username'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
Api.getUserByName_RAW_URL = function() {
  return '/user/{username}'
}
Api.getUserByName_TYPE = function() {
  return 'get'
}
Api.getUserByNameURL = function(parameters = {}) {
  var queryParameters = {}
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var path = '/user/{username}'
  path = path.replace('{username}', `${parameters['username']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  var keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * This can only be done by the logged in user.
 * request: updateUser
 * url: updateUserURL
 * method: updateUser_TYPE
 * raw_url: updateUser_RAW_URL
 * @param username - name that need to be updated
 * @param body - Updated user object
 */
Api.updateUser = function(parameters = {}) {
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var config = parameters.$config
  var path = '/user/{username}'
  var body
  var queryParameters = {}
  var form = {}
  path = path.replace('{username}', `${parameters['username']}`)
  if (parameters['username'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: username'))
  }
  if (parameters['body'] !== undefined) {
    body = parameters['body']
  }
  if (parameters['body'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: body'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
Api.updateUser_RAW_URL = function() {
  return '/user/{username}'
}
Api.updateUser_TYPE = function() {
  return 'put'
}
Api.updateUserURL = function(parameters = {}) {
  var queryParameters = {}
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var path = '/user/{username}'
  path = path.replace('{username}', `${parameters['username']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  var keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * This can only be done by the logged in user.
 * request: deleteUser
 * url: deleteUserURL
 * method: deleteUser_TYPE
 * raw_url: deleteUser_RAW_URL
 * @param username - The name that needs to be deleted
 */
Api.deleteUser = function(parameters = {}) {
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var config = parameters.$config
  var path = '/user/{username}'
  var body
  var queryParameters = {}
  var form = {}
  path = path.replace('{username}', `${parameters['username']}`)
  if (parameters['username'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: username'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
Api.deleteUser_RAW_URL = function() {
  return '/user/{username}'
}
Api.deleteUser_TYPE = function() {
  return 'delete'
}
Api.deleteUserURL = function(parameters = {}) {
  var queryParameters = {}
  var domain = parameters.$domain ? parameters.$domain : getDomain()
  var path = '/user/{username}'
  path = path.replace('{username}', `${parameters['username']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  var keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
window.Api = Api