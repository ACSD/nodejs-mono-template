module.exports = {
  root: true,
  extends: ["@~configs/eslint"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
