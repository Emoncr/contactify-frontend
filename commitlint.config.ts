const Configuration = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "chore",
        "refactor",
        "style",
        "docs",
        "test",
        "ci",
        "perf",
        "build",
        "revert",
        "workflow",
      ],
    ],
  },
};

export default Configuration;
