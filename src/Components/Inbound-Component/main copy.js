"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var jqxtree_1 = require("jqwidgets-scripts/jqwidgets-react-tsx/jqxtree");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        var data = [
            {
                'id': '2',
                'parentid': '1',
                'text': 'Hot Chocolate',
                'value': '$2.3'
            }, {
                'id': '3',
                'parentid': '1',
                'text': 'Peppermint Hot Chocolate',
                'value': '$2.3'
            }, {
                'id': '4',
                'parentid': '1',
                'text': 'Salted Caramel Hot Chocolate',
                'value': '$2.3'
            }, {
                'id': '5',
                'parentid': '1',
                'text': 'White Hot Chocolate',
                'value': '$2.3'
            }, {
                'id': '1',
                'parentid': '-1',
                'text': 'Chocolate Beverage',
                'value': '$2.3'
            }, {
                'id': '6',
                'parentid': '-1',
                'text': 'Espresso Beverage',
                'value': '$2.3'
            }, {
                'id': '7',
                'parentid': '6',
                'text': 'Caffe Americano',
                'value': '$2.3'
            }, {
                'id': '8',
                'parentid': '6',
                'text': 'Caffe Latte',
                'value': '$2.3'
            }, {
                'id': '9',
                'parentid': '6',
                'text': 'Caffe Mocha',
                'value': '$2.3'
            }, {
                'id': '10',
                'parentid': '6',
                'text': 'Cappuccino',
                'value': '$2.3'
            }, {
                'id': '11',
                'parentid': '6',
                'text': 'Pumpkin Spice Latte',
                'value': '$2.3'
            }, {
                'id': '12',
                'parentid': '-1',
                'text': 'Frappuccino'
            }, {
                'id': '13',
                'parentid': '12',
                'text': 'Caffe Vanilla Frappuccino',
                'value': '$2.3'
            }, {
                'id': '15',
                'parentid': '13',
                'text': '450 calories',
                'value': '$2.3'
            }, {
                'id': '16',
                'parentid': '13',
                'text': '16g fat',
                'value': '$2.3'
            }, {
                'id': '17',
                'parentid': '13',
                'text': '13g protein',
                'value': '$2.3'
            }, {
                'id': '14',
                'parentid': '12',
                'text': 'Caffe Vanilla Frappuccino Light',
                'value': '$2.3'
            }
        ];
        var source = {
            datafields: [
                { name: 'id' },
                { name: 'parentid' },
                { name: 'text' },
                { name: 'value' }
            ],
            datatype: 'json',
            id: 'id',
            localdata: data
        };
        var dataAdapter = new jqxtree_1.jqx.dataAdapter(source, { autoBind: true });
        var records = dataAdapter.getRecordsHierarchy('id', 'parentid', 'items', [{ name: 'text', map: 'label' }]);
        _this.state = {
            source: records
        };
        return _this;
    }
    App.prototype.render = function () {
        return (<jqxtree_1["default"] source={this.state.source} width={300}/>);
    };
    return App;
}(React.PureComponent));
