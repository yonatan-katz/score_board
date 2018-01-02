function require_uncached(module){
    delete require.cache[require.resolve(module)]
    return require(module)
}
exports.score_context = function() {        
    var content = require_uncached("/root/deepcourse/leader_board/output/leader_board_res.json")
    //var content = reload("/root/deepcourse/leader_board/output/leader_board_res.json)
    console.log(content)
    return content
}
