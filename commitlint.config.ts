const Configuration = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["feat", "fix", "chore", "refactor", "style", "docs", "test"]],
  },
};

export default Configuration;
