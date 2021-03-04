const fetch = require("./fetch");
const i18n = require("./i18n.json");
const Card = require("./Card");
const Error = require("./Error");

module.exports = (req, res) => {
  const { username } = req.params;
  const { lang = "en" } = req.query;
  const message = i18n[lang];
  res.header("Content-Type", "image/svg+xml");

  if (!message) {
    res.send(Error("Unsupported language!"));
    return;
  }

  fetch(username)
    .then((stats) => {
      const {
        posts_count,
        total_post_views,
        reputation,
        followers_count,
        answers_count,
        questions_count,
      } = stats.data;

      res.send(
        new Card(username, { ...req.query })
          .createRow(message.views, total_post_views)
          .createRow(message.posts, posts_count)
          .createRow(message.questions, questions_count)
          .createRow(message.answers, answers_count)
          .createRow(message.followers, followers_count)
          .createRow(message.reputation, reputation)
          .render()
      );
    })
    .catch(console.error);
};
