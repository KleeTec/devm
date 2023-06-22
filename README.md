# Development Manager

This project aims to be a replacement for CMake, Make and development packages from dnf, apt, nix, and so on.

The goal is to make a package manager that can run on windows and linux, installs all dependencies of the libraries needed, but also isolates every
installation from the rest of the system. You can find everything of one package in one directory. Every package directory consists of the same
hierarchy of directories, so you can easily find all the files that belong to the package you search for on your PC.

## Usage

### package management

```sh
# searches through the default repository to find a package called similar to <name>
devm search <name>
# installs a package from default repository
devm install <package>
# removes a package from the system 
devm remove <package>
# lists all installed packages
devm list
# show history of package option steps did
devm history
# go back in history either one step or to <version>
devm rollback [version]
```

### build system

```sh
# initializes a (new) project and creates all files needed
devm init <template?>
# installs all dependencies listed in .dependencies.txt and builds the project based on the configuration made in <mode>.ts file
devm build <mode>
```

## Installation Setup

1. Download either `unix.bash` for Linux (no idea if Mac is supported) or `windows.bat` for Windows and run it in the directory where you want devm to
   be installed.
2. Add exactly this path to your PATH environment variable. If you don't know how to do that, you are screwed anyway.

## Package specification

Every package consists of the following directory hierarchy:

```txt
package_name
├── bin
├── include
├── lib
├── src
├── usr
└── var
```

More on those directories in the [directories specification](./docs/package_management/specification/directories.md).
