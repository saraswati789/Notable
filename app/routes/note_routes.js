module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
        const note = {text: req.body.node, title: req.body.title}
        db.collection('notes').insert(note, (err, results) => {
        if(err) {
            res.send({ 'error': 'An error has occured' });
        }
        else {
            res.send(result.ops[0]);
        }
        })
    })
}