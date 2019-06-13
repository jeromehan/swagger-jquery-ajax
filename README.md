# swagger-jquery-ajax
Swagger to JS &amp; jquery &amp; Codegen
# Installation
```shell
npm install
npm run build
```
# Generated client usage

```javascript
<script src="api.js"></script>
window.Api.setDomain('http://localhost:3000')
```
```javascript
Post 、PUT、etc

window.Api.addPet({
  body: {
    username: 'admin',
    password: 'admin'
  }
}).then(function (response) {
})
GET

window.Api.findPetsByStatus({
  status:2
}).then(function (response){
}) 
```
All requests use **$.ajax** module with promise, for more information about that follow $.ajax documentation 

# Links
 - [swagger-js-codegen](https://github.com/wcandillon/swagger-js-codegen)
 - [swagger-vue](https://github.com/chenweiqun/swagger-vue.git)

# License

[MIT](https://opensource.org/licenses/MIT)
