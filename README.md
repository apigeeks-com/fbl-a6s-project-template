# fbl-a6s-project-template

FireBlink Logistic's plugin project generator.

## Installation

First, install [FBL](https://www.npmjs.com/package/fbl).

```bash
npm install -g fbl
```

Then generate your new project with:

```bash
fbl https://github.com/apigeeks-com/fbl-a6s-project-template/archive/master.tar.gz
```

You can also pass all the options into command itself to avoid answering prompts:

```bash
fbl \
 -c \$.name=plugin_name \
 -c \$.author=AuthorName \
 -c \$.license=MIT \ 
 -c \$.destination=/path/to/plugin_directory \
 https://github.com/apigeeks-com/fbl-a6s-project-template/archive/master.tar.gz
```