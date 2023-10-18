import React, { useEffect } from 'react';
import vis from 'vis-network';
import { DataSet } from 'vis-network/standalone/esm/vis-network'

function Network_cause() {
  useEffect(() => {
    const network_cause = document.getElementById("network_cause");
    var x = -network_cause.clientWidth / 2 - 250;
    var y = -network_cause.clientHeight / 2 - 200;

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
    color: "#FCFF7E"
  },
  {
    id: 2,
    x: x + 70,
    y: y,
    label: "잠재원인",
    fixed: true,
    physics: false,
    value: 1,
    shape: "box",
    color: "#C2FFBC",
    group: "cause"
  },
  // main node
  { id: 3, label: "COPD", shape: "circle", color: "#FCFF7E"},
  // cause node
  { id: 4, label: "therapy", group: "cause"},
  { id: 5, label: "smoking", group: "cause"},
  { id: 6, label: "presence", group: "cause"},
  { id: 7, label: "dysfunction", group: "cause"},
  { id: 8, label: "breathlessness", group: "cause"},
  { id: 9, label: "inﬂammation", group: "cause"},
  { id: 10, label: "smoking", group: "cause"},
  { id: 11, label: "deficiency", group: "cause"},
  { id: 12, label: "antitrypsin", group: "cause"},
  { id: 13, label: "morbidity", group: "cause"},
  { id: 14, label: "pathobiology", group: "cause"},
  { id: 15, label: "inhibition", group: "cause" },
  { id: 16, label: "cells", group: "cause" },
  { id: 17, label: "smoke", group: "cause" },
  { id: 18, label: "mechanisms", group: "cause" },
  { id: 19, label: "abnormalities", group: "cause" },
  { id: 20, label: "ranking", group: "cause" },
  { id: 21, label: "prevalence", group: "cause" },
  { id: 22, label: "cancer", group: "cause" },
  { id: 23, label: "smoke", group: "cause" },
  { id: 24, label: "contribution", group: "cause" },
  { id: 25, label: "strategies", group: "cause" },
  { id: 26, label: "towards", group: "cause" },
  { id: 27, label: "diversity", group: "cause" },
  { id: 28, label: "therapies", group: "cause" },
  { id: 29, label: "smoking", group: "cause" },
  { id: 30, label: "outcomes", group: "cause" },
  { id: 31, label: "disease", group: "cause" },
  { id: 32, label: "reduction", group: "cause" },
  { id: 33, label: "bronchioli", group: "cause" },
  { id: 34, label: "treatment", group: "cause" },
  { id: 35, label: "exposure", group: "cause" },
  { id: 36, label: "richness", group: "cause" },
  { id: 37, label: "abundance", group: "cause" },
  { id: 38, label: "symptoms", group: "cause" },
]);

//,arrows: "to"
// create an array with edges
var edges = new DataSet([
  { from: 2, to: 1, arrows: "to"},
  { from: 4, to: 3, arrows: "to"},
  { from: 5, to: 3, arrows: "to"},
  { from: 6, to: 3, arrows: "to" },
  { from: 7, to: 3, arrows: "to" },
  { from: 8, to: 3, arrows: "to" },
  { from: 9, to: 3, arrows: "to" },
  { from: 10, to: 3, arrows: "to" },
  { from: 11, to: 3, arrows: "to" },
  { from: 12, to: 3, arrows: "to" },
  { from: 13, to: 3, arrows: "to"  },
  { from: 14, to: 3, arrows: "to"  },
  { from: 15, to: 3, arrows: "to"  },
  { from: 16, to: 3, arrows: "to"  },
  { from: 17, to: 3, arrows: "to"  },
  { from: 18, to: 3, arrows: "to"  },
  { from: 19, to: 3, arrows: "to"  },
  { from: 20, to: 3, arrows: "to"  },
  { from: 21, to: 3, arrows: "to"  },
  { from: 22, to: 3, arrows: "to"  },
  { from: 23, to: 3, arrows: "to"  },
  { from: 24, to: 3, arrows: "to"  },
  { from: 25, to: 3, arrows: "to"  },
  { from: 26, to: 3, arrows: "to"  },
  { from: 27, to: 3, arrows: "to"  },
  { from: 28, to: 3, arrows: "to"  },
  { from: 29, to: 3, arrows: "to"  },
  { from: 30, to: 3, arrows: "to"  },
  { from: 31, to: 3, arrows: "to"  },
  { from: 32, to: 3, arrows: "to"  },
  { from: 33, to: 3, arrows: "to"  },
  { from: 34, to: 3, arrows: "to"  },
  { from: 35, to: 3, arrows: "to"  },
  { from: 36, to: 3, arrows: "to"  },
  { from: 37, to: 3, arrows: "to"  },
  { from: 38, to: 3, arrows: "to"  },
]);

    const data = {
      nodes: nodes,
      edges: edges,
    };

    const options = {
      groups: {
        cause: {
          shape: 'box',
          color: '#C2FFBC',
        },
      },
    };

    const network = new vis.Network(network_cause, data, options);
    network.on('beforeDrawing', function (ctx) {
      const nodeId = 3;
      const nodePosition = network.getPositions([nodeId]);
      ctx.strokeStyle = '#A6D5F7';
      ctx.fillStyle = '#294475';

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
      <div id="network_cause"></div>
  );
}

export default Network_cause;
