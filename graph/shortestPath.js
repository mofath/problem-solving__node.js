const strArr = [
  '5',
  'A',
  'B',
  'C',
  'D',
  'F',
  'A-B',
  'A-C',
  'B-C',
  'C-D',
  'D-F',
];

function GraphChallenge(strArr) {
  const n = strArr.shift();
  const nodesList = {};
  const edges = strArr.slice(n, strArr.length);
  const src = strArr[0];
  const dist = strArr[n - 1];

  strArr.slice(0, n).forEach((node) => {
    nodesList[node] = [];
  });

  const addNeighbor = (vertex, neighbor) => {
    if (nodesList[vertex].indexOf(neighbor) === -1) {
      nodesList[vertex].push(neighbor);
    }
  };

  edges.forEach((edge) => {
    const edgeArr = edge.split('-');
    addNeighbor(edgeArr[0], edgeArr[1]);
    addNeighbor(edgeArr[1], edgeArr[0]);
  });

  function findAllPaths(src, dist) {
    let visited = {};
    const paths = [];
    let pathList = [];

    pathList.push(src);
    findPath(src, dist, visited, pathList);

    return paths;

    function findPath(src, dist, visited, localPathList) {
      if (src == dist) {
        paths.push(localPathList.join('-'));
        return;
      }

      visited[src] = true;

      for (let i = 0; i < nodesList[src].length; i++) {
        if (!visited[nodesList[src][i]]) {
          localPathList.push(nodesList[src][i]);
          findPath(nodesList[src][i], dist, visited, localPathList);
          localPathList.splice(localPathList.indexOf(nodesList[src][i]), 1);
        }
      }

      visited[src] = false;
    }
  }

  return findAllPaths(src, dist).reduce((a, b) =>
    a.length <= b.length ? a : b
  );
}

console.log(GraphChallenge(strArr));
