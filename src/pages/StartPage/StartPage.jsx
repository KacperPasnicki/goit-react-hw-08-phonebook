import css from './StartPage.module.css';

const StartPage = () => {
  if (!StartPage) return '...loading';

  return (
    <>
      <h1 className={css.header}>
        Phonebook welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </>
  );
};

export default StartPage;
