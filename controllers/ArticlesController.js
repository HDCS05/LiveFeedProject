const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Article
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Article
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // news: function(req, res) {
  //   request("http://www.npr.org/sections/politics-pop-culture/", function (error, response, html) {
  //     // Then, we load that into cheerio and save it to $ for a shorthand selector
  //     var $ = cheerio.load(html);
  //     var result = [];
  //     // Now, we grab every h2 within an article tag, and do the following:
  //     // Save an empty result object
  //     //result = [];
  //     $(".item-info").each(function (i, element) {

  //       var vtitle = $(this).children("h2").children("a").text();
  //       var vlink = $(this).children("h2").children("a").attr("href");
  //       var vdescription = $(this).children("p").children("a").text();
  //       var vid = i;

  //       result.push({
  //         id: vid,
  //         title: vtitle,
  //         link: vlink,
  //         description: vdescription
  //       });

  //     });
  //     var NewsObject = {
  //       scrapednews: result
  //     };
  //     //console.log(result);
  //     res.json(NewsObject);
  //   });
  // }
};
