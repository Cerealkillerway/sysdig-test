export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 5,
            "column": 4
          },
          "end": {
            "line": 9,
            "column": 4
          }
        },
        "moduleName": "sysdig-test/templates/components/material-pagination.hbs"
      },
      isEmpty: false,
      arity: 2,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("li");
        var el2 = dom.createTextNode("\n            ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n        ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createElementMorph(element1);
        morphs[2] = dom.createMorphAt(element1,0,0);
        return morphs;
      },
      statements: [
        ["attribute","class",["concat",["waves-effect ",["get","page",["loc",[null,[6,34],[6,38]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],
        ["element","action",["changePage",["get","index",["loc",[null,[7,37],[7,42]]],0,0,0,0]],[],["loc",[null,[7,15],[7,44]]],0,0],
        ["inline","increment",[["get","index",["loc",[null,[7,57],[7,62]]],0,0,0,0]],[],["loc",[null,[7,45],[7,64]]],0,0]
      ],
      locals: ["page","index"],
      templates: []
    };
  }());
  return {
    meta: {
      "revision": "Ember@2.8.2",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 14,
          "column": 0
        }
      },
      "moduleName": "sysdig-test/templates/components/material-pagination.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("ul");
      dom.setAttribute(el1,"class","pagination");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      dom.setAttribute(el2,"class","pointer");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("a");
      var el4 = dom.createElement("i");
      dom.setAttribute(el4,"class","material-icons");
      var el5 = dom.createTextNode("chevron_left");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("li");
      dom.setAttribute(el2,"class","pointer");
      var el3 = dom.createTextNode("\n        ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("a");
      var el4 = dom.createElement("i");
      dom.setAttribute(el4,"class","material-icons");
      var el5 = dom.createTextNode("chevron_right");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n    ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element2 = dom.childAt(fragment, [0]);
      var element3 = dom.childAt(element2, [1, 1]);
      var element4 = dom.childAt(element2, [5, 1]);
      var morphs = new Array(3);
      morphs[0] = dom.createElementMorph(element3);
      morphs[1] = dom.createMorphAt(element2,3,3);
      morphs[2] = dom.createElementMorph(element4);
      return morphs;
    },
    statements: [
      ["element","action",["changePage","prev"],[],["loc",[null,[3,11],[3,41]]],0,0],
      ["block","each",[["get","this.pagesArray",["loc",[null,[5,12],[5,27]]],0,0,0,0]],[],0,null,["loc",[null,[5,4],[9,13]]]],
      ["element","action",["changePage","next"],[],["loc",[null,[11,11],[11,41]]],0,0]
    ],
    locals: [],
    templates: [child0]
  };
}()));