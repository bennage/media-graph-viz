# media-graph-viz

## requirements
- Visual Studio Code
- [Remote Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- Docker (with file sharing enabled)

## usage
- Open the project in Code
- It should prompt you to reopen in a container ([more info](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container))
- in the terminal in Code:
  - `npm i` to install the dependencies
  - `node index.js` to run
  
Put the media graphs in the `input` folder. After running `node index.js` the svg files will be in the `out` folder.
