//const axios = require("axios");
const router = require("express").Router();
const cheerio = require("cheerio");
const request = require("request");

router.route("/news", (req, res) => {
   //axios.get("/news")
   //.then( function(response){ 
    request("http://www.npr.org/sections/politics-pop-culture/", function(error, response, html) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(html);
    // Now, we grab every h2 within an article tag, and do the following:
    // Save an empty result object
    var vresult = [];
    $(".item-info").each(function(i, element) {

      var vtitle = $(this).children("h2").children("a").text();
      var vlink = $(this).children("h2").children("a").attr("href");
      var vdescription = $(this).children("p").children("a").text();
      var vid = i;

      vresult.push({
        id: vid,
        title: vtitle,
        link: vlink,
        description: vdescription
      });

    });
    var newsObject = {
      scrapednews: vresult
    };
    //console.log(result);
    res.json(newsObject);
  });    
//})
    //.then(({ data: { results } }) => res.json(results))
    //.catch(err => res.status(422).json(err));
});

module.exports = router;
