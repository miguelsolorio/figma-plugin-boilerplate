figma.showUI(__html__, { width: 400, height: 250 });

figma.ui.onmessage = async msg => {

  // incoming from ui
  if (msg.type === "do-something") {
    console.log('👈 Do something')
  }
}

// outgoing to ui
figma.ui.postMessage({ type: 'load-something' })