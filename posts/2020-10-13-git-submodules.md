---
title: Git Submodules
date: 2020-10-13
tags: git
---

## What are Git Submodules?

To be really short and concise, Submodules in Git are repositories inside other repositories.

## Why would I need Submodules?

Sometimes a project might become too large and needs some of its parts to be developed independently but can't be separated. You could start tracking them as Submodules to ease their development.

Another use case might be when exploring a new language or framework and developing a test app (like a to-do app, a Hacker News clone or a pomodoro timer) you might want to keep track of all those apps to come back to them later, but also all in one place. Submodules are suited for this as well.

## How to use Git Submodules?

Let's create a new folder for our demo project, initialize Git and make our first commit with a newly created file.

```bash
$ mkdir submodules-demo
$ cd submodules-demo
$ git init
$ echo "# Git Submodules" > README.md
$ git add .
$ git commit -m "First commit"
$ git status
On branch main
nothing to commit, working tree clean
# push changes to a remote
$ git remote add origin https://github.com/adcpe/submodule-demo.git
$ git push -u origin main
```

The repo is ready now.

Now let's add a Submodule inside this repo. The Submodule can be an existing remote repo or a local new one. Let's take a look at both.

### Adding an existing remote repo

The syntax for adding a existing remote repo is as follows.

```bash
$ git submodule add [url] [destination folder (optional)]
```

Now let's add a real repo and rename it inside the parent repo.

```bash
$ git submodule add https://github.com/adcpe/remote-sm-demo.git remote-demo
```

Let's commit this changes, using only one line to commit all current changes.

```bash
$ git commit -am "Added a new remote submodule"
[main 3914b02] Added a new remote submodule
 2 files changed, 4 insertions(+)
 create mode 100644 .gitmodules
 create mode 160000 remote-demo
$ git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
```

Now let's take a look a the method for adding a new local repo.

### Adding a new local repo

For this method, we have to start by creating a new folder inside the parent, then initializing Git inside it and finally adding the new folder as a submodule

```bash
# create the folder and cd into it
$ mkdir local-sm-demo
$ cd local-sm-demo
$ git init
$ echo "# local-sm-demo" > README.md
$ git commit -am "First commit"
# go back to the parent folder
$ cd ..
# check the status of the parent repo
$ git status
On branch main
Your branch is ahead of 'origin/main' by 1 commit.
  (use "git push" to publish your local commits)

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   .gitmodules
	new file:   local-sm-demo
$ git commit -m "Add the local submodule"
```

With this, now you have a fully functional local submodule.

Note that this local submodule doesn't have a remote origin where it can be tracked independently. You should **always** do this but for this demo I will not.

## .gitmodules

You might have noticed this file that was created when you added the first submodule. It's a simple and normally you don't need to do anything to it. Let's take a look at it.

```
[submodule "remote-demo"]
	path = remote-demo
	url = https://github.com/adcpe/remote-sm-demo.git
[submodule "local-sm-demo"]
	path = local-sm-demo
	url = ./local-sm-demo
```

We can see that the details of the submodules are here. Here's an explanation of the first 3 lines:

- `[submodule "remote-demo"]` states the given name of this submodule.
- `path = remote-demo` refers to the folder name where our submodule is stored inside the parent directory.
- `url = git@github.com:adcpe/remote-sm-demo.git` is the URL path of our remote repo.

You could add submodules by editing this file directly but I think the command line method is faster.

## Cloning repos with submodules

When you clone a repository with submodules, Git only clone the parent repo. Meaning, it creates the folders for the submodules but doesn't clone the submodules from their origin.

Let's delete our parent directory and clone it from the remote.

```bash
$ cd ..
$ rm -rf submodule-demo
$ git clone https://github.com/adcpe/submodule-demo.git
$ cd submodule-demo
$ ls -a
.git  local-sm-demo  remote-demo  .gitmodules  README.md
# now let's check inside the remote-demo folder
$ ls -a remote-demo
$
```

This last command shows that the folder is empty. Let's fetch its contents.

First, we must initialize the submodules.

```bash
$ git submodule init
Submodule 'local-sm-demo' (https://github.com/adcpe/submodule-demo.git/local-sm-demo) registered for path 'local-sm-demo'
Submodule 'remote-demo' (https://github.com/adcpe/remote-sm-demo.git) registered for path 'remote-demo'
```

Then, we can choose to fetch all submodules or select which one to fetch. Let's fetch the `remote-demo` submodule.

```bash
$ git submodule update remote-demo/
Cloning into '/home/adc/gh/submodule-demo/remote-demo'...
Submodule path 'remote-demo': checked out '65ab769a363247ea7a6395e4fdc5b2652e4a8fdd'
$ ls -a remote-demo
.git  README.md
```

Now we have our submodule up to date with the remote.

## A few considerations

- If we try to update the `local-sm-demo` directory we will get an error. This happens because the local repo had its commit history stored only locally. If we run the command it will try to pull from a non-existing history. It was deleted when the parent folder was deleted.
- Every time you make a change inside a submodule, you commit changes as usual inside the folder. Then, you have to commit the changes in the parent directory so that you can later recall what was the latest state of the submodule.

## Wrapping up

Submodules are useful and they can be used on large projects with many sub-projects or with projects that are similar and need to be tracked separately. I mostly use them for the latter because it allows me to keep track of test projects on new languages or frameworks.

For more information on Git Submodules, refer to [Git’s documentation](https://git-scm.com/book/en/v2/Git-Tools-Submodules).

I hope this is as useful for you as it was for me writing it.
