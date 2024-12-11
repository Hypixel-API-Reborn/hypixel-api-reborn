# Contributing

If you want to contribute to hypixel-api-reborn, feel free to fork the repository and submit pull request.

## Table of contents

- [Requirements](#requirements)
- [Project Setup](#project-setup)
- [Testing your changes](#testing-your-changes)
- [Submitting a pull request](#submitting-a-pull-request)
- [Common issues](#common-issues)

### Requirements

- [Node v20.16.0 or higher](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
- [pnpm v9.7.1 or higher](https://pnpm.io/installation)

### Project Setup

Once you have the requirements installed, you can clone the repository and install the dependencies.

```bash
pnpm install
```

Once you have all the packages installed, you will need to create a `.env` file. This file will contain the Hypixel API
key. You can get one by going to the [Hypixel Developer Portal.](https://developer.hypixel.net/) This key will be used
in the tests. Your `.env` file should look like this:

```env
HYPIXEL_KEY=HYPIXEL_API_KEY
```

**If your using vscode** With vscode we have a few recommended extensions that you can install to help with development.
You will be promoted to install these when you open the project in vscode. If you don't see the prompt, you can install
the extensions manually. Here are the recommended extensions:

- [Editor Config](https://marketplace.visualstudio.com/items?itemName=editorconfig.editorconfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Gitlens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- [Vitest](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)
- [GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=github.vscode-pull-request-github)

### Testing your changes

Before submitting a pull request, make sure to test your changes. You can run the tests with the following command:

```bash
pnpm test
```

### Submitting a pull request

When submitting a pull request, make sure to provide a detailed description of the changes you made. If you are adding a
new feature, make sure to include tests for it. If you are fixing a bug, make sure to include the bug report
information. When making a pull request we have a few requirements:

- Tests must pass (`pnpm test`)
- Code must be linted (`pnpm lint`)
- Code must be formatted (`pnpm prettier`)
- A clear and detailed description of the changes that you have done
- Checkboxes for the changes you made
- Screenshots of the code running (if applicable)

### Common issues

There are a few common issues that can come up when contributing to the project. Here are a few of them:

- **Tests failing**: Tests will fail when making a pull request. This is because it's missing an API key set in github
  actions. If this is the case, you can ignore the tests and someone will run them for you when reviewing the pull
  request.

- **Code formatting**: Code must be formatted and the github actions will check for this. If the code is not formatted,
  the github action will fail and you will need to correct this before the pull request can be merged.

- **Code using npm**: Any code that includes an npm lock file will not be accepted. This is because we use pnpm for
  package management. If you have an npm lock file, you will need to remove it and use pnpm to install the packages.
