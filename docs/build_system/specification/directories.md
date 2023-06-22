# How your project needs to be structured

A devm project needs to have the following directories

- src
  - (include)
- build
- tmp
- dep

## src

The source directory contains all the source code that you write. If for example you write some code in the C programming language, you will have to
manually create an `include` directory, if you did not specify `clion` as the template (then devm will automatically create one).

## build

The executable and all shared libraries needed aside except for some libraries like `math` that are part of the system library.

## tmp

Temporary directory that just contains intermediate binary (object) files.

## dep

Dependency packages
