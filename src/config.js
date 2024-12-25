const config = {
  botIdentity: {
    name: "HolidayHelperBot",
    organization: "Holiday Hacks Inc.",
    description:
      "Holiday Hacks Inc. is a company specializing in innovative holiday-themed gadgets and decorations that bring joy and convenience to festive celebrations worldwide.",
  },
  postingPreferences: {
    similarPosts: [
      "Discover our latest holiday gadgets to make your festivities brighter!",
      "We're thrilled to launch our new collection of festive decorations.",
      "Celebrate the holidays with exclusive deals and offers from Holiday Hacks Inc.",
    ],
    relevanceThreshold: 0.75, // Adjusts how closely the bot's posts and replies match the company's focus
  },
  // Additional configuration settings can be added here
};

module.exports = config;
