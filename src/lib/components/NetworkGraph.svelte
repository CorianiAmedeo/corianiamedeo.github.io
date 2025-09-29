<script>
  import { onMount } from "svelte";

  // --- Example nodes and links ---
  const nodes = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "experiences", label: "Experiences" },
    { id: "work1", label: "Project 1" },
    { id: "work2", label: "Project 2" },
  ];

  const links = [
    { source: "about", target: "experiences" },
    { source: "experiences", target: "work1" },
    { source: "experiences", target: "work2" },
  ];

  let sketch = (p) => {
    let nodeData = [];

    // Physics parameters
    const repulsion = 4000;
    const springLength = 100;
    const springStrength = 0.01;
    const damping = 0.85;

    p.setup = () => {
      p.createCanvas(800, 600);
      nodeData = nodes.map((n) => ({
        ...n,
        x: p.random(p.width),
        y: p.random(p.height),
        vx: 0,
        vy: 0,
        fixed: false,
      }));
    };

    p.draw = () => {
      p.background(255);

      // Reset forces
      nodeData.forEach((n) => {
        n.fx = 0;
        n.fy = 0;
      });

      // Node repulsion
      for (let i = 0; i < nodeData.length; i++) {
        for (let j = i + 1; j < nodeData.length; j++) {
          let a = nodeData[i];
          let b = nodeData[j];
          let dx = b.x - a.x;
          let dy = b.y - a.y;
          let distSq = dx * dx + dy * dy + 0.01; // avoid div0
          let force = repulsion / distSq;
          let fx = (force * dx) / Math.sqrt(distSq);
          let fy = (force * dy) / Math.sqrt(distSq);
          a.fx -= fx;
          a.fy -= fy;
          b.fx += fx;
          b.fy += fy;
        }
      }

      // Link attraction (springs)
      links.forEach((l) => {
        let a = nodeData.find((n) => n.id === l.source);
        let b = nodeData.find((n) => n.id === l.target);
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        let force = springStrength * (dist - springLength);
        let fx = (force * dx) / dist;
        let fy = (force * dy) / dist;
        a.fx += fx;
        a.fy += fy;
        b.fx -= fx;
        b.fy -= fy;
      });

      // Update positions with velocity and damping
      nodeData.forEach((n) => {
        if (!n.fixed) {
          n.vx = (n.vx + n.fx) * damping;
          n.vy = (n.vy + n.fy) * damping;
          n.x += n.vx;
          n.y += n.vy;
        }
      });

      // Draw links
      p.stroke(0);
      links.forEach((l) => {
        let a = nodeData.find((n) => n.id === l.source);
        let b = nodeData.find((n) => n.id === l.target);
        p.line(a.x, a.y, b.x, b.y);
      });

      // Draw nodes
      nodeData.forEach((n) => {
        p.fill(100, 150, 240);
        p.stroke(0);
        p.ellipse(n.x, n.y, 30);
        p.fill(0);
        p.noStroke();
        p.textAlign(p.CENTER, p.CENTER);
        p.text(n.label, n.x, n.y - 20);
      });
    };

    // --- Dragging nodes ---
    let draggedNode = null;
    p.mousePressed = () => {
      draggedNode = nodeData.find((n) => {
        let d = p.dist(p.mouseX, p.mouseY, n.x, n.y);
        return d < 15;
      });
      if (draggedNode) draggedNode.fixed = true;
    };
    p.mouseReleased = () => {
      if (draggedNode) draggedNode.fixed = false;
      draggedNode = null;
    };
    p.mouseDragged = () => {
      if (draggedNode) {
        draggedNode.x = p.mouseX;
        draggedNode.y = p.mouseY;
      }
    };
  };

  onMount(async () => {
    const p5Module = await import("p5");
    const p5 = p5Module.default;
    new p5(sketch, document.getElementById("network-graph"));
  });
</script>

<div id="network-graph" style="width: 100%; height: 600px;"></div>
