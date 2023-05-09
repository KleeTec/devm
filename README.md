# Development Manager

This project aims to be a replacement for CMake, Make and development packages from dnf, apt, nix, and so on.

The goal is to make a package manager that can run on windows and linux, installs all dependencies of the libraries needed, but also isolates every
installation from the rest of the system. You can find everything of one package in one directory. Every package directory consists of the same
hierarchy of directories, so you can easily find all the files that belong to the package you search for on your PC.

## Usage

```sh
devm search <name> # searches through the default repository to find a package called similar to <name>
devm --install <package> # installs a package from default repository
devm --remove <package> # removes a package from the system
devm list # lists all installed packages
devm history # show history of steps did
devm --rollback <version?> # go back in history either one step or to <version>
devm build <mode> # installs all dependencies listed in dependencies.txt and builds the project based on the configuration made in <mode>.ts file
```

More on these commands you can read on:

- [search](./docs/search.md)
- [install](./docs/install.md)
- [remove](./docs/remove.md)
- [list](./docs/list.md)
- [history](./docs/history.md)
- [rollback](./docs/rollback.md)
- [build](./docs/build.md)

## Installation Setup

1. Download either `unix.bash` for Linux (no idea if Mac is supported) or `windows.bat` for Windows and run it in the directory where you want devm to
   be installed.
2. Add exactly this path to your PATH environment variable. If you don't know how to do that, you should.
