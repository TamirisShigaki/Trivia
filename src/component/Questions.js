// import React from 'react';
// import { useDispatch } from 'react-redux';

// export default function Questions() {

//   const token = useSelector((state) => state.token);
//   useEffect(() => {
//     console.log(token);
//   }, [token]);
//   return (
//     <div>
//       <h4
//         data-testid="question-category"
//       >
//         Category
//       </h4>
//       <p
//         data-testid="question-text"
//       >
//         Text
//       </p>
//       <div
//         data-testid="answer-options"
//       >
//         <button
//           data-testid="btn-play"
//           type="button"
//         /* onClick={ handleBtmclick } */
//         >
//           Answer 1
//         </button>
//         <button
//           data-testid="btn-play"
//           type="button"
//         /* onClick={ handleBtmclick } */
//         >
//           Answer 2
//         </button>
//         <button
//           data-testid="btn-play"
//           type="button"
//         /* onClick={ handleBtmclick } */
//         >
//           Answer 3
//         </button>
//         <button
//           data-testid="btn-play"
//           type="button"
//         /* onClick={ handleBtmclick } */
//         >
//           Answer 4
//         </button>
//         <button
//           data-testid="btn-play"
//           type="button"
//         /* onClick={ handleBtmclick } */
//         >
//           Answer 5
//         </button>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getToken, getQuestion } from '../Redux/actions';

class Questions extends React.Component {
  constructor() {
    super();

    this.state = {
      game: [],
      counter: 0,
    };
  }

  componentDidMount(preview) {
    const { token } = this.props;
    if (token !== preview.token) {
      this.getToken();
    }
  }

  handleGame = async () => {
    const { token, apiGetToken } = this.props;
    const questionTotal = 5;
    const limitResponse = 3;
    const data = await getQuestion(questionTotal, token);

    if (data.response_code === limitResponse) {
      apiGetToken();
    } else {
      this.setState({
        game: data && data.results,
      });
    }
  }

  handleCounter = () => {
    this.setState((preview) => ({
      counter: preview.counter + 1,
    }));
  }

  render() {
    const { game, counter } = this.state;
    return (
      <div>
        <h1 data-testid="question-category">
          { game.length > 0 && game[counter].category }
        </h1>
        <h2 data-testid="question-text">
        { game.length > 0 && game[counter].question }
        </h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
});

const mapDispachToProps = (dispatch) => ({
  apiGetToken: () => dispatch(getQuestion()),
});

export default connect(mapStateToProps, mapDispachToProps)(Questions);

Questions.propTypes = {
  token: PropTypes.string,
}.isRequired;
