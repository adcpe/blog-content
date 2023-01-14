---
title: Setting up Ruby for VSCode
date: 2021-02-04
tags: ruby,vscode
excerpt: This is how I set up VSCode to write Ruby.
---

Here is a little guide to setting up IntelliSense and auto-completion on VSCode for Ruby quickly.
Requirements

Might seem a bit obvious, but you need the following in your computer:

[VSCode](https://code.visualstudio.com/)

[Ruby](https://www.ruby-lang.org/en/downloads/)

## What will be installed?

[Rubocop](https://rubocop.org/)

From its page: The Ruby Linter/Formatter that Serves and Protects. It’s just that. A linter and formatter that takes rules from a configuration file ad applies them to Ruby files.

[Airbnb Ruby style guide](https://github.com/airbnb/ruby)

I use this one because its widespread and sane. I also use their [JavaScript style guide](https://github.com/airbnb/javascript).

[Solargraph](https://solargraph.org/)

Solargraph is a Ruby gem that provides intellisense features through Microsoft’s language server protocol. It can also lint and format code, but I find Rubocop better for that task.

[Ruby extension for VSCode](https://marketplace.visualstudio.com/items?itemName=rebornix.Ruby)

[Solargraph extension for VSCode]()

## What is IntelliSense?

In a nutshell, IntelliSense provides autocomplete for your code (names for methods, classes, etc) and also inline documentation. For example, if you want to apply a Ruby method on an array, it will present you with all the methods for arrays as you type. It’s very useful and can speed up coding a lot.

## The installation

### Gem installation

In a terminal, enter this command:

```console
gem install solargraph rubocop-airbnb
```

It installs Solargraph and the Airbnb extension for Rubocop, which in turn installs Rubocop. It’s better to install Rubocop in this way only because VSCode reports of conflicting versions in the system otherwise. Extension installation

Then, we install the VSCode extensions. You could look for `ruby.rebornix` and `castwide.solargraph` on the extension marketplace inside VSCode or copy/paste this commands on the command palette (usually Ctrl/Cmd + Shift + P or F1.)

```console
ext install rebornix.Ruby
ext install castwide.solargraph
```

Note: remember to remove the `>` that appears on the command palette.

## Configurations

### System configuration

Rubocop will take a global configuration file on your home directory. In Linux the path is `/home/<your-username>` and on Windows it should be `C:\Users\<your-username>`.

The filename is `.rubocop.yml` and it must contain these two lines.

```yml
require:
  - rubocop-airbnb
```

### VSCode settings

In VSCode, we need to edit settings.json. Copy and paste these lines and edit them with your values.

```json
"ruby.interpreter.commandPath": "path/to/ruby",
"ruby.useLanguageServer": true,
"ruby.useBundler": true,

"solargraph.commandPath": "path/to/solargraph",
"solargraph.formatting": true,
"solargraph.diagnostics": true,
"[ruby]": { "editor.defaultFormatter": "castwide.solargraph" },
```

To find the correct paths to Ruby and Solargraph, enter these commands depending on your OS.

#### Linux

```console
which ruby which solargraph
```

##### Windows

```console
where ruby where solargraph
```

And that’s it. With that, VSCode is now a great environment for writing Ruby code.
