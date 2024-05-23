const bundy = require('bundy');

bundy.css([
  './assets/css/base/base.css',
  './assets/css/base/fonts.css',
  './assets/css/base/forms.css',
  './assets/css/base/generics.css',
  './assets/css/base/typograph.css',
  './assets/css/layout/content.css',
  './assets/css/layout/footer.css',
  './assets/css/layout/header.css',
  './assets/css/layout/main.css',
  './assets/css/module/button.css',
  './assets/css/module/pagination.css',
  './assets/css/module/search.css',
  './assets/css/state/'
], 'minified/assets.min.css');

bundy.build();