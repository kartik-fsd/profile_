// CodeBlock.js
import PropTypes from 'prop-types';
import './CodeBlock.css';

const CodeBlock = ({ code, language = 'javascript', showLineNumbers = true }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      console.log('Code copied to clipboard');
    }).catch((err) => {
      console.error('Unable to copy to clipboard', err);
    });
  };

  return (
    <div className={`code-block-container ${showLineNumbers ? 'line-numbers' : ''}`}>
      <div className="code-block">
        <pre className={`language-${language}`}>
          <code>{code}</code>
        </pre>
        <button className="copy-button" onClick={copyToClipboard}>
          Copy Code
        </button>
      </div>
    </div>
  );
};

CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string,
  showLineNumbers: PropTypes.bool,
};

export default CodeBlock;
