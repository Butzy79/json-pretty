module.exports = class JsonFormatter extends require('obsidian').Plugin {
  onload() {
    this.addCommand({
      id: 'butzy-json-prettify',
      name: 'Prettify',
      editorCallback: (editor) => {
        this.formatJson(editor, true);
      }
    });

    this.addCommand({
      id: 'butzy-json-minify',
      name: 'Minify',
      editorCallback: (editor) => {
        this.formatJson(editor, false);
      }
    });
  }


  formatJson(editor, pretty) {
    let selection = editor.getSelection();
    let text = selection.length ? selection : editor.getValue();
    text = text
        .replace(/'/g, '"')
        .replace(/\bTrue\b/g, 'true')
        .replace(/\bFalse\b/g, 'false')
        .replace(/\bNone\b/g, 'null');
    try {
        const obj = JSON.parse(text);
        const formatted = pretty ? JSON.stringify(obj, null, "\t") : JSON.stringify(obj);

        if (selection.length) {
            editor.replaceSelection(formatted);
        } else {
            editor.setValue(formatted);
        }
    } catch (e) {
        new Notice("Not valid JSON!", 3000);
    }
  }
}
