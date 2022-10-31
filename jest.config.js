module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "src"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^@actions(.*)$": "<rootDir>/src/actions$1",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@contexts(.*)$": "<rootDir>/src/contexts$1",
    "^@hooks(.*)$": "<rootDir>/src/hooks$1",
    "^@pages(.*)$": "<rootDir>/src/pages$1",
    "^@reducers(.*)$": "<rootDir>/src/reducers$1",
    "^@services(.*)$": "<rootDir>/src/services$1",
    "^@store(.*)$": "<rootDir>/src/store$1",
    "^@utils(.*)$": "<rootDir>/src/utils$1",
    "\\.scss$": "identity-obj-proxy",
  },
  transformIgnorePatterns: ["node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"],
};
