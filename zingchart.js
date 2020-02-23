var chartData={
    "type": "bar",
    "series": [
        {"values": [34,34,54,23], "text": "apples"},
        {"values": [23,54,12,33],"text": "apples"},
        {"values": [43,76,12,34],"text": "apples"},
        {"values": [43,76,12,34],"text": "apples"}
    ],
    "scale-x": {
        "values": [
            "mon", "tue", "wed"
        ]
    },
    "legend": {
"toggle-action": "hide",
"header": {
"text": "Legend Header"
},
"item": {
"cursor": "pointer"
},
"draggable": true,
"drag-handler": "icon"
},
};

zingchart.render({
    id: 'myChart',
    data: 'chartData',
    height:400,
    width: 600
});