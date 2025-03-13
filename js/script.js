function toggleNode(el) {
      // Only toggle if the node has children
      if (el.querySelector('.children')) {
        el.classList.toggle('expanded');
        event.stopPropagation(); // Prevent parent nodes from toggling
      }
    }
