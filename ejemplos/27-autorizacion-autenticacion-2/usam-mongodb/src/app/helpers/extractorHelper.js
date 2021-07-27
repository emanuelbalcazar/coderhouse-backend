/**
 * Converts the response of an extractor into a graph vis js.
 * @param {Object} body
 */
module.exports.toVisJS = function (body) {
    var nodes = [];
    var edges = [];

    if (body && body.length > 0) {
        // author
        nodes.push({
            id: body[0].author_id || 1, label: body[0].author, color: { background: '#9FF781', type: 'author' }
        });

        // all feeds
        for (var i = 0; i < body.length; i++) {
            var node = body[i];
            node.id = body[i].article_id;
            node.label = 'Publicación';
            node.type = 'publication';
            nodes.push(node);
            edges.push({ label: 'escribió', from: body[i].author_id || 1, to: body[i].article_id });

            // get comments
            if (node.comments && node.comments.length > 0) {
                for (var j = 0; j < node.comments.length; j++) {
                    var comment = node.comments[j];
                    comment.label = 'Comentario';
                    comment.type = 'commentary';
                    comment.color = { background: '#F2F5A9' };
                    nodes.push(comment);
                    edges.push({ label: 'en', from: comment.id, to: node.id });
                }
            }
        }
    }

    return { nodes: nodes, edges: edges };
};
