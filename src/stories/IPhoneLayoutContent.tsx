import './IPhoneLayoutContent.css';

const IPhoneLayoutContent = () => {
  return (
    <div className='ril-container'>
      <p className='ril-message'>
        📱 This is <strong>dynamic iPhone layout</strong>!
        <br />
        Add your component here.
      </p>
      <fieldset className='ril-fieldset'>
        <legend className='ril-legend'>More Information</legend>
        <a
          href='https://www.npmjs.com/package/react-iphone-layout'
          className='github-link'
          target='_blank'
        >
          Visit NPM
        </a>
        <br />
        <a
          href='https://github.com/BangDori/react-iphone-layout'
          className='github-link'
          target='_blank'
        >
          Visit GitHub Repository
        </a>
      </fieldset>
    </div>
  );
};

export default IPhoneLayoutContent;
