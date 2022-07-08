# magoyette Windrift components

My custom components for the [Windrift](https://github.com/lizadaly/windrift/) hypertext story engine.

Those components are maintained in this repository to make it easier to merge changes from upstream and
to allow their code to be public even if the stories that requires them aren't yet public.
Interactive fiction competitions usually require the stories to stay private until the contest.

This repository contains:

-   the code of the [Windrift](https://github.com/lizadaly/windrift/) story engine
-   the custom Windrift components Marc-André Goyette uses in his stories
-   a story to test those custom components

## Repository creation steps

The following commands were used to create this repository with a single `main` branch from the Windrift
repository.

```sh
git clone --bare https://github.com/lizadaly/windrift.git windrift-bare

cd windrift-bare

git push https://github.com/magoyette/magoyette-windrift-components.git +main:main

rm -drf windrift-bare

cd magoyette-windrift-components

git remote add upstream https://github.com/lizadaly/windrift.git
git remote set-url --push upstream DISABLE
```

## Merging changes from upstream

```sh
./merge-upstream.sh
```

## License

The source code of [Windrift](https://github.com/lizadaly/windrift/) is distributed under the MIT License.

The source code written by Marc-André Goyette for the custom components is also distributed under the
MIT License.
