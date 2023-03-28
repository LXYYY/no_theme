import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('notheme.toggleSideBar', () => {
    const config = vscode.workspace.getConfiguration('workbench');
    const currentVisibility = config.get<boolean>('activityBar.visible');
    if (typeof currentVisibility === 'boolean') {
      config.update('activityBar.visible', !currentVisibility, vscode.ConfigurationTarget.Global);
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}