const IMAGE_PATH = "assets/img/";
const IMAGE_EXT = ".png";

let checkedProtocols = new Array("protocol-very-successful.png", "protocol-successful.png", "protocol-not-successful.png");



/**
 * Initiates the chart.
 */
function initProtocolsChart() {
  currentChartConfig = JSON.parse(JSON.stringify(chart_config_all_nodes));
  tree = new Treant(chart_config_all_nodes);

  /*$('.sidebar').toggleClass("sidebar-collapsed");

  $('.toggle').on('click', function() {
    $('.sidebar').toggleClass("sidebar-collapsed");
});*/

var coll = document.getElementsByClassName("collapsible");
var img = document.getElementById("TOGGLE0186A1_ICON");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      img.src = "assets/img/tog_plus.gif";
      content.style.display = "none";
    } else {
      img.src = "assets/img/tog_minus.gif";
      content.style.display = "block";
    }
  });
}
coll[0].click();
coll[0].click();

}


/**
 * Handler for check/uncheck the protocol checkboxes.
 *
 * @param {*} protocolId
 */
function onProtocolClick(protocolId) {
  var imageName = protocolId + ".png";

  if ($('#' + protocolId).is(':checked') && !checkedProtocols.includes(imageName)) {
    checkedProtocols.push(imageName);
  } else if (checkedProtocols.includes(imageName)) {
    var index = checkedProtocols.indexOf(imageName);
    checkedProtocols.splice(index, 1);
  }


  currentChartConfig = JSON.parse(JSON.stringify(chart_config_all_nodes));

  filterByProtocolCategory(currentChartConfig, checkedProtocols);

  // call onFilter change to handle if some of the filters are selected
  onFilterChange();

  tree = new Treant(currentChartConfig);
}


/**
 * Filter the chart by protocol category, e.g. Very Successful, Unsuccessful,etc.
 *
 * @param {} json
 * @param {*} checkedProtocols
 */
function filterByProtocolCategory(json, checkedProtocols) {
  var toDeleteIdx = -1;
  var newChildren = new Array();

  for (var i = 0; i < json.nodeStructure.children.length; i++) {
    var imageNamewithPath = json.nodeStructure.children[i].image;
    var imageName = imageNamewithPath.substring(IMAGE_PATH.length);

    if (checkedProtocols.includes(imageName)) {
      newChildren.push(json.nodeStructure.children[i]);
    }
  }


  json.nodeStructure.children = newChildren;
}

/**
 * Clear filters and reset all of them to "All".
 */
function clearFilters() {
  location.reload();

}


/**
 * Handler for onchange event for the any filter. Need to check all filters since some
 * of them might have been already changed.
 *
 * @param {} selection
 */
function onFilterChange() {

  //filter by protocols category
  currentChartConfig = JSON.parse(JSON.stringify(chart_config_all_nodes));
  filterByProtocolCategory(currentChartConfig, checkedProtocols);

  // filter by fixation if something other than "all" is selected
  var selFixation = $('#idFixation option:selected').val();
  if (selFixation != "all")
    filterByFixation(currentChartConfig, selFixation)

  // filter by pre-treatment if something other than "all" is selected
  var selPretreatment = $('#idPretreatment option:selected').val();
  if (selPretreatment != "all")
    filterByPretreatment(currentChartConfig, selPretreatment);

  // filter by labeling if something other than "all" is selected
  var selLabeling = $('#idLabeling option:selected').val();
  if (selLabeling != "all")
    filterByLabeling(currentChartConfig, selLabeling);

  // filter by delipidation if something other than "all" is selected
  var selDelipidation = $('#idDelipidation option:selected').val();
  if (selDelipidation != "all")
    filterByDelipidation(currentChartConfig, selDelipidation)

  // filter by RIM if something other than "all" is selected
  var selRIM = $('#idRefIdxMatch option:selected').val();
  if (selRIM != "all")
    filterByRIM(currentChartConfig, selRIM)

  // filter by Tissue
  var selTissue = $('#idTissue option:selected').val();
  if (selTissue != "all")
    filterByTissue(currentChartConfig, selTissue);

  //reload the tree
  tree = new Treant(currentChartConfig);
}



/**
 * Filter the json by fixation.
 *
 * @param {} selection
 */
function filterByFixation(json, selection) {
  var newChildren = new Array();
  selection = selection + ".png";

  for (var i = 0; i < json.nodeStructure.children.length; i++) {
    for (var j = 0; j < json.nodeStructure.children[i].children.length; j++) {
      var imageNamewithPath = json.nodeStructure.children[i].children[j].image;
      var imageName = imageNamewithPath.substring(IMAGE_PATH.length);

      if (imageName == selection) {
        newChildren.push(json.nodeStructure.children[i].children[j]);
      }
    }
    json.nodeStructure.children[i].children = newChildren;
    if (newChildren.length == 0)
      json.nodeStructure.children[i].collapsed = false;

    newChildren = new Array();
  }

  currentChartConfig = json;
  //reload the tree
  tree = new Treant(currentChartConfig);
}



/**
 * Filter the json by pre-treatment.
 *
 * @param {} selection
 */
function filterByPretreatment(json, selection) {
  var newChildrenPretreatment = new Array();
  var newChildrenFixation = new Array();
  selection = selection + ".png";

  for (var i = 0; i < json.nodeStructure.children.length; i++) {
    for (var j = 0; j < json.nodeStructure.children[i].children.length; j++) {
      if (typeof json.nodeStructure.children[i].children[j].children === 'undefined')
        continue;
      for (var k = 0; k < json.nodeStructure.children[i].children[j].children.length; k++) {
        var imageNamewithPath = json.nodeStructure.children[i].children[j].children[k].image;
        var imageName = imageNamewithPath.substring(IMAGE_PATH.length);

        if (imageName == selection) {
          newChildrenPretreatment.push(json.nodeStructure.children[i].children[j].children[k]);
          newChildrenFixation.push(json.nodeStructure.children[i].children[j]);
        } else {
          //remove the parent fixation node

        }
      }
      json.nodeStructure.children[i].children[j].children = newChildrenPretreatment;
      newChildrenPretreatment = new Array();
    }
    json.nodeStructure.children[i].children = newChildrenFixation;
    newChildrenFixation = new Array();
  }

  currentChartConfig = json;

  //reload the tree
  tree = new Treant(currentChartConfig);
}




/**
 * Filter the json by labeling.
 *
 * @param {} selection
 */
function filterByLabeling(json, selection) {
  var newChildrenPretreatment = new Array();
  var newChildrenFixation = new Array();
  var newChildrenLabeling = new Array();

  selection = selection + ".png";

  for (var i = 0; i < json.nodeStructure.children.length; i++) {
    for (var j = 0; j < json.nodeStructure.children[i].children.length; j++) {
      if (typeof json.nodeStructure.children[i].children[j].children === 'undefined')
        continue;
      for (var k = 0; k < json.nodeStructure.children[i].children[j].children.length; k++) {
        if (typeof json.nodeStructure.children[i].children[j].children[k].children === 'undefined')
          continue;
        for (var l = 0; l < json.nodeStructure.children[i].children[j].children[k].children.length; l++) {

          var imageNamewithPath = json.nodeStructure.children[i].children[j].children[k].children[l].image;
          var imageName = imageNamewithPath.substring(IMAGE_PATH.length);

          if (imageName == selection) {
            newChildrenLabeling.push(json.nodeStructure.children[i].children[j].children[k].children[l]);
            newChildrenPretreatment.push(json.nodeStructure.children[i].children[j].children[k]);
            newChildrenFixation.push(json.nodeStructure.children[i].children[j]);
          } else {
            //remove the parent pre-treatment node

          }
        }
        json.nodeStructure.children[i].children[j].children[k].children = newChildrenLabeling;
        newChildrenLabeling = new Array();
      }
      json.nodeStructure.children[i].children[j].children = newChildrenPretreatment;
      newChildrenPretreatment = new Array();
    }
    json.nodeStructure.children[i].children = newChildrenFixation;
    newChildrenFixation = new Array();
  }

  currentChartConfig = json;

  //reload the tree
  tree = new Treant(currentChartConfig);
}





/**
 * Filter the json by labeling.
 *
 * @param {} selection
 */
function filterByDelipidation(json, selection) {
  var newChildrenPretreatment = new Array();
  var newChildrenFixation = new Array();
  var newChildrenLabeling = new Array();
  var newChildrenDelipidation = new Array();

  selection = selection + ".png";

  for (var i = 0; i < json.nodeStructure.children.length; i++) {
    for (var j = 0; j < json.nodeStructure.children[i].children.length; j++) {
      if (typeof json.nodeStructure.children[i].children[j].children === 'undefined')
        continue;
      for (var k = 0; k < json.nodeStructure.children[i].children[j].children.length; k++) {
        if (typeof json.nodeStructure.children[i].children[j].children[k].children === 'undefined')
          continue;
        for (var l = 0; l < json.nodeStructure.children[i].children[j].children[k].children.length; l++) {
          if (typeof json.nodeStructure.children[i].children[j].children[k].children[l].children === 'undefined')
            continue;
          for (var d = 0; d < json.nodeStructure.children[i].children[j].children[k].children[l].children.length; d++) {

            var imageNamewithPath = json.nodeStructure.children[i].children[j].children[k].children[l].children[d].image;
            var imageName = imageNamewithPath.substring(IMAGE_PATH.length);

            if (imageName == selection) {
              newChildrenDelipidation.push(json.nodeStructure.children[i].children[j].children[k].children[l].children[d]);
              newChildrenLabeling.push(json.nodeStructure.children[i].children[j].children[k].children[l]);
              newChildrenPretreatment.push(json.nodeStructure.children[i].children[j].children[k]);
              newChildrenFixation.push(json.nodeStructure.children[i].children[j]);
            } else {
              //remove the parent labeling node

            }
          }
          json.nodeStructure.children[i].children[j].children[k].children[l] = newChildrenDelipidation;
          newChildrenDelipidation = new Array();
        }
        json.nodeStructure.children[i].children[j].children[k].children = newChildrenLabeling;
        newChildrenLabeling = new Array();
      }
      json.nodeStructure.children[i].children[j].children = newChildrenPretreatment;
      newChildrenPretreatment = new Array();
    }
    json.nodeStructure.children[i].children = newChildrenFixation;
    newChildrenFixation = new Array();
  }

  currentChartConfig = json;

  //reload the tree
  tree = new Treant(currentChartConfig);
}






/**
 * Filter the json by RIM.
 *
 * @param {} selection
 */
function filterByRIM(json, selection) {
  var newChildrenPretreatment = new Array();
  var newChildrenFixation = new Array();
  var newChildrenLabeling = new Array();
  var newChildrenDelipidation = new Array();
  var newChildrenRIM = new Array();

  selection = selection + ".png";

  for (var i = 0; i < json.nodeStructure.children.length; i++) {
    for (var j = 0; j < json.nodeStructure.children[i].children.length; j++) {
      if (typeof json.nodeStructure.children[i].children[j].children === 'undefined')
        continue;
      for (var k = 0; k < json.nodeStructure.children[i].children[j].children.length; k++) {
        if (typeof json.nodeStructure.children[i].children[j].children[k].children === 'undefined')
          continue;
        for (var l = 0; l < json.nodeStructure.children[i].children[j].children[k].children.length; l++) {
          if (typeof json.nodeStructure.children[i].children[j].children[k].children[l].children === 'undefined')
            continue;
          for (var d = 0; d < json.nodeStructure.children[i].children[j].children[k].children[l].children.length; d++) {
            if (typeof json.nodeStructure.children[i].children[j].children[k].children[l].children[d].children === 'undefined')
              continue;

            for (var r = 0; r < json.nodeStructure.children[i].children[j].children[k].children[l].children[d].children.length; r++) {

              var imageNamewithPath = json.nodeStructure.children[i].children[j].children[k].children[l].children[d].children[r].image;
              var imageName = imageNamewithPath.substring(IMAGE_PATH.length);

              if (imageName == selection) {
                newChildrenRIM.push(json.nodeStructure.children[i].children[j].children[k].children[l].children[d].children[r]);
                newChildrenDelipidation.push(json.nodeStructure.children[i].children[j].children[k].children[l].children[d]);
                newChildrenLabeling.push(json.nodeStructure.children[i].children[j].children[k].children[l]);
                newChildrenPretreatment.push(json.nodeStructure.children[i].children[j].children[k]);
                newChildrenFixation.push(json.nodeStructure.children[i].children[j]);
              } else {
                //remove the parent delipidation node

              }
            }
            json.nodeStructure.children[i].children[j].children[k].children[l].children[d] = newChildrenRIM;
            newChildrenRIM = new Array();

          }
          json.nodeStructure.children[i].children[j].children[k].children[l].children = newChildrenDelipidation;
          newChildrenDelipidation = new Array();
        }
        json.nodeStructure.children[i].children[j].children[k].children = newChildrenLabeling;
        newChildrenLabeling = new Array();
      }
      json.nodeStructure.children[i].children[j].children = newChildrenPretreatment;
      newChildrenPretreatment = new Array();
    }
    json.nodeStructure.children[i].children = newChildrenFixation;
    newChildrenFixation = new Array();
  }

  currentChartConfig = json;

  //reload the tree
  tree = new Treant(currentChartConfig);
}






/**
 * Filter the json by Tissue.
 *
 * @param {} selection
 */
function filterByTissue(json, selection) {
  var newChildrenPretreatment = new Array();
  var newChildrenFixation = new Array();
  var newChildrenLabeling = new Array();
  var newChildrenDelipidation = new Array();
  var newChildrenRIM = new Array();
  var newChildrenTissue = new Array();

  selection = selection + ".png";

  for (var i = 0; i < json.nodeStructure.children.length; i++) {
    for (var j = 0; j < json.nodeStructure.children[i].children.length; j++) {
      if (typeof json.nodeStructure.children[i].children[j].children === 'undefined')
        continue;
      for (var k = 0; k < json.nodeStructure.children[i].children[j].children.length; k++) {
        if (typeof json.nodeStructure.children[i].children[j].children[k].children === 'undefined')
          continue;
        for (var l = 0; l < json.nodeStructure.children[i].children[j].children[k].children.length; l++) {
          if (typeof json.nodeStructure.children[i].children[j].children[k].children[l].children === 'undefined')
            continue;
          for (var d = 0; d < json.nodeStructure.children[i].children[j].children[k].children[l].children.length; d++) {
            if (typeof json.nodeStructure.children[i].children[j].children[k].children[l].children[d].children === 'undefined')
              continue;

            for (var r = 0; r < json.nodeStructure.children[i].children[j].children[k].children[l].children[d].children.length; r++) {
              for (var t = 0; t < json.nodeStructure.children[i].children[j].children[k].children[l].children[d].children[r].children.length; t++) {
                var imageNamewithPath = json.nodeStructure.children[i].children[j].children[k].children[l].children[d].children[r].children[t].image;
                var imageName = imageNamewithPath.substring(IMAGE_PATH.length);

                if (imageName == selection) {
                  newChildrenTissue.push(json.nodeStructure.children[i].children[j].children[k].children[l].children[d].children[r].children[t]);
                  newChildrenRIM.push(json.nodeStructure.children[i].children[j].children[k].children[l].children[d].children[r]);
                  newChildrenDelipidation.push(json.nodeStructure.children[i].children[j].children[k].children[l].children[d]);
                  newChildrenLabeling.push(json.nodeStructure.children[i].children[j].children[k].children[l]);
                  newChildrenPretreatment.push(json.nodeStructure.children[i].children[j].children[k]);
                  newChildrenFixation.push(json.nodeStructure.children[i].children[j]);
                } else {
                  //remove the parent delipidation node

                }
              }
              json.nodeStructure.children[i].children[j].children[k].children[l].children[d].children[r] = newChildrenTissue;
              newChildrenTissue = new Array();
            }
            json.nodeStructure.children[i].children[j].children[k].children[l].children[d].children = newChildrenRIM;
            newChildrenRIM = new Array();

          }
          json.nodeStructure.children[i].children[j].children[k].children[l].children = newChildrenDelipidation;
          newChildrenDelipidation = new Array();
        }
        json.nodeStructure.children[i].children[j].children[k].children = newChildrenLabeling;
        newChildrenLabeling = new Array();
      }
      json.nodeStructure.children[i].children[j].children = newChildrenPretreatment;
      newChildrenPretreatment = new Array();
    }
    json.nodeStructure.children[i].children = newChildrenFixation;
    newChildrenFixation = new Array();
  }

  currentChartConfig = json;

  //reload the tree
  tree = new Treant(currentChartConfig);
}
