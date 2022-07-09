import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { HTMLViewer, IHTMLViewerTracker } from '@jupyterlab/htmlviewer';

/**
 * Initialization data for the jupyterlab_trust_html extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_trust_html:plugin',
  autoStart: true,
  requires: [IHTMLViewerTracker],
  activate: (app: JupyterFrontEnd, htmlTracker: IHTMLViewerTracker) => {
    console.log('JupyterLab extension jupyterlab_trust_html is activated!');

    htmlTracker.widgetAdded.connect((sender, panel: HTMLViewer) => {
      console.log('html widget added and automatically set to tru');
      panel.trusted = true;
    });
  }
};

export default plugin;
