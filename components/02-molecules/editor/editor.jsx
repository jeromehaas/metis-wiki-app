import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { javascript } from '@codemirror/lang-javascript';

const Editor = () => {

	return (
		<div className="editor">
  		<CodeMirror value={'hello'} extensions={
				[markdown({ base: markdownLanguage, codeLanguages: languages })]
				} />;
		</div>
	);

};

export {
	Editor
};