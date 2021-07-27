/**
 * Converts the response into a graph vis js.
 * @param {Object} record
 */
module.exports.toVisJS = function (record) {
    var nodes = [];
    var edges = [];

    nodes.push({
        id: record._id,
        label: record.name,
        color: { background: '#04f4dc' },
        hasData: false
    });

    for (let i = 0; i < record.results.length; i++) {
        var node = clone(record.results[i]);
        node.id = node._id;
        node.label = node.engine || node.source;
        node.hasData = true;
        node.color = getColor(Number(node.sentiment));
        nodes.push(node);
        edges.push({ label: 'en', from: node.id, to: record._id });
    }

    return { nodes: nodes, edges: edges };
};

// clone any object.
function clone(object) {
    return JSON.parse(JSON.stringify(object));
}

// get the color of the node based on your score.
function getColor(score) {
    if (score < 0)
        return { background: '#ff5107' }; // negative - orange

    if (score > 0)
        return { background: '#9ef704' }; // positive - green

    return {};
}
