import React, { useEffect } from 'react';
import vis from 'vis-network';
import { DataSet } from 'vis-network/standalone/esm/vis-network'

function Network_cause() {
  useEffect(() => {
    const network_result = document.getElementById("network_result");
    var x = -network_result.clientWidth / 2 - 250;
    var y = -network_result.clientHeight / 2 - 200;

    // create an array with nodes
    const nodes = new DataSet([
    // fix node - index
  {
    id: 1,
    x: x,
    y: y,
    label: " 질 병 ",
    fixed: true,
    value: 1,
    physics: false,
    shape: "circle",
    color: "#C2FFBC"
  },
  {
    id: 2,
    x: x + 70,
    y: y,
    label: "잠재증상",
    fixed: true,
    physics: false,
    value: 1,
    shape: "box",
    color: "#FCFF7E",
    group: "result"
  },
  // main node
  { id: 3, label: "COPD", shape: "circle", color: "#C2FFBC"},
  // result node
  { id: 4, label: "death", group: "result"},
  { id: 5, label: "failure", group: "result"},
  { id: 6, label: "stress", group: "result"},
  { id: 7, label: "organism", group: "result"},
  { id: 8, label: "production", group: "result"},
  { id: 9, label: "complications", group: "result"},
  { id: 10, label: "inflammation", group: "result"},
  { id: 11, label: "vitamins", group: "result"},
  { id: 12, label: "obstruction", group: "result"},
  { id: 13, label: "morbidity", group: "result"},
  { id: 14, label: "symptoms", group: "result"},
  { id: 15, label: "death", group: "result" },
  { id: 16, label: "pathogenesis", group: "result" },
  { id: 17, label: "atrophy", group: "result" },
  { id: 18, label: "risk", group: "result" },
  { id: 19, label: "death", group: "result" },
  { id: 20, label: "inflammation", group: "result" },
  { id: 21, label: "rigidity", group: "result" },
  { id: 22, label: "patients", group: "result" },
  { id: 23, label: "disability", group: "result" },
  { id: 24, label: "reduction", group: "result" },
  { id: 25, label: "assessing", group: "result" },
  { id: 26, label: "impairment", group: "result" },
  { id: 27, label: "mortality", group: "result" },
  { id: 28, label: "survival", group: "result" },
  { id: 29, label: "mortality", group: "result" },
  { id: 30, label: "morbidity", group: "result" },
  { id: 31, label: "lungs", group: "result" },
  { id: 32, label: "cost", group: "result" },
  { id: 33, label: "accelerating", group: "result" },
  { id: 34, label: "outcomes", group: "result" },
  { id: 35, label: "decline", group: "result" },
  { id: 36, label: "readmission", group: "result" },
  { id: 37, label: "patients", group: "result" },
  { id: 38, label: "patients", group: "result" },
]);

//,arrows: "to"
// create an array with edges
var edges = new DataSet([
  { to: 2, from: 1, arrows: "to"},
  { to: 4, from: 3, arrows: "to"},
  { to: 5, from: 3, arrows: "to"},
  { to: 6, from: 3, arrows: "to" },
  { to: 7, from: 3, arrows: "to" },
  { to: 8, from: 3, arrows: "to" },
  { to: 9, from: 3, arrows: "to" },
  { to: 10, from: 3, arrows: "to" },
  { to: 11, from: 3, arrows: "to" },
  { to: 12, from: 3, arrows: "to" },
  { to: 13, from: 3, arrows: "to"  },
  { to: 14, from: 3, arrows: "to"  },
  { to: 15, from: 3, arrows: "to"  },
  { to: 16, from: 3, arrows: "to"  },
  { to: 17, from: 3, arrows: "to"  },
  { to: 18, from: 3, arrows: "to"  },
  { to: 19, from: 3, arrows: "to"  },
  { to: 20, from: 3, arrows: "to"  },
  { to: 21, from: 3, arrows: "to"  },
  { to: 22, from: 3, arrows: "to"  },
  { to: 23, from: 3, arrows: "to"  },
  { to: 24, from: 3, arrows: "to"  },
  { to: 25, from: 3, arrows: "to"  },
  { to: 26, from: 3, arrows: "to"  },
  { to: 27, from: 3, arrows: "to"  },
  { to: 28, from: 3, arrows: "to"  },
  { to: 29, from: 3, arrows: "to"  },
  { to: 30, from: 3, arrows: "to"  },
  { to: 31, from: 3, arrows: "to"  },
  { to: 32, from: 3, arrows: "to"  },
  { to: 33, from: 3, arrows: "to"  },
  { to: 34, from: 3, arrows: "to"  },
  { to: 35, from: 3, arrows: "to"  },
  { to: 36, from: 3, arrows: "to"  },
  { to: 37, from: 3, arrows: "to"  },
  { to: 38, from: 3, arrows: "to"  },
]);

    const data = {
      nodes: nodes,
      edges: edges,
    };

    const options = {
      groups: {
        result: {
          shape: "box",
          color: "#FCFF7E", // result color - C2FFBC FF7EB4 FFE37E FCFF7E
        }
    }
    };

    const network = new vis.Network(network_result, data, options);
    network.on('beforeDrawing', function (ctx) {
      const nodeId = 3;
      const nodePosition = network.getPositions([nodeId]);
      ctx.strokeStyle = "#A6D5F7";
      ctx.fillStyle = "#294475";

      ctx.beginPath();
      ctx.arc(
        nodePosition[nodeId].x,
        nodePosition[nodeId].y,
        50,
        0,
        2 * Math.PI,
        false
      );
      ctx.closePath();

      ctx.fill();
      ctx.stroke();
    });
  }, []); // 빈 배열을 전달하여 useEffect를 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <div>
      <div id="network_result"></div>
    </div>
  );
}

export default Network_cause;
