/******************************

Codex Model

[rewrite_local]

^https:\/\/ab\.chatgpt\.com\/v1\/initialize url script-response-body https://raw.githubusercontent.com/nickfe/quanx/main/codex-model.js

[mitm]

hostname = ab.chatgpt.com

*******************************/

var responseBody = $response.body;
var jsonObject = JSON.parse(responseBody);
var removeModels = ["gpt-5.3-codex", "gpt-5.2"];
var addModels = ["gpt-image-2"];
var fallbackDefaultModel = "gpt-5.4";

function patchModelConfig(value) {
  if (!value || typeof value !== "object" || !Array.isArray(value.available_models)) {
    return;
  }

  var nextModels = [];
  var seenModels = {};

  value.available_models.forEach(function (model) {
    if (typeof model !== "string") {
      return;
    }
    if (removeModels.indexOf(model) !== -1 || seenModels[model]) {
      return;
    }
    seenModels[model] = true;
    nextModels.push(model);
  });

  addModels.forEach(function (model) {
    if (!seenModels[model]) {
      seenModels[model] = true;
      nextModels.push(model);
    }
  });

  value.available_models = nextModels;
  value.use_hidden_models = true;

  if (typeof value.default_model !== "string" || removeModels.indexOf(value.default_model) !== -1) {
    value.default_model = nextModels.indexOf(fallbackDefaultModel) !== -1 ? fallbackDefaultModel : nextModels[0];
  }
}

if (jsonObject.dynamic_configs && typeof jsonObject.dynamic_configs === "object") {
  Object.keys(jsonObject.dynamic_configs).forEach(function (key) {
    var config = jsonObject.dynamic_configs[key];
    if (config && typeof config === "object") {
      patchModelConfig(config.value);
    }
  });
}

responseBody = JSON.stringify(jsonObject);
$done(responseBody);
