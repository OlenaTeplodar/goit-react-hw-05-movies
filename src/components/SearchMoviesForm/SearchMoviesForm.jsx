import { useState } from 'react';
import PropTypes from 'prop-types';
import { GrSearch } from 'react-icons/gr';
import { ButtonStyle, FormStyle, LabelStyle, InputStyle } from './searchMoviesForm.styled';

const INITIAL_STATE = {
  query: '',
};
const SearchMoviesForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...INITIAL_STATE });
  };

  const { query } = state;

  return (
    <main>
      <FormStyle onSubmit={handleSubmit}>
        <LabelStyle>
          <InputStyle
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search movies"
            name="query"
            autoComplete="off"
            autoFocus
          />
          <ButtonStyle type="submit">
            <GrSearch />
            Search
          </ButtonStyle>
        </LabelStyle>
      </FormStyle>
    </main>
  );
};
export default SearchMoviesForm;

SearchMoviesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
