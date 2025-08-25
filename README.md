# cms-generator

generate [CMS](https://github.com/BoxMeApp/cms) code

## Features

The **cms-generator** VS Code extension helps you quickly generate code for your CMS projects. It adds a context menu action to folders in the Explorer, allowing you to generate code templates or files with a single click.

**Features:**

- Right-click any folder in the Explorer and select **"generate cms"** to generate code templates.

## Release Notes

### 0.0.1

generate code

## development

set default root path to debug

```json
{
"args": [
    "--extensionDevelopmentPath=${workspaceFolder}",
    "${workspaceFolder}/test" // here to choose root path
],
}

```
