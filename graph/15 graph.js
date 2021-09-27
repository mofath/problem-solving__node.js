let v;

let adjList;

function Graph(vertices) {
  v = vertices;

  initAdjList();
}

function initAdjList() {
  adjList = new Array(v);

  for (let i = 0; i < v; i++) {
    adjList[i] = [];
  }
}

function addEdge(u, v) {
  adjList[u].push(v);
}

function printAllPaths(s, d) {
  let visited = new Array(v);
  for (let i = 0; i < v; i++) visited[i] = false;
  let pathList = [];

  pathList.push(s);

  printAllPathsUtil(s, d, visited, pathList);
}

function printAllPathsUtil(s, d, visited, localPathList) {
  if (s == d) {
    console.log(localPathList);
    return;
  }

  visited[s] = true;

  for (let i = 0; i < adjList[s].length; i++) {
    if (!visited[adjList[s][i]]) {
      // store current node in path[]
      localPathList.push(adjList[s][i]);
      printAllPathsUtil(adjList[s][i], d, visited, localPathList);

      // remove current node from path[]
      localPathList.splice(localPathList.indexOf(adjList[s][i]), 1);
    }
  }

  visited[s] = false;
}

// Driver program
// Create a sample graph
Graph(4);
addEdge(0, 1);
addEdge(0, 2);
addEdge(0, 3);
addEdge(2, 0);
addEdge(2, 1);
addEdge(1, 3);

let s = 2;
let d = 3;

console.log(printAllPaths(s, d));
