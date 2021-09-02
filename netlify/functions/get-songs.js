const { builder } = require("@netlify/functions");

const handler = async (event) => {
  let songs = [
    { name: "Nimeni on Feeniks", artist: "Synestesia", year: 2009 },
    { name: "Welcome home (Sanitarium)", artist: "Metallica", year: 1986 },
    { name: "Master of Puppets", artist: "Metallica", year: 1986 },
    { name: "Get Lucky", artist: "Daft Punk", year: 2013 },
    { name: "Thriller", artist: "Michael Jackson", year: 1983 },
  ];
  try {
    const subject = event.queryStringParameters.name || "World";
    return {
      statusCode: 200,
      body: JSON.stringify({ songs }),
      headers: {
        "Content-Type": "Application/JSON",
        "Access-Control-Allow-Origin": "*",
      },
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

exports.handler = builder(handler);
