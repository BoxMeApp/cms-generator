import * as vscode from 'vscode';
import { a, cms, s } from './template';


export function activate(context: vscode.ExtensionContext) {
	const folderContextDisposable = vscode.commands.registerCommand('cms-generator.folderContextAction', async (uri: vscode.Uri) => {
		
		const fileA = vscode.Uri.joinPath(uri, 'a.dart');
		const fileS = vscode.Uri.joinPath(uri, 's.dart');
		const fileCms = vscode.Uri.joinPath(uri, 'cms.dart');

		if ((await Promise.all([fileExists(fileA), fileExists(fileS), fileExists(fileCms)])).some(exists => exists)) {
			vscode.window.showWarningMessage(`One or more files already exist`);
			return;
		}

		await Promise.all([
			writeFile(fileA, Buffer.from(a)),
			writeFile(fileS, Buffer.from(s)),
			writeFile(fileCms, Buffer.from(cms))
		]);

		vscode.window.showInformationMessage(`cms generated`);
	});
	context.subscriptions.push(folderContextDisposable);
}

export function deactivate() {}

function writeFile(uri: vscode.Uri, content: Uint8Array): Thenable<void> {
	return vscode.workspace.fs.writeFile(uri, content);
}

function fileExists(uri: vscode.Uri): Thenable<boolean> {
	return vscode.workspace.fs.stat(uri).then(
		() => true,
		(err) => {
			if (err instanceof vscode.FileSystemError && err.code === 'FileNotFound') {
				return false;
			}
			throw err;
		}
	);
}
